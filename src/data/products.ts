export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "shoes" | "watches" | "crocs" | "flipflops";
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  sizes: string[];
  badge?: "new" | "sale" | "trending";
}

export const products: Product[] = [
  {
    id: "puma-rs-x",
    name: "RS-X Reinvention",
    brand: "Puma",
    category: "shoes",
    price: 7999,
    originalPrice: 10999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    description: "The RS-X Reinvention takes retro running style and reinvents it with bold colors and chunky proportions. Featuring a mesh and leather upper with RS cushioning technology for all-day comfort.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    badge: "sale",
  },
  {
    id: "adidas-ultraboost",
    name: "Ultraboost 22",
    brand: "Adidas",
    category: "shoes",
    price: 15999,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop",
    description: "Experience incredible energy return with the Adidas Ultraboost 22. Featuring a Primeknit+ upper that adapts to your foot and a full-length BOOST midsole for responsive cushioning.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    badge: "trending",
  },
  {
    id: "skechers-go-walk",
    name: "Go Walk 6",
    brand: "Skechers",
    category: "shoes",
    price: 5499,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    description: "Ultra-lightweight walking shoe with Skechers' patented Hyper Pillar technology. Machine washable design with a breathable mesh upper and responsive Ultra Go cushioning.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    badge: "new",
  },
  {
    id: "crocs-classic",
    name: "Classic Clog",
    brand: "Crocs",
    category: "crocs",
    price: 3495,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=600&fit=crop",
    description: "The iconic Crocs Classic Clog. Lightweight, flexible, and comfortable with signature Croslite foam construction. Features ventilation ports for breathability and an adjustable heel strap.",
    sizes: ["M4/W6", "M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11"],
    badge: "trending",
  },
  {
    id: "birkenstock-arizona",
    name: "Arizona Sandal",
    brand: "Birkenstock",
    category: "flipflops",
    price: 8999,
    originalPrice: 10999,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop",
    description: "The legendary Birkenstock Arizona with its contoured cork-latex footbed that molds to your foot shape. Two adjustable straps with buckle closure for a perfect fit.",
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43"],
    badge: "sale",
  },
  {
    id: "adidas-slides",
    name: "Adilette Comfort",
    brand: "Adidas",
    category: "flipflops",
    price: 2999,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&h=600&fit=crop",
    description: "Cloud-soft comfort slides with the iconic three-stripe design. Contoured Cloudfoam footbed provides plush cushioning. Perfect for post-workout recovery or casual wear.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
  },
  {
    id: "puma-suede",
    name: "Suede Classic XXI",
    brand: "Puma",
    category: "shoes",
    price: 6499,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop",
    description: "An icon since 1968. The Puma Suede Classic XXI keeps the heritage alive with premium suede upper, signature Formstrip, and comfortable rubber outsole.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    badge: "new",
  },
  {
    id: "skechers-dlites",
    name: "D'Lites Fresh Start",
    brand: "Skechers",
    category: "shoes",
    price: 6999,
    originalPrice: 8499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    description: "Retro-chunky style meets modern comfort. Features a smooth leather and synthetic upper with a flexible lightweight shock-absorbing midsole and Air-Cooled Memory Foam insole.",
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8"],
    badge: "sale",
  },
  {
    id: "crocs-literide",
    name: "LiteRide 360 Clog",
    brand: "Crocs",
    category: "crocs",
    price: 4995,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    description: "Next-generation comfort with LiteRide foam insoles that are softer and lighter. A sleek, athletic-inspired design with 360-degree comfort and a modern silhouette.",
    sizes: ["M5/W7", "M6/W8", "M7/W9", "M8/W10", "M9/W11"],
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "shoes", label: "Shoes" },
  { id: "crocs", label: "Crocs" },
  { id: "flipflops", label: "Flip Flops" },
  { id: "watches", label: "Watches" },
] as const;

export const brands = ["Puma", "Adidas", "Skechers", "Crocs", "Birkenstock"] as const;
