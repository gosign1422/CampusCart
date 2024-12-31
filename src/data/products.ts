import { Product } from '../types/product';
import { sellers } from './clothing';
import { accessories } from './accessories';

// Get first 4 clothing items
const featuredClothing = sellers[0].products.slice(0, 4);

// Get first 4 accessories
const featuredAccessories = accessories.slice(0, 4);

export const featuredProducts: Product[] = [
  ...featuredClothing,
  ...featuredAccessories
];