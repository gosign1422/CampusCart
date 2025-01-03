import { Product } from '../types/product';

export const roomDecor: Product[] = [
  {
    id: 'decor-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85',
        alt: 'LED String Lights'
      }
    ],
    title: 'Ambient LED String Lights',
    originalPrice: 1999,
    price: 999,
    type: 'Lighting',
    description: 'Create a cozy atmosphere with these warm white LED string lights. Perfect for dorm rooms and study spaces.',
    details: {
      features: [
        'USB powered',
        '8 lighting modes',
        '10m length',
        'Warm white color'
      ],
      materials: [
        'High-quality copper wire',
        'LED bulbs',
        'Durable USB connector',
        'Weather-resistant coating'
      ],
      care: [
        'Keep away from water',
        'Clean with dry cloth',
        'Store properly when not in use',
        'Avoid excessive bending'
      ]
    },
    sellerId: 'decor-maker',
    sellerName: 'DecorMaker'
  },
  {
    id: 'decor-2',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1615800002234-05c4d488696c',
        alt: 'Minimalist Wall Art'
      }
    ],
    title: 'Abstract Wall Art Set',
    originalPrice: 2499,
    price: 1499,
    type: 'Wall Art',
    description: 'Set of 3 minimalist abstract wall prints. Perfect for adding a modern touch to your room.',
    details: {
      features: [
        'Set of 3 prints',
        'Modern design',
        'High-quality print',
        'Ready to hang'
      ],
      materials: [
        'Premium art paper',
        'Fade-resistant ink',
        'Sturdy backing',
        'Hanging hardware included'
      ],
      care: [
        'Avoid direct sunlight',
        'Clean with soft brush',
        'Keep away from moisture',
        'Handle with care'
      ]
    },
    sellerId: 'decor-maker',
    sellerName: 'DecorMaker'
  },
  {
    id: 'decor-3',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
        alt: 'Desk Organizer'
      }
    ],
    title: 'Wooden Desk Organizer',
    originalPrice: 1799,
    price: 999,
    type: 'Organization',
    description: 'Handcrafted wooden desk organizer with multiple compartments. Perfect for keeping your study space tidy.',
    details: {
      features: [
        'Multiple compartments',
        'Phone holder',
        'Pen stand',
        'Cable management'
      ],
      materials: [
        'Sustainable wood',
        'Natural finish',
        'Non-toxic paint',
        'Anti-slip base'
      ],
      care: [
        'Wipe with dry cloth',
        'Avoid water exposure',
        'Polish monthly',
        'Keep away from heat'
      ]
    },
    sellerId: 'decor-maker',
    sellerName: 'DecorMaker'
  },
  {
    id: 'decor-4',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
        alt: 'Macrame Wall Hanging'
      }
    ],
    title: 'Boho Macrame Wall Hanging',
    originalPrice: 1999,
    price: 1299,
    type: 'Wall Decor',
    description: 'Handmade macrame wall hanging with a modern bohemian design. Adds texture and style to any wall.',
    details: {
      features: [
        'Handmade design',
        'Unique pattern',
        'Easy to hang',
        'Adjustable length'
      ],
      materials: [
        '100% cotton cord',
        'Wooden dowel',
        'Natural dyes',
        'Strong hanging loop'
      ],
      care: [
        'Gentle hand wash',
        'Air dry only',
        'Brush gently when needed',
        'Store flat'
      ]
    },
    sellerId: 'decor-maker',
    sellerName: 'DecorMaker'
  }
];