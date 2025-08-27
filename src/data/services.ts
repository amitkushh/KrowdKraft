import { Service, ServiceCategory } from "@/types"

export const services: Service[] = [
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
    icon: "Globe",
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
    icon: "Flag",
    category: "event-activations" as ServiceCategory
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
    category: "campus-waves" as ServiceCategory
  }
]

