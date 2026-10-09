export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in INR (₹)
  category: 'coffee' | 'cold-drinks' | 'tea' | 'pastries' | 'breakfast';
  tags?: string[];
  popular?: boolean;
  image?: string;
  dietary?: ('Vegan' | 'Gluten-Free' | 'Organic' | 'Signature')[];
}

export interface CoffeeBean {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  origin: string;
  elevation: string;
  process: string;
  roastLevel: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark';
  notes: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
}

