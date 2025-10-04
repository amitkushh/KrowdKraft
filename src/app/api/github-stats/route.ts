import { NextRequest, NextResponse } from 'next/server'

interface GitHubStats {
  openIssues: number
  mergedPRs: number
  contributors: number
  stars: number
  forks: number
  lastUpdated: string
}

// Cache for GitHub stats
let statsCache: GitHubStats | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 2 * 60 * 1000 // 2 minutes in milliseconds (reduced for fresher data)

export async function GET(request: NextRequest) {
  try {
    const now = Date.now()
    const url = new URL(request.url)
    const forceRefresh = url.searchParams.get('refresh') === 'true'
    
    // Return cached data if it's still fresh and not forcing refresh
    if (statsCache && (now - cacheTimestamp) < CACHE_DURATION && !forceRefresh) {
      return NextResponse.json({
        success: true,
        data: statsCache,
        cached: true
      })
    }

    // GitHub API configuration
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN
    const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'DarshanKrishna-DK'
    const REPO_NAME = process.env.GITHUB_REPO_NAME || 'KrowdKraft'
    
    if (!GITHUB_TOKEN) {
      console.warn('GITHUB_TOKEN not found, using unauthenticated requests')
    }

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'KrowdKraft-Website'
    }
    
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }

    // Fetch repository data
    const repoResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`,
      { headers }
    )

    if (!repoResponse.ok) {
      throw new Error(`GitHub API error: ${repoResponse.status} ${repoResponse.statusText}`)
    }

    const repoData = await repoResponse.json()

    // Fetch issues (open issues)
    const issuesResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=100`,
      { headers }
    )

    if (!issuesResponse.ok) {
      throw new Error(`GitHub Issues API error: ${issuesResponse.status}`)
    }

    const issuesData = await issuesResponse.json()
    const openIssues = issuesData.filter((issue: any) => !issue.pull_request).length

    // Fetch pull requests (merged PRs)
    const prsResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=closed&per_page=100`,
      { headers }
    )

    if (!prsResponse.ok) {
      throw new Error(`GitHub PRs API error: ${prsResponse.status}`)
    }

    const prsData = await prsResponse.json()
    const mergedPRs = prsData.filter((pr: any) => pr.merged_at).length

    // Fetch contributors
    const contributorsResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`,
      { headers }
    )

    if (!contributorsResponse.ok) {
      throw new Error(`GitHub Contributors API error: ${contributorsResponse.status}`)
    }

    const contributorsData = await contributorsResponse.json()
    const contributors = contributorsData.length

    // Prepare stats data
    const stats: GitHubStats = {
      openIssues,
      mergedPRs,
      contributors,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      lastUpdated: new Date().toISOString()
    }

    // Update cache
    statsCache = stats
    cacheTimestamp = now

    return NextResponse.json({
      success: true,
      data: stats,
      cached: false
    })

  } catch (error) {
    console.error('GitHub stats fetch error:', error)
    
    // Return cached data if available, even if stale
    if (statsCache) {
      return NextResponse.json({
        success: true,
        data: statsCache,
        cached: true,
        warning: 'Using cached data due to API error'
      })
    }

    // Return fallback data if no cache available
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch GitHub stats',
      fallback: {
        openIssues: 0,
        mergedPRs: 0,
        contributors: 0,
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString()
      }
    }, { status: 500 })
  }
}
