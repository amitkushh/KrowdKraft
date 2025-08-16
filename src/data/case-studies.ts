import { CaseStudy, ServiceCategory } from "@/types"

export const caseStudies: CaseStudy[] = [
  {
    id: "nike-campus-takeover",
    title: "Nike Campus Takeover",
    client: "Nike",
    description: "A month-long campus activation across 15 universities, featuring student-designed Nike customization stations, surprise athlete visits, and a viral TikTok challenge that generated 50M+ views.",
    image: "/images/case-studies/nike-campus.jpg",
    gallery: [
      "/images/case-studies/nike-campus-1.jpg",
      "/images/case-studies/nike-campus-2.jpg", 
      "/images/case-studies/nike-campus-3.jpg",
      "/images/case-studies/nike-campus-4.jpg"
    ],
    video: "/videos/nike-campus-recap.mp4",
    category: "campus-waves" as ServiceCategory,
    tags: ["athletics", "campus", "customization", "tiktok", "viral"],
    metrics: [
      { label: "TikTok Views", value: "50M+" },
      { label: "Campus Reach", value: "15 Universities" },
      { label: "Student Engagement", value: "12K+" },
      { label: "Brand Lift", value: "+34%" }
    ],
    featured: true,
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    id: "spotify-wrapped-party",
    title: "Spotify Wrapped IRL",
    client: "Spotify",
    description: "Brought the digital Spotify Wrapped experience into the physical world with personalized music installations, creator meet-ups, and exclusive listening parties in major cities.",
    image: "/images/case-studies/spotify-wrapped.jpg",
    gallery: [
      "/images/case-studies/spotify-1.jpg",
      "/images/case-studies/spotify-2.jpg",
      "/images/case-studies/spotify-3.jpg"
    ],
    category: "event-activations" as ServiceCategory,
    tags: ["music", "personalization", "cities", "creators", "installations"],
    metrics: [
      { label: "Cities Activated", value: "8" },
      { label: "Attendees", value: "25K+" },
      { label: "Social Mentions", value: "2M+" },
      { label: "Creator Partnerships", value: "150+" }
    ],
    featured: true,
    createdAt: "2023-12-01T14:00:00Z"
  },
  {
    id: "discord-community-growth",
    title: "Discord Community Growth",
    client: "Discord",
    description: "Designed and launched 12 niche gaming communities, implementing engagement strategies that increased daily active users by 300% and created sustainable creator economies.",
    image: "/images/case-studies/discord-community.jpg",
    category: "community-design" as ServiceCategory,
    tags: ["gaming", "communities", "engagement", "creators", "economies"],
    metrics: [
      { label: "Communities Launched", value: "12" },
      { label: "DAU Growth", value: "+300%" },
      { label: "Creator Revenue", value: "$500K+" },
      { label: "Retention Rate", value: "87%" }
    ],
    featured: false,
    createdAt: "2024-01-20T09:00:00Z"
  },
  {
    id: "duolingo-tiktok-takeover",
    title: "Duolingo's TikTok Takeover", 
    client: "Duolingo",
    description: "Transformed Duolingo's social presence by collaborating with language learning creators and developing the viral 'Unhinged Duo' character that became a Gen Z icon.",
    image: "/images/case-studies/duolingo-tiktok.jpg",
    gallery: [
      "/images/case-studies/duolingo-1.jpg",
      "/images/case-studies/duolingo-2.jpg"
    ],
    video: "/videos/duolingo-recap.mp4",
    category: "social-content" as ServiceCategory,
    tags: ["education", "character", "viral", "language", "personality"],
    metrics: [
      { label: "Follower Growth", value: "+2.3M" },
      { label: "Engagement Rate", value: "12.4%" },
      { label: "Viral Videos", value: "50+" },
      { label: "App Downloads", value: "+890K" }
    ],
    featured: true,
    createdAt: "2023-08-10T11:30:00Z"
  },
  {
    id: "tesla-creator-network",
    title: "Tesla Creator Network",
    client: "Tesla",
    description: "Built an exclusive creator network of automotive enthusiasts and tech reviewers, resulting in authentic content that drove pre-orders and brand advocacy.",
    image: "/images/case-studies/tesla-creators.jpg",
    category: "creator-collabs" as ServiceCategory,
    tags: ["automotive", "tech", "reviews", "advocacy", "exclusive"],
    metrics: [
      { label: "Creators Activated", value: "85" },
      { label: "Content Pieces", value: "340+" },
      { label: "Combined Reach", value: "15M+" },
      { label: "Pre-order Attribution", value: "12%" }
    ],
    featured: false,
    createdAt: "2024-02-05T16:20:00Z"
  },
  {
    id: "airbnb-gen-z-insights",
    title: "Airbnb Gen Z Travel Insights",
    client: "Airbnb", 
    description: "Conducted rapid research sprints to understand Gen Z travel behavior, leading to the development of new product features and marketing strategies.",
    image: "/images/case-studies/airbnb-research.jpg",
    category: "research-sprints" as ServiceCategory,
    tags: ["travel", "insights", "behavior", "features", "strategy"],
    metrics: [
      { label: "Research Participants", value: "2,500+" },
      { label: "Insights Generated", value: "150+" },
      { label: "Feature Concepts", value: "8" },
      { label: "Implementation Rate", value: "75%" }
    ],
    featured: false,
    createdAt: "2024-05-12T13:45:00Z"
  }
]

