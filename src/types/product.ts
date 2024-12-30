export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  sizes?: string[];
  sellerId?: string;
  sellerName?: string;
}

export interface Seller {
  id: string;
  name: string;
  products: Product[];
}