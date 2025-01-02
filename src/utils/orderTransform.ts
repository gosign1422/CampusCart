import { CartItem } from '../types/cart';
import { getDeliveryDate } from './dateUtils';

export const transformCartItemsForOrder = (items: CartItem[]): any => {
  return {
    items: items.map(item => 
      `${item.title}${item.size ? ` (${item.size})` : ''}, ${item.price}, Qty: ${item.quantity}`
    ).join('; '),
    estimated_delivery_date: new Date(getDeliveryDate())
  };
};