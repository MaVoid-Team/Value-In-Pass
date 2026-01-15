export interface PortfolioProject {
  id: string
  type: string
  location: string
  title: string
  image: string
  description: string
  details: string[]
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
      "Premium tent structure with elegant design",
      "Custom interior styling and decoration",
      "Seamless event coordination",
      "Professional lighting setup",
      "Full catering area integration"
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
      "Large-scale tent structure",
      "Professional event setup",
      "VIP area configuration",
      "Media and broadcasting facilities",
      "Catering and hospitality services"
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
      "Traditional Middle Eastern design elements",
      "Elegant interior decoration",
      "Spacious dining area",
      "Prayer area integration",
      "Cultural ambiance and lighting"
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
      "Desert-optimized tent structure",
      "Festive decoration and lighting",
      "Outdoor entertainment area",
      "Weather-resistant setup",
      "Desert-themed interior design"
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
      "Elegant desert wedding tent",
      "Romantic lighting and decoration",
      "Premium interior styling",
      "Desert landscape integration",
      "Full wedding coordination services"
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
      "Festive New Year decoration",
      "Modern tent design",
      "Entertainment area setup",
      "Premium lighting effects",
      "Celebration-themed interior"
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
      "Large banquet tent structure",
      "Traditional village-style design",
      "Spacious dining configuration",
      "Community event optimization",
      "Full catering area setup"
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
      "Intimate gathering space",
      "Elegant Ramadan decoration",
      "Comfortable dining area",
      "Traditional design elements",
      "Warm and welcoming ambiance"
    ],
    capacity: "50-80 guests"
  },
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id)
}
