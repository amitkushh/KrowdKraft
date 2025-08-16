import { Service, ServiceCategory } from "@/types"

export const services: Service[] = [
  {
    id: "creator-collabs",
    title: "Creator Collabs",
    description: "Connect authentically with Gen Z through strategic creator partnerships. We identify, vet, and manage relationships with creators who genuinely align with your brand values.",
    features: [
      "Creator discovery & vetting",
      "Campaign strategy & planning", 
      "Content guidelines & brand safety",
      "Performance tracking & analytics",
      "Long-term relationship management"
    ],
    icon: "Users",
    price: "From $5K/month",
    duration: "3-12 months",
    category: "creator-collabs" as ServiceCategory
  },
  {
    id: "community-design",
    title: "Community Design",
    description: "Build thriving communities around your brand. We design engagement strategies that turn customers into advocates and advocates into communities.",
    features: [
      "Community strategy & roadmap",
      "Platform selection & setup",
      "Engagement tactics & content",
      "Moderation & community management",
      "Growth optimization & retention"
    ],
    icon: "Heart",
    price: "From $8K/month", 
    duration: "6-18 months",
    category: "community-design" as ServiceCategory
  },
  {
    id: "event-activations",
    title: "Event Activations",
    description: "Create unforgettable brand moments through experiential marketing. From pop-ups to festivals, we design experiences that generate buzz and build loyalty.",
    features: [
      "Experience design & planning",
      "Venue sourcing & logistics",
      "Interactive installations",
      "Social media integration", 
      "Post-event amplification"
    ],
    icon: "Zap",
    price: "From $15K/event",
    duration: "2-6 months",
    category: "event-activations" as ServiceCategory
  },
  {
    id: "social-content",
    title: "Social & Content",
    description: "Craft scroll-stopping content that speaks Gen Z's language. Our team stays ahead of trends to keep your brand culturally relevant and engaging.",
    features: [
      "Content strategy & planning",
      "Creative production & editing",
      "Trend analysis & adaptation",
      "Platform optimization",
      "Performance analytics"
    ],
    icon: "Camera", 
    price: "From $3K/month",
    duration: "3-12 months",
    category: "social-content" as ServiceCategory
  },
  {
    id: "campus-waves",
    title: "Campus Waves",
    description: "Tap into the energy of campus culture with authentic student-led marketing. We activate brand ambassadors and create movements that spread organically.",
    features: [
      "Student ambassador programs",
      "Campus event planning",
      "Grassroots marketing campaigns",
      "University partnerships",
      "Student insight research"
    ],
    icon: "GraduationCap",
    price: "From $4K/month",
    duration: "Semester-based",
    category: "campus-waves" as ServiceCategory
  },
  {
    id: "research-sprints", 
    title: "Research Sprints",
    description: "Get rapid insights into Gen Z behavior and preferences. Our research sprints deliver actionable intelligence to inform your marketing strategy.",
    features: [
      "Rapid user research studies",
      "Trend analysis & forecasting",
      "Competitive intelligence",
      "Consumer insight reports",
      "Strategic recommendations"
    ],
    icon: "Search",
    price: "From $2K/sprint",
    duration: "2-4 weeks",
    category: "research-sprints" as ServiceCategory
  }
]

