export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop',
    caption: 'First pour of the morning. Notes of wild honey, bergamot, and morning tranquility.',
    likes: 642,
    comments: 28,
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=800&auto=format&fit=crop',
    caption: 'Slow mornings at our reading nook. Unhurried pages and warm cups.',
    likes: 819,
    comments: 45,
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop',
    caption: 'Tasting batch #84. Anaerobic fermentation unlocking clean blackberry and candied lime notes.',
    likes: 512,
    comments: 19,
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
    caption: 'The precision of the steam wand. Velvety micro-foam in the making.',
    likes: 934,
    comments: 52,
  },
  {
    id: 'ig-5',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    caption: 'Pistachio babka hot from our stone deck oven. Pair with our single-origin cortado.',
    likes: 720,
    comments: 34,
  },
  {
    id: 'ig-6',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop',
    caption: 'Afternoon light casting geometric shadows across our Scandinavian oak bar.',
    likes: 1104,
    comments: 61,
  },
];
