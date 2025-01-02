export interface CartItem {
  id: string;
  title: string;
  price: number;
  size?: string;
  quantity: number;
  images?: {
    url: string;
    alt: string;
  }[];
}