import { CartItem } from '../types/cart';

export const transformCartItemsForOrder = (items: CartItem[]): string => {
  return items.map(item => 
    `${item.title}${item.size ? ` (${item.size})` : ''}, ${item.price}, Qty: ${item.quantity}`
  ).join('; ');
};