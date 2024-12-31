import { Product } from '../types/product';

export const accessories: Product[] = [
  {
    id: 'acc-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
        alt: 'Classic Black Backpack'
      }
    ],
    title: 'Campus Elite Backpack',
    originalPrice: 5000,
    price: 1499,
    type: 'Backpack',
    description: 'A stylish and spacious backpack perfect for carrying your books and laptop. Features multiple compartments and water-resistant material.',
    details: {
      features: [
        'Multiple compartments',
        'Laptop sleeve (up to 15.6")',
        'Water-resistant material',
        'Padded shoulder straps'
      ],
      materials: [
        'Premium polyester',
        'YKK zippers',
        'Reinforced bottom',
        'Anti-theft pockets'
      ],
      care: [
        'Spot clean only',
        'Air dry',
        'Do not machine wash',
        'Store in cool, dry place'
      ]
    },
    sellerId: 'xyz',
    sellerName: 'Xyz'
  },
  {
    id: 'acc-2',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
        alt: 'Premium Watch'
      }
    ],
    title: 'Minimalist Steel Watch',
    originalPrice: 4999,
    price: 1999,
    type: 'Watch',
    description: 'A sleek and modern watch that combines style with functionality. Perfect for everyday wear with its minimalist design.',
    details: {
      features: [
        'Japanese quartz movement',
        'Water-resistant (3ATM)',
        'Hardened mineral glass',
        'Date display'
      ],
      materials: [
        'Stainless steel case',
        'Genuine leather strap',
        'Brass dial',
        'Steel buckle'
      ],
      care: [
        'Avoid water exposure',
        'Clean with soft cloth',
        'Store in watch box',
        'Service annually'
      ]
    },
    sellerId: 'xyz',
    sellerName: 'Xyz'
  },
  {
    id: 'acc-3',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
        alt: 'Classic Black Backpack'
      }
    ],
    title: 'Campus Elite Backpack',
    originalPrice: 3999,
    price: 1499,
    type: 'Backpack',
    description: 'A stylish and spacious backpack perfect for carrying your books and laptop. Features multiple compartments and water-resistant material.',
    details: {
      features: [
        'Multiple compartments',
        'Laptop sleeve (up to 15.6")',
        'Water-resistant material',
        'Padded shoulder straps'
      ],
      materials: [
        'Premium polyester',
        'YKK zippers',
        'Reinforced bottom',
        'Anti-theft pockets'
      ],
      care: [
        'Spot clean only',
        'Air dry',
        'Do not machine wash',
        'Store in cool, dry place'
      ]
    },
    sellerId: 'xyz',
    sellerName: 'Xyz'
  },
  {
    id: 'acc-4',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
        alt: 'Premium Watch'
      }
    ],
    title: 'Minimalist Steel Watch',
    originalPrice: 4999,
    price: 1999,
    type: 'Watch',
    description: 'A sleek and modern watch that combines style with functionality. Perfect for everyday wear with its minimalist design.',
    details: {
      features: [
        'Japanese quartz movement',
        'Water-resistant (3ATM)',
        'Hardened mineral glass',
        'Date display'
      ],
      materials: [
        'Stainless steel case',
        'Genuine leather strap',
        'Brass dial',
        'Steel buckle'
      ],
      care: [
        'Avoid water exposure',
        'Clean with soft cloth',
        'Store in watch box',
        'Service annually'
      ]
    },
    sellerId: 'xyz',
    sellerName: 'Xyz'
  }
];