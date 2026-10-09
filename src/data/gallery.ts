export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'cafe-interior',
    title: 'Scandinavian Warm Oak Interior',
    category: 'The Sanctuary',
    aspect: 'tall',
    description: 'Natural linen banquettes, minimalist blonde oak tables, and soft morning sunlight.',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'artisan-cups',
    title: 'Ceramic Craft & Warm Crema',
    category: 'The Pour',
    aspect: 'square',
    description: 'Hand-thrown stoneware ceramics filled with silky micro-foam flat white.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'barista-craft',
    title: 'Precision Pour-Over Ritual',
    category: 'The Craft',
    aspect: 'wide',
    description: 'Single-origin Ethiopian Yirgacheffe blooming at 92.5°C over hand-blown glass.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'coffee-beans',
    title: 'Micro-Lot Single Origin Beans',
    category: 'The Harvest',
    aspect: 'square',
    description: 'High altitude heirloom beans roasted in small 5kg batches for nuanced aromatics.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'pastries',
    title: 'Morning Bake & Laminations',
    category: 'The Bakery',
    aspect: 'tall',
    description: 'Golden honeycomb layers of fresh butter croissants resting on marble.',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'people-moments',
    title: 'Slow Conversations & Books',
    category: 'The Moments',
    aspect: 'wide',
    description: 'A sanctuary removed from city haste where people linger, think, and connect.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'exterior-facade',
    title: 'Warm Twilight on Bloom Street',
    category: 'The Space',
    aspect: 'square',
    description: 'Understated brushed bronze signage and floor-to-ceiling glass illuminating the corner.',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop',
  },
];
