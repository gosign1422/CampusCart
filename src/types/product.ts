export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductDetails {
  features: string[];
  materials: string[];
  care: string[];
}

export interface Product {
  id: string;
  images: ProductImage[];
  title: string;
  originalPrice: number;
  price: number;
  description: string;
  details: ProductDetails;
  sizes?: string[];
  type?: string;
  sellerId?: string;
  sellerName?: string;
}

export interface Seller {
  id: string;
  name: string;
  products: Product[];
}