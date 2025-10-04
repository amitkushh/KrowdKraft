"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Code, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useGitHubIssues } from "@/hooks/use-github-issues"
import { GitHubIssue } from "@/types"

function IssueCard({ issue, index }: { issue: GitHubIssue; index: number }) {
    return (
        <motion.a
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
                scale: 1.03,
                rotateY: 2
            }}
            className="glass-card p-6 transform-gpu cursor-pointer group relative overflow-hidden"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-purple-400/20 to-purple-400/10 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent blur-2xl"></div>
                <div className="absolute inset-0 border border-purple-400/30 rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Issue number and labels */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground font-mono">#{issue.number}</span>
                    <div className="flex gap-2 flex-wrap justify-end">
                        {issue.labels.slice(0, 2).map(label => (
                            <Badge key={label.name} variant="neon" className="text-xs">
                                {label.name}
                            </Badge>
                        ))}
                        {issue.labels.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{issue.labels.length - 2}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-4 line-clamp-2 group-hover:text-neon transition-colors">
                    {issue.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login}
                            className="w-5 h-5 rounded-full"
                        />
                        <span>@{issue.user.login}</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-neon transition-colors">
                        <span className="text-xs">View</span>
                        <ExternalLink className="h-3 w-3" />
                    </div>
                </div>
            </div>
        </motion.a>
    )
}

function LoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-card p-6 animate-pulse">
                    <div className="flex justify-between mb-3">
                        <div className="h-4 w-12 bg-muted rounded"></div>
                        <div className="h-4 w-20 bg-muted rounded"></div>
                    </div>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-24 bg-muted rounded"></div>
                        <div className="h-4 w-16 bg-muted rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function DevHub() {
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 9

    const { data, isLoading, error } = useGitHubIssues(currentPage, perPage)

    const issues = data?.data?.issues || []
    const totalCount = data?.data?.totalCount || 0
    const hasMore = issues.length >= perPage

    return (
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Code className="h-8 w-8 text-neon" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Dev <span className="neon-text">Hub</span>
                        </h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                        Join our open-source community! Browse active issues and contribute to KrowdKraft.
                        Every contribution matters, whether you're fixing bugs or adding features.
                    </p>
                </motion.div>

                {/* Stats */}
                {!isLoading && !error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 glass-card px-6 py-3">
                            <Github className="h-5 w-5 text-neon" />
                            <span className="text-muted-foreground">
                                <span className="font-bold text-neon">{totalCount}</span> open issues waiting for contributors
                            </span>
                        </div>
                    </motion.div>
                )}

                {/* Loading State */}
                {isLoading && <LoadingSkeleton />}

                {/* Error State */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="glass-card p-8 max-w-md mx-auto">
                            <Code className="h-12 w-12 text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Failed to Load Issues</h3>
                            <p className="text-muted-foreground mb-4">
                                We couldn't fetch the latest issues from GitHub. Please try again later.
                            </p>
                            <Button
                                variant="neon"
                                onClick={() => window.location.reload()}
                            >
                                Retry
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* Issues Grid */}
                {!isLoading && !error && issues.length > 0 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                        >
                            {issues.map((issue, index) => (
                                <IssueCard key={issue.id} issue={issue} index={index} />
                            ))}
                        </motion.div>

                        {/* Pagination */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center gap-4"
                        >
                            {currentPage > 1 && (
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                >
                                    Previous
                                </Button>
                            )}

                            <div className="flex items-center gap-2 glass-card px-4">
                                <span className="text-sm text-muted-foreground">Page</span>
                                <span className="text-neon font-bold">{currentPage}</span>
                            </div>

                            {hasMore && (
                                <Button
                                    variant="neon"
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                >
                                    Next
                                </Button>
                            )}
                        </motion.div>
                    </>
                )}

                {/* Empty State */}
                {!isLoading && !error && issues.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="glass-card p-8 max-w-md mx-auto">
                            <Code className="h-12 w-12 text-neon mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">No Open Issues</h3>
                            <p className="text-muted-foreground">
                                Great news! All issues are resolved. Check back later for new opportunities to contribute.
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="glass-card p-8 max-w-2xl mx-auto">
                        <Github className="h-12 w-12 text-neon mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Ready to Contribute?</h3>
                        <p className="text-muted-foreground mb-6">
                            Check out our repository on GitHub to get started. Every contribution helps us build something amazing together.
                        </p>
                        <Button
                            variant="neon"
                            size="lg"
                            onClick={() => window.open('https://github.com/DarshanKrishna-DK/KrowdKraft', '_blank')}
                        >
                            Visit Repository
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}