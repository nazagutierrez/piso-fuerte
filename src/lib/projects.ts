export interface Project {
  id: string
  title: string
  description: string
  client?: string
  date: string
  tasks: string[]
  images: string[]
  category: string
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  opinion: string;
  audio_url: string | null;
  rating: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "reforma-integral-apartamento-madrid",
    title: "Reforma Integral Apartamento en Madrid Centro",
    description:
      "Transformación completa de un apartamento de 85m² en pleno centro de Madrid. El proyecto incluyó la redistribución de espacios, actualización completa de instalaciones eléctricas y de fontanería, y un diseño interior moderno y funcional.",
    client: "Familia García",
    date: "Enero 2024",
    category: "Remodelación",
    tasks: [
      "Demolición y retirada de tabiquería antigua",
      "Nueva distribución de espacios",
      "Instalación eléctrica completa",
      "Renovación de fontanería",
      "Colocación de suelo porcelánico",
      "Pintura y acabados finales",
      "Instalación de cocina y baños",
    ],
    images: ["/modern-renovated-apartment-living-room-interior-de.jpg", "/contemporary-kitchen-with-white-cabinets-and-marbl.jpg", "/modern-bathroom-renovation-with-glass-shower.jpg"],
  },
  {
    id: "construccion-chalet-las-rozas",
    title: "Construcción Chalet Unifamiliar en Las Rozas",
    description:
      "Proyecto de construcción desde cero de un chalet unifamiliar de 220m² distribuidos en dos plantas. Diseño contemporáneo con grandes ventanales, jardín paisajístico y piscina. Acabados de lujo y sistemas de domótica integrados.",
    client: "Sr. Martínez",
    date: "Octubre 2023",
    category: "Construcción",
    tasks: [
      "Cimentación y estructura de hormigón",
      "Levantamiento de muros y forjados",
      "Cubierta e impermeabilización",
      "Instalaciones completas (eléctrica, fontanería, climatización)",
      "Carpintería exterior de aluminio",
      "Revestimientos interiores y exteriores",
      "Paisajismo y construcción de piscina",
      "Sistema de domótica y seguridad",
    ],
    images: ["/modern-single-family-house-exterior-contemporary-a.jpg", "/luxury-house-interior-with-high-ceilings-and-large.jpg", "/backyard-with-swimming-pool-and-landscaping.jpg"],
  },
  {
    id: "reforma-oficina-corporativa",
    title: "Reforma de Oficina Corporativa en Azca",
    description:
      "Renovación completa de 350m² de espacio corporativo en el distrito financiero de Madrid. Se creó un ambiente de trabajo moderno y colaborativo con zonas abiertas, salas de reuniones acústicamente aisladas y espacios de descanso.",
    client: "Tech Solutions S.L.",
    date: "Julio 2023",
    category: "Comercial",
    tasks: [
      "Demolición selectiva manteniendo estructura",
      "Nueva distribución de espacios de trabajo",
      "Instalación de sistemas de climatización eficientes",
      "Iluminación LED regulable",
      "Divisiones de vidrio y paneles acústicos",
      "Suelo técnico registrable",
      "Pintura corporativa y señalética",
      "Mobiliario ergonómico",
    ],
    images: ["/modern-corporate-office-open-space-with-glass-part.jpg", "/contemporary-office-meeting-room-with-video-confer.jpg", "/office-breakout-area-with-comfortable-seating.jpg"],
  },
  {
    id: "restauracion-fachada-edificio",
    title: "Restauración de Fachada Edificio Histórico",
    description:
      "Proyecto de restauración y rehabilitación de la fachada de un edificio protegido de principios del siglo XX en el barrio de Salamanca. Trabajo minucioso respetando la arquitectura original mientras se mejoraban las prestaciones térmicas.",
    date: "Abril 2023",
    category: "Restauración",
    tasks: [
      "Estudio y catalogación de elementos originales",
      "Limpieza y consolidación de piedra natural",
      "Restauración de elementos ornamentales",
      "Reparación de balcones y barandillas",
      "Mejora del aislamiento térmico",
      "Restauración de carpinterías originales",
      "Pintura con materiales transpirables",
    ],
    images: ["/historic-building-facade-restoration-with-scaffold.jpg", "/restored-ornamental-details-on-classic-building-fa.jpg", "/before-and-after-historic-building-restoration.jpg"],
  },
  {
    id: "remodelacion-cocina-bano",
    title: "Remodelación de Cocina y Baño Integrados",
    description:
      "Proyecto de renovación parcial enfocado en cocina y baño principal de una vivienda familiar. Se modernizaron los espacios integrando electrodomésticos de última generación y materiales de alta calidad con diseño atemporal.",
    client: "Familia Rodríguez",
    date: "Febrero 2024",
    category: "Remodelación",
    tasks: [
      "Demolición de cocina y baño existentes",
      "Renovación de instalaciones",
      "Alicatado con gres porcelánico",
      "Instalación de cocina a medida",
      "Electrodomésticos integrados",
      "Mamparas de ducha de cristal",
      "Sanitarios suspendidos",
      "Iluminación empotrada LED",
    ],
    images: [
      "/modern-kitchen-renovation-with-island-and-stainles.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "ampliacion-terraza-cubierta",
    title: "Ampliación y Cerramiento de Terraza",
    description:
      "Ampliación de vivienda mediante el cerramiento de terraza de 30m² y su integración como zona habitable. Se instaló un sistema de ventanas correderas de gran formato que permite disfrutar del espacio todo el año.",
    client: "Sr. López",
    date: "Noviembre 2023",
    category: "Ampliación",
    tasks: [
      "Estudio estructural y permisos",
      "Refuerzo de forjado existente",
      "Instalación de carpintería de aluminio",
      "Aislamiento térmico y acústico",
      "Instalación de climatización",
      "Suelo continuo de microcemento",
      "Iluminación integrada",
      "Integración con el resto de la vivienda",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export const testimonials: Testimonial[] = [
    {
        "id": "d7fd8849-b349-4939-b91a-4e1dd3e12fa6",
        "name": "María Rodríguez",
        "role": "Propietaria",
        "opinion": "Excelente trabajo de remodelación. El equipo fue profesional, puntual y muy atento a los detalles. Recomendamos a Piso Fuerte sin dudas. Mi casa quedó hermosa y moderna.",
        "audio_url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "rating": 5,
        "featured": true,
    },
    {
        "id": "74c5a8e2-2f5c-40bd-af1b-8c9ddead1f37",
        "name": "Carlos García",
        "role": "Arquitecto",
        "opinion": "Trabajé junto a Piso Fuerte en varios proyectos y siempre cumplieron con los plazos establecidos. El nivel de profesionalismo es muy alto, usan materiales de calidad y sus terminaciones son impecables.",
        "audio_url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "rating": 5,
        "featured": true,
    },
    {
        "id": "c08720a0-80d0-483a-b258-ef0ecb4ab338",
        "name": "Laura Martínez",
        "role": "Inversora Inmobiliaria",
        "opinion": "Confié en Piso Fuerte para la construcción de mi departamento de inversión. El proyecto se completó en tiempo y forma. Los inquilinos están muy satisfechos con la calidad de la obra. Excelente relación costo-beneficio.",
        "audio_url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "rating": 5,
        "featured": true,
    },
    {
        "id": "6cb48533-6937-49b4-ad3e-92d5357c87ec",
        "name": "Sofía Fernández",
        "role": "Homeowner",
        "opinion": "La remodelación de mi baño fue increíble. El diseño propuesto fue exactamente lo que imaginaba. Los detalles en acabados, griferías y revestimientos son de calidad premium. Muy satisfecha con el trabajo realizado.",
        "audio_url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        "rating": 5,
        "featured": true,
    }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
