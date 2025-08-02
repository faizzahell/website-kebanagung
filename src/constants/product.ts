export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  seller: string;
  location: string;
  contact: string;
  category: string;
  inStock: boolean;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Keripik Singkong Original",
    description: "Keripik singkong renyah dengan bumbu tradisional khas desa",
    image: "/images/product/example.png",
    price: 15000,
    originalPrice: 20000,
    rating: 4.8,
    reviews: 45,
    seller: "Ibu Sari",
    location: "RT 02/RW 01",
    contact: "081234567890",
    category: "Makanan",
    inStock: true
  },
  {
    id: 2,
    name: "Madu Asli Hutan",
    description: "Madu murni dari lebah hutan tanpa campuran bahan kimia",
    image: "/images/product/example.png",
    price: 85000,
    rating: 4.9,
    reviews: 32,
    seller: "Pak Bambang",
    location: "RT 05/RW 02",
    contact: "081234567891",
    category: "Makanan",
    inStock: true
  },
  {
    id: 3,
    name: "Tas Anyaman Pandan",
    description: "Tas cantik hasil anyaman pandan berkualitas tinggi",
    image: "/images/product/example.png",
    price: 120000,
    originalPrice: 150000,
    rating: 4.7,
    reviews: 28,
    seller: "Ibu Wati",
    location: "RT 03/RW 01",
    contact: "081234567892",
    category: "Kerajinan",
    inStock: true
  },
  {
    id: 4,
    name: "Kopi Robusta Premium",
    description: "Kopi robusta pilihan dari kebun sendiri dengan cita rasa khas",
    image: "/images/product/example.png",
    price: 65000,
    rating: 4.6,
    reviews: 52,
    seller: "Pak Joko",
    location: "RT 04/RW 02",
    contact: "081234567893",
    category: "Minuman",
    inStock: false
  },
  {
    id: 5,
    name: "Batik Tulis Motif Desa",
    description: "Batik tulis dengan motif khas desa yang elegan dan berkualitas",
    image: "/images/product/example.png",
    price: 280000,
    rating: 4.9,
    reviews: 18,
    seller: "Ibu Ratna",
    location: "RT 01/RW 01",
    contact: "081234567894",
    category: "Fashion",
    inStock: true
  },
  {
    id: 6,
    name: "Sambal Pecel Homemade",
    description: "Sambal pecel dengan resep turun temurun yang autentik",
    image: "/images/product/example.png",
    price: 25000,
    rating: 4.8,
    reviews: 67,
    seller: "Ibu Ning",
    location: "RT 02/RW 02",
    contact: "081234567895",
    category: "Makanan",
    inStock: true
  },
  {
    id: 7,
    name: "Pot Tanaman Gerabah",
    description: "Pot tanaman dari gerabah buatan tangan dengan desain unik",
    image: "/images/product/example.png",
    price: 45000,
    originalPrice: 55000,
    rating: 4.5,
    reviews: 23,
    seller: "Pak Agus",
    location: "RT 06/RW 03",
    contact: "081234567896",
    category: "Kerajinan",
    inStock: true
  },
  {
    id: 8,
    name: "Gula Aren Organik",
    description: "Gula aren murni tanpa pengawet dari pohon aren sendiri",
    image: "/images/product/example.png",
    price: 35000,
    rating: 4.7,
    reviews: 41,
    seller: "Pak Sutrisno",
    location: "RT 07/RW 03",
    contact: "081234567897",
    category: "Makanan",
    inStock: true
  }
];