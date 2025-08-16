import { Event, EventCategory } from "@/types"

export const events: Event[] = [
  {
    id: "gen-z-marketing-summit-2024",
    title: "Gen Z Marketing Summit 2024",
    description: "Join us for the ultimate gathering of Gen Z marketing minds! This two-day summit brings together the brightest creators, marketers, and brand strategists to share insights on what actually moves the next generation. From TikTok trends to authentic brand storytelling, we'll dive deep into the cultural currents shaping youth engagement today.",
    shortDescription: "The ultimate gathering of Gen Z marketing minds exploring authentic brand engagement.",
    date: "2024-09-15",
    endDate: "2024-09-16",
    time: "09:00",
    endTime: "18:00",
    location: "San Francisco, CA",
    city: "San Francisco",
    venue: "The Fillmore",
    image: "/images/events/gen-z-summit.jpg",
    banner: "/images/events/gen-z-summit-banner.jpg",
    category: "conference" as EventCategory,
    tags: ["marketing", "gen-z", "creators", "brands", "social-media"],
    price: 299,
    maxAttendees: 500,
    currentAttendees: 342,
    organizer: {
      id: "krowdkraft-team",
      name: "KrowdKraft Team",
      bio: "The minds behind the cultural bridge between brands and Gen Z",
      avatar: "/images/team/krowdkraft-avatar.jpg",
      website: "https://krowdkraft.com",
      social: {
        instagram: "@krowdkraft",
        twitter: "@krowdkraft"
      },
      events: ["gen-z-marketing-summit-2024"],
      verified: true
    },
    speakers: [
      {
        id: "sarah-chen",
        name: "Sarah Chen",
        title: "Head of Creator Strategy",
        company: "TikTok",
        bio: "Leading creator partnerships and youth engagement strategies at TikTok",
        avatar: "/images/speakers/sarah-chen.jpg",
        social: {
          twitter: "@sarahchen",
          linkedin: "sarah-chen-tiktok"
        }
      },
      {
        id: "marcus-johnson",
        name: "Marcus Johnson",
        title: "Brand Strategist",
        company: "Nike",
        bio: "Crafting authentic brand narratives that resonate with youth culture",
        avatar: "/images/speakers/marcus-johnson.jpg",
        social: {
          linkedin: "marcus-johnson-nike"
        }
      }
    ],
    schedule: [
      {
        id: "opening-keynote",
        title: "The Future of Youth Marketing",
        description: "Opening keynote on emerging trends and cultural shifts",
        startTime: "09:00",
        endTime: "10:00",
        speaker: {
          id: "sarah-chen",
          name: "Sarah Chen",
          title: "Head of Creator Strategy",
          company: "TikTok",
          bio: "Leading creator partnerships and youth engagement strategies at TikTok",
          avatar: "/images/speakers/sarah-chen.jpg",
          social: {
            twitter: "@sarahchen",
            linkedin: "sarah-chen-tiktok"
          }
        },
        type: "keynote"
      }
    ],
    tickets: [
      {
        id: "early-bird",
        name: "Early Bird",
        description: "Limited time special pricing",
        price: 199,
        maxQuantity: 100,
        currentSold: 89,
        features: ["Two-day access", "Breakfast & lunch", "Networking sessions"],
        available: true
      },
      {
        id: "standard",
        name: "Standard",
        description: "Full conference access",
        price: 299,
        maxQuantity: 300,
        currentSold: 186,
        features: ["Two-day access", "All meals", "Networking sessions", "Workshop access"],
        available: true
      },
      {
        id: "vip",
        name: "VIP Experience",
        description: "Premium access with exclusive perks",
        price: 499,
        maxQuantity: 50,
        currentSold: 32,
        features: ["Two-day access", "All meals", "VIP lounge", "Speaker meet & greet", "Exclusive swag"],
        available: true
      }
    ],
    status: "published",
    featured: true,
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-08-10T15:30:00Z"
  },
  {
    id: "creator-collab-workshop",
    title: "Creator Collaboration Workshop",
    description: "Learn the art and science of successful creator partnerships. This hands-on workshop covers everything from finding the right creators to measuring campaign success.",
    shortDescription: "Master the art of creator partnerships in this hands-on workshop.",
    date: "2024-09-28",
    time: "14:00",
    endTime: "17:00",
    location: "Los Angeles, CA",
    city: "Los Angeles",
    venue: "Creator House LA",
    image: "/images/events/creator-workshop.jpg",
    category: "workshop" as EventCategory,
    tags: ["creators", "partnerships", "influencer-marketing"],
    price: 89,
    maxAttendees: 50,
    currentAttendees: 23,
    organizer: {
      id: "krowdkraft-team",
      name: "KrowdKraft Team",
      bio: "The minds behind the cultural bridge between brands and Gen Z",
      avatar: "/images/team/krowdkraft-avatar.jpg",
      website: "https://krowdkraft.com",
      social: {
        instagram: "@krowdkraft",
        twitter: "@krowdkraft"
      },
      events: ["creator-collab-workshop"],
      verified: true
    },
    speakers: [],
    schedule: [],
    tickets: [
      {
        id: "workshop-ticket",
        name: "Workshop Access",
        description: "3-hour intensive workshop",
        price: 89,
        maxQuantity: 50,
        currentSold: 23,
        features: ["3-hour workshop", "Take-home materials", "Light refreshments"],
        available: true
      }
    ],
    status: "published",
    featured: false,
    createdAt: "2024-07-20T14:00:00Z",
    updatedAt: "2024-08-05T09:15:00Z"
  },
  {
    id: "campus-culture-fest",
    title: "Campus Culture Festival",
    description: "A celebration of campus culture featuring live music, art installations, and brand activations designed by and for students.",
    shortDescription: "Celebrating campus culture with music, art, and student-driven brand experiences.",
    date: "2024-10-12",
    time: "12:00",
    endTime: "22:00",
    location: "Berkeley, CA",
    city: "Berkeley",
    venue: "UC Berkeley Campus",
    image: "/images/events/campus-fest.jpg",
    category: "festival" as EventCategory,
    tags: ["campus", "culture", "music", "art", "students"],
    price: 0,
    maxAttendees: 2000,
    currentAttendees: 847,
    organizer: {
      id: "krowdkraft-team",
      name: "KrowdKraft Team",
      bio: "The minds behind the cultural bridge between brands and Gen Z",
      avatar: "/images/team/krowdkraft-avatar.jpg",
      website: "https://krowdkraft.com",
      social: {
        instagram: "@krowdkraft",
        twitter: "@krowdkraft"
      },
      events: ["campus-culture-fest"],
      verified: true
    },
    speakers: [],
    schedule: [],
    tickets: [
      {
        id: "free-admission",
        name: "Free Admission",
        description: "Open to all students and community members",
        price: 0,
        maxQuantity: 2000,
        currentSold: 847,
        features: ["Festival access", "Food trucks", "Live performances"],
        available: true
      }
    ],
    status: "published",
    featured: true,
    createdAt: "2024-08-01T12:00:00Z",
    updatedAt: "2024-08-12T16:45:00Z"
  }
]

