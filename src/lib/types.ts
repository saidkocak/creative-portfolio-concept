export type Project = {
  id: string;
  name: string;
  type: string;
  location: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  visuals: string[];
};

export const ARCHITECTURE_PROJECTS: Project[] = [
  {
    id: "01",
    name: "Villa Moderna",
    type: "Residential",
    location: "Los Angeles, CA",
    year: "2024",
    image: "/img/arch-imgs/01.png",
    description: "Contemporary villa with minimalist design",
    longDescription: "Contemporary villa with minimalist design. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "02",
    name: "Urban Loft",
    type: "Residential",
    location: "New York, NY",
    year: "2023",
    image: "/img/arch-imgs/02.png",
    description: "Industrial-style loft in downtown Manhattan",
    longDescription: "Industrial-style loft in downtown Manhattan. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "03",
    name: "Zen House",
    type: "Residential",
    location: "Kyoto, Japan",
    year: "2024",
    image: "/img/arch-imgs/03.png",
    description: "Traditional Japanese architecture with modern elements",
    longDescription: "Traditional Japanese architecture with modern elements. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "04",
    name: "Glass Tower",
    type: "Commercial",
    location: "London, UK",
    year: "2023",
    image: "/img/arch-imgs/04.png",
    description: "Corporate headquarters with sustainable design",
    longDescription: "Corporate headquarters with sustainable design. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "05",
    name: "Cultural Center",
    type: "Public",
    location: "Barcelona, Spain",
    year: "2024",
    image: "/img/arch-imgs/05.png",
    description: "Community space for arts and culture",
    longDescription: "Community space for arts and culture. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "06",
    name: "Eco Residence",
    type: "Residential",
    location: "Copenhagen, Denmark",
    year: "2023",
    image: "/img/arch-imgs/06.png",
    description: "Sustainable living with renewable energy",
    longDescription: "Sustainable living with renewable energy. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "07",
    name: "Tech Campus",
    type: "Commercial",
    location: "San Francisco, CA",
    year: "2024",
    image: "/img/arch-imgs/07.png",
    description: "Innovation hub for technology companies",
    longDescription: "Innovation hub for technology companies. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "08",
    name: "Boutique Hotel",
    type: "Hospitality",
    location: "Paris, France",
    year: "2023",
    image: "/img/arch-imgs/08.png",
    description: "Luxury accommodation with contemporary design",
    longDescription: "Luxury accommodation with contemporary design. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "09",
    name: "Library Extension",
    type: "Public",
    location: "Toronto, Canada",
    year: "2024",
    image: "/img/arch-imgs/09.png",
    description: "Modern addition to historic library building",
    longDescription: "Modern addition to historic library building. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "010",
    name: "Wellness Center",
    type: "Healthcare",
    location: "Sydney, Australia",
    year: "2023",
    image: "/img/arch-imgs/010.png",
    description: "Holistic health facility with biophilic design",
    longDescription: "Holistic health facility with biophilic design. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "011",
    name: "Artist Studio",
    type: "Creative",
    location: "Berlin, Germany",
    year: "2024",
    image: "/img/arch-imgs/011.png",
    description: "Creative workspace with natural lighting",
    longDescription: "Creative workspace with natural lighting. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "012",
    name: "Penthouse Suite",
    type: "Residential",
    location: "Miami, FL",
    year: "2023",
    image: "/img/arch-imgs/012.png",
    description: "Luxury apartment with ocean views",
    longDescription: "Luxury apartment with ocean views. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "013",
    name: "Community Hub",
    type: "Public",
    location: "Amsterdam, Netherlands",
    year: "2024",
    image: "/img/arch-imgs/013.png",
    description: "Multi-purpose space for local community",
    longDescription: "Multi-purpose space for local community",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "014",
    name: "Corporate Office",
    type: "Commercial",
    location: "Singapore",
    year: "2023",
    image: "/img/arch-imgs/014.png",
    description: "Modern office space with flexible layouts",
    longDescription: "Modern office space with flexible layouts. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "015",
    name: "Countryside Retreat",
    type: "Residential",
    location: "Tuscany, Italy",
    year: "2024",
    image: "/img/arch-imgs/015.png",
    description: "Rural villa with traditional materials",
    longDescription: "Rural villa with traditional materials. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "016",
    name: "Urban Plaza",
    type: "Public",
    location: "Mexico City, Mexico",
    year: "2023",
    image: "/img/arch-imgs/016.png",
    description: "Public square with integrated retail",
    longDescription: "Public square with integrated retail. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "017",
    name: "Riverside Pavilion",
    type: "Recreational",
    location: "Portland, OR",
    year: "2024",
    image: "/img/arch-imgs/017.png",
    description: "Waterfront structure for community events",
    longDescription: "Waterfront structure for community events. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "018",
    name: "Innovation Lab",
    type: "Educational",
    location: "Boston, MA",
    year: "2023",
    image: "/img/arch-imgs/018.png",
    description: "Research facility for emerging technologies",
    longDescription: "Research facility for emerging technologies. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "019",
    name: "Mountain Lodge",
    type: "Hospitality",
    location: "Aspen, CO",
    year: "2024",
    image: "/img/arch-imgs/019.png",
    description: "Alpine retreat with panoramic views",
    longDescription: "Alpine retreat with panoramic views. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "020",
    name: "Gallery Space",
    type: "Cultural",
    location: "Seoul, South Korea",
    year: "2023",
    image: "/img/arch-imgs/020.png",
    description: "Contemporary art exhibition venue",
    longDescription: "Contemporary art exhibition venue. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "021",
    name: "Solar Pavilion",
    type: "Experimental",
    location: "Phoenix, AZ",
    year: "2024",
    image: "/img/arch-imgs/021.png",
    description: "Net-zero energy demonstration project",
    longDescription: "Net-zero energy demonstration project. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "022",
    name: "Waterfront Tower",
    type: "Mixed-Use",
    location: "Vancouver, Canada",
    year: "2023",
    image: "/img/arch-imgs/022.png",
    description: "Residential and commercial complex by the water",
    longDescription: "Residential and commercial complex by the water. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  },
  {
    id: "023",
    name: "Desert House",
    type: "Residential",
    location: "Scottsdale, AZ",
    year: "2024",
    image: "/img/arch-imgs/023.png",
    description: "Climate-responsive design for arid environments",
    longDescription: "Climate-responsive design for arid environments. Lorem ipsum dolor sit amet consectetur. Lobortis rhoncus malesuada ut eget commodo turpis. Lectus id proin faucibus nulla nisi pellentesque massa augue amet. Eget nulla morbi id non purus fermentum. Pellentesque condimentum diam pharetra nullam non dolor eu cras sed. A sem eleifend nec aliquam. Enim nec sit tristique tellus morbi nisi netus dignissim.",
    visuals: ["/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png", "/img/arch-imgs/01.png"]
  }
];
