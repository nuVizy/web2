export type ProjectCategory = 'Photography' | 'Videography' | 'Music Video' | 'Design';

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  category: ProjectCategory;
  role: string;
  description: string;
  coverImage: { src: string; alt: string };
  galleryImages: Array<{ src: string; alt: string }>;
  credits: string[];
  tags: string[];
  location?: string;
}

// Placeholder images sourced from Pexels (royalty-free placeholders)
// Credit: https://www.pexels.com
const baseUrl = 'https://images.pexels.com/photos';

export const photographyProjects: Project[] = [
  {
    id: 'photo-01',
    slug: 'lumen-portraits',
    title: 'Lumen Portraits',
    year: 2024,
    category: 'Photography',
    role: 'Lead Photographer',
    description: 'Moody portrait set capturing quiet confidence with rim light and sculpted shadows.',
    coverImage: { src: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg', alt: 'Studio portrait of an artist with dramatic lighting' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', alt: 'Close portrait with soft falloff' },
      { src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', alt: 'Profile view with rim light' },
      { src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', alt: 'Hands adjusting lighting on set' }
    ],
    credits: ['Camera: Aria T.', 'Styling: Kemi Lowe', 'Retouch: nuViz team'],
    tags: ['Portrait', 'Studio', 'Editorial'],
    location: 'Brooklyn, NY'
  },
  {
    id: 'photo-02',
    slug: 'neon-nightwalk',
    title: 'Neon Nightwalk',
    year: 2023,
    category: 'Photography',
    role: 'Director of Photography',
    description: 'Late-night city study with reflective glass, neon spill, and brisk pacing.',
    coverImage: { src: 'https://images.pexels.com/photos/1068524/pexels-photo-1068524.jpeg', alt: 'Neon reflections in downtown street at night' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', alt: 'Silhouette against neon sign' },
      { src: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg', alt: 'Blurred traffic lights with long exposure' },
      { src: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg', alt: 'Street fashion portrait with neon' }
    ],
    credits: ['Producer: Jonah W.', 'Color: nuViz Lab'],
    tags: ['Street', 'Color', 'Night']
  },
  {
    id: 'photo-03',
    slug: 'solstice-shores',
    title: 'Solstice Shores',
    year: 2022,
    category: 'Photography',
    role: 'Photographer',
    description: 'Coastal editorial exploring soft light, wind movement, and grounded posture.',
    coverImage: { src: 'https://images.pexels.com/photos/175687/pexels-photo-175687.jpeg', alt: 'Model on rocky shoreline during golden hour' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', alt: 'Waves breaking behind subject' },
      { src: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg', alt: 'Minimal styling with coastal textures' }
    ],
    credits: ['Stylist: Lo Rivera', 'HMU: Dae Song'],
    tags: ['Editorial', 'Landscape', 'Motion'],
    location: 'Big Sur, CA'
  }
];

export const videographyProjects: Project[] = [
  {
    id: 'video-01',
    slug: 'halcyon-brand-film',
    title: 'Halcyon Brand Film',
    year: 2024,
    category: 'Videography',
    role: 'Director & DP',
    description: 'Quiet brand film stitched from morning rituals and tactile product shots.',
    coverImage: { src: 'https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg', alt: 'Still from brand film featuring sunrise through window' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg', alt: 'Pour-over coffee slow motion' },
      { src: 'https://images.pexels.com/photos/1025467/pexels-photo-1025467.jpeg', alt: 'Hands touching linen fabric' },
      { src: 'https://images.pexels.com/photos/545013/pexels-photo-545013.jpeg', alt: 'Wide shot of minimalist living room' }
    ],
    credits: ['Producer: Nia Park', 'Editor: nuViz Studio', 'Color: NVS Grade'],
    tags: ['Brand Film', 'Lifestyle', 'Color Grade'],
    location: 'Los Angeles, CA'
  },
  {
    id: 'video-02',
    slug: 'pulse-event-recap',
    title: 'Pulse Event Recap',
    year: 2023,
    category: 'Videography',
    role: 'Director',
    description: 'High-energy event film with handheld texture, layered audio, and quick punch edits.',
    coverImage: { src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', alt: 'Crowd cheering at live event' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg', alt: 'Performer on stage with lights' },
      { src: 'https://images.pexels.com/photos/1190296/pexels-photo-1190296.jpeg', alt: 'Audience reaction shot' }
    ],
    credits: ['1st AC: Lee Martin', 'Sound: Paloma Reyes'],
    tags: ['Event', 'Recap', 'Energy']
  }
];

export const musicVideoProjects: Project[] = [
  {
    id: 'mv-01',
    slug: 'midnight-parade',
    title: 'Midnight Parade',
    year: 2024,
    category: 'Music Video',
    role: 'Creative Director',
    description: 'Performance-driven music video blending kinetic camera moves with painterly lighting.',
    coverImage: { src: 'https://images.pexels.com/photos/1670920/pexels-photo-1670920.jpeg', alt: 'Artist performing under blue stage light' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg', alt: 'Behind the scenes lighting grid' },
      { src: 'https://images.pexels.com/photos/176307/pexels-photo-176307.jpeg', alt: 'Choreography moment with spotlight' },
      { src: 'https://images.pexels.com/photos/187349/pexels-photo-187349.jpeg', alt: 'Singer close-up with prism effect' }
    ],
    credits: ['Artist: LUNE', 'Choreography: The Grid', 'Editor: nuViz Post'],
    tags: ['Performance', 'Color', 'Motion']
  },
  {
    id: 'mv-02',
    slug: 'emberlines',
    title: 'Emberlines',
    year: 2022,
    category: 'Music Video',
    role: 'Director & DP',
    description: 'Narrative-driven piece with analog-inspired textures and grounded character work.',
    coverImage: { src: 'https://images.pexels.com/photos/854648/pexels-photo-854648.jpeg', alt: 'Two characters framed in warm backlight' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg', alt: 'Actor walking through foggy forest' },
      { src: 'https://images.pexels.com/photos/2310644/pexels-photo-2310644.jpeg', alt: 'Gaffer adjusting tungsten practicals' }
    ],
    credits: ['Producer: Quinn Ford', 'Color: Amber Lab'],
    tags: ['Narrative', 'Analog', 'Story']
  }
];

export const designProjects: Project[] = [
  {
    id: 'design-01',
    slug: 'pulse-identity',
    title: 'Pulse Identity',
    year: 2024,
    category: 'Design',
    role: 'Art Director',
    description: 'Identity suite for an audio collective—monoline logotype, kinetic lines, vinyl-ready sleeves.',
    coverImage: { src: 'https://images.pexels.com/photos/210/pexels-photo.jpg', alt: 'Brand identity mockups with bold typography' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/277455/pexels-photo-277455.jpeg', alt: 'Business cards and logotype' },
      { src: 'https://images.pexels.com/photos/1769/pexels-photo.jpg', alt: 'Vinyl sleeve artwork with vibrant gradients' }
    ],
    credits: ['Design: nuViz Studio', 'Illustration: Ara M.'],
    tags: ['Branding', 'Print', 'Music']
  },
  {
    id: 'design-02',
    slug: 'signal-posters',
    title: 'Signal Posters',
    year: 2023,
    category: 'Design',
    role: 'Designer',
    description: 'Poster series for an avant festival—tight grids, metallic inks, deliberate negative space.',
    coverImage: { src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg', alt: 'Poster wall with bold graphic design' },
    galleryImages: [
      { src: 'https://images.pexels.com/photos/210/pexels-photo.jpg', alt: 'Close up of metallic ink poster' },
      { src: 'https://images.pexels.com/photos/277455/pexels-photo-277455.jpeg', alt: 'Series of posters aligned on wall' }
    ],
    credits: ['Art Direction: nuViz Studio'],
    tags: ['Poster', 'Typography', 'Print'],
    location: 'Toronto, CA'
  }
];

export const allProjects: Project[] = [
  ...photographyProjects,
  ...videographyProjects,
  ...musicVideoProjects,
  ...designProjects
];
