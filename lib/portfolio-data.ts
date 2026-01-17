export interface PortfolioProject {
  id: string
  type: string
  location: string
  title: string
  image: string
  description: string
  details: string[] // These will be translation keys
  date?: string
  capacity?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "wedding-tent-dubai",
    type: "WEDDING",
    location: "Dubai, UAE",
    title: "Wedding Tent",
    image: "/carousel-wedding-luxury.jpg",
    description: "An elegant luxury wedding tent setup in the heart of Dubai, featuring premium interior styling and seamless coordination. This breathtaking venue showcased our commitment to creating unforgettable moments with attention to every detail.",
    details: [
      "detail_premium_tent",
      "detail_custom_interior",
      "detail_seamless_coordination",
      "detail_professional_lighting",
      "detail_catering_area"
    ],
    capacity: "200-300 guests"
  },
  {
    id: "championship-tent-al-ain",
    type: "FIFA",
    location: "Al Ain, UAE",
    title: "Championship Tent",
    image: "/carousel-corporate-gala.jpg",
    description: "A grand championship tent setup for a major sporting event in Al Ain. This project demonstrated our ability to handle large-scale events with precision and professionalism, creating an impressive venue for athletes and spectators.",
    details: [
      "detail_large_scale",
      "detail_professional_setup",
      "detail_vip_area",
      "detail_media_facilities",
      "detail_hospitality_services"
    ],
    capacity: "500+ guests"
  },
  {
    id: "ramadan-tent-abu-dhabi",
    type: "RAMADAN",
    location: "Abu Dhabi, UAE",
    title: "Ramadan Tent",
    image: "/carousel-ramadan-iftar.jpg",
    description: "A beautifully designed Ramadan Iftar tent in Abu Dhabi, honoring cultural traditions with modern elegance. This project showcased our expertise in creating culturally inspired spaces that bring communities together.",
    details: [
      "detail_traditional_design",
      "detail_elegant_decoration",
      "detail_spacious_dining",
      "detail_prayer_area",
      "detail_cultural_ambiance"
    ],
    capacity: "150-200 guests"
  },
  {
    id: "desert-party-tent-al-ain",
    type: "DESERT",
    location: "Al Ain, UAE",
    title: "Desert Party Tent",
    image: "/carousel-festival-setup.jpg",
    description: "An exciting desert party tent setup in Al Ain, perfect for celebrations under the stars. This vibrant venue combined the natural beauty of the desert with premium tent solutions for an unforgettable experience.",
    details: [
      "detail_desert_optimized",
      "detail_festive_decoration",
      "detail_outdoor_entertainment",
      "detail_weather_resistant",
      "detail_desert_themed"
    ],
    capacity: "100-150 guests"
  },
  {
    id: "desert-wedding-setup-al-ain",
    type: "WEDDING",
    location: "Al Ain, UAE",
    title: "Desert Wedding Setup",
    image: "/luxury-tent-event-setup-elegant.jpg",
    description: "A romantic desert wedding setup in Al Ain, featuring an elegant tent structure that perfectly complemented the natural desert landscape. This project showcased our ability to create magical moments in unique locations.",
    details: [
      "detail_elegant_wedding_tent",
      "detail_romantic_lighting",
      "detail_premium_styling",
      "detail_landscape_integration",
      "detail_wedding_coordination"
    ],
    capacity: "80-120 guests"
  },
  {
    id: "new-year-themed-tent-dubai",
    type: "CELEBRATION",
    location: "Dubai, UAE",
    title: "New Year Themed Tent",
    image: "/carousel-intimate-celebration.jpg",
    description: "A festive New Year celebration tent in Dubai, designed to welcome the new year in style. This vibrant venue featured modern design elements and premium amenities for an unforgettable celebration.",
    details: [
      "detail_new_year_decoration",
      "detail_modern_design",
      "detail_entertainment_setup",
      "detail_lighting_effects",
      "detail_celebration_interior"
    ],
    capacity: "150-200 guests"
  },
  {
    id: "al-zaeem-village-tent",
    type: "BANQUET",
    location: "Al Zaeem, UAE",
    title: "Al Zaeem Village Tent",
    image: "/luxury-tent-event.jpg",
    description: "A grand banquet tent setup in Al Zaeem Village, perfect for large gatherings and community events. This project demonstrated our expertise in creating spacious, elegant venues for traditional celebrations.",
    details: [
      "detail_banquet_structure",
      "detail_village_style",
      "detail_dining_configuration",
      "detail_community_optimization",
      "detail_catering_setup"
    ],
    capacity: "300-400 guests"
  },
  {
    id: "iftar-gathering-al-ain",
    type: "RAMADAN",
    location: "Al Ain, UAE",
    title: "Iftar Gathering",
    image: "/hero-luxury-events.jpg",
    description: "An intimate Iftar gathering tent in Al Ain, designed to bring families and friends together during the holy month. This elegant setup honored traditions while providing modern comfort and style.",
    details: [
      "detail_intimate_space",
      "detail_ramadan_decoration",
      "detail_comfortable_dining",
      "detail_traditional_elements",
      "detail_welcoming_ambiance"
    ],
    capacity: "50-80 guests"
  },
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id)
}
