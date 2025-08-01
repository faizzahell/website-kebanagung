import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, MapPin, Phone, Eye, Heart, User } from 'lucide-react';

interface Product {
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

interface ProductCardProps {
  product: Product;
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Keripik Singkong Original",
    description: "Keripik singkong renyah dengan bumbu tradisional khas desa",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1594736797933-d0fdc6b2734d?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
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

const Shopping: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsPerPage: number = 12;
  
  const totalPages = Math.ceil(productsData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productsData.slice(startIndex, endIndex);

  const handlePrevPage = (): void => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number): void => {
    setCurrentPage(page);
  };

  // const openModal = (product: Product): void => {
  //   setSelectedProduct(product);
  // };

  const closeModal = (): void => {
    setSelectedProduct(null);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="relative px-4 mt-16 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">UMKM Desa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Produk <span className="text-green-700">Lokal</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Dukung ekonomi desa dengan membeli produk-produk berkualitas dari UMKM Desa Keban Agung
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
              />
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-100/50">
          <div className="flex items-center justify-between">
            <div className="text-slate-600 text-sm">
              Menampilkan {startIndex + 1}-{Math.min(endIndex, productsData.length)} dari {productsData.length} produk
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${currentPage === 1 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-green-700 text-white hover:bg-green-800 hover:shadow-md'
                  }
                `}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, index: number) => {
                  const page: number = index + 1;
                  const isCurrentPage: boolean = page === currentPage;
                  
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`
                          w-10 h-10 rounded-lg font-medium text-sm transition-all duration-200
                          ${isCurrentPage
                            ? 'bg-green-700 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-600 hover:bg-green-100 hover:text-green-700'
                          }
                        `}
                      >
                        {page}
                      </button>
                    );
                  }
                  
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 text-slate-400">
                        ...
                      </span>
                    );
                  }
                  
                  return null;
                })}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${currentPage === totalPages 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-green-700 text-white hover:bg-green-800 hover:shadow-md'
                  }
                `}
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full mb-2">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800">{selectedProduct.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProduct.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} review)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-700">{formatPrice(selectedProduct.price)}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span>Penjual: {selectedProduct.seller}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProduct.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span>{selectedProduct.contact}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors">
                      Hubungi Penjual
                    </button>
                    <button className="px-4 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product): void => {
    setSelectedProduct(product);
  };

  const closeModal = (): void => {
    setSelectedProduct(null);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBWODBIODBWNjBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik02MCA4MEgxNDBWMTQwSDYwVjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
  };

  return (
    <>
      <div 
        className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col"
        onClick={() => openModal(product)}
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Stok Habis
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-2 py-1 bg-green-700 text-white text-xs font-medium rounded-full">
              {product.category}
            </span>
          </div>

          {product.originalPrice && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <h4 className="font-semibold text-sm text-slate-800 line-clamp-2 group-hover:text-green-700 transition-colors duration-300 mb-2">
            {product.name}
          </h4>
          
          <p className="text-xs text-slate-600 line-clamp-2 mb-3 flex-1">
            {product.description}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
              ))}
              <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-green-700 text-sm">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through ml-1">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
            </div>
            
            <div className="text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{product.seller}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 w-full bg-slate-200 rounded-full h-0.5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-600 to-green-500 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full mb-2">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800">{selectedProduct.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProduct.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} review)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-700">{formatPrice(selectedProduct.price)}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span>Penjual: {selectedProduct.seller}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProduct.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span>{selectedProduct.contact}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors">
                      Hubungi Penjual
                    </button>
                    <button className="px-4 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shopping;