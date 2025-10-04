import { GitHubIssue } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const perPage = parseInt(searchParams.get('per_page') || '9')

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN
    const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'DarshanKrishna-DK'
    const REPO_NAME = process.env.GITHUB_REPO_NAME || 'KrowdKraft'

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'KrowdKraft-Website'
    }

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }

    const issuesUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&sort=created&direction=desc&page=${page}&per_page=${perPage}`
    
    const response = await fetch(issuesUrl, { 
      headers,
      next: { revalidate: 120 } // Cache for 2 minutes
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const issues: GitHubIssue[] = await response.json()

    // Filter out pull requests
    const filteredIssues = issues.filter(issue => !issue.html_url.includes('/pull/'))

    // Get total count from Link header
    const linkHeader = response.headers.get('Link')
    let totalCount = filteredIssues.length
    
    if (linkHeader) {
      const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/)
      if (lastPageMatch) {
        totalCount = parseInt(lastPageMatch[1]) * perPage
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        issues: filteredIssues,
        totalCount,
        page,
        perPage
      }
    })

  } catch (error: any) {
    console.error('Error fetching GitHub issues:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to fetch GitHub issues'
    }, { status: 500 })
  }
}