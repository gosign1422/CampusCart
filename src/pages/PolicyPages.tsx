import React from 'react';
import { useLocation } from 'react-router-dom';

export function PolicyPages() {
  const location = useLocation();
  const path = location.pathname;

  const getContent = () => {
    switch (path) {
      case '/privacy':
        return {
          title: 'Privacy Policy',
          content: `At CampusCart, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.

We collect basic information such as your name, email, and phone number solely for order processing and delivery purposes. Your payment information is handled securely through our trusted payment partners.

We never share your personal information with third parties except when necessary for order fulfillment. You can request to view, modify, or delete your personal data at any time by contacting us.`
        };
      case '/terms':
        return {
          title: 'Terms of Service',
          content: `By using CampusCart, you agree to these terms of service. Our platform is for personal, non-commercial use by UPES students.

All products listed are subject to availability. We reserve the right to modify prices and product information without notice. Orders are confirmed only after payment verification.

Users must provide accurate information for order processing. Any misuse of the platform may result in account termination.`
        };
      case '/shipping':
        return {
          title: 'Shipping Policy',
          content: `We offer convenient delivery within UPES Bidholi campus. Orders are typically delivered within 1-2 working days.

For special circumstances or bulk orders, delivery timelines may vary. We'll keep you updated about your order status via WhatsApp or email.

Currently, we only serve the UPES Bidholi campus community. Meet-up delivery locations will be coordinated after order confirmation.`
        };
      case '/refund':
        return {
          title: 'Refund Policy',
          content: `We want you to be completely satisfied with your purchase. If you're not happy with your order, here's our refund policy:

- Items must be unused and in original condition
- Refund requests must be made within 24 hours of delivery
- Size exchanges are available subject to stock availability
- Refunds will be processed through the original payment method

Contact us immediately if you receive a damaged or incorrect item.`
        };
      default:
        return {
          title: '404',
          content: 'Page not found'
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
          <div className="bg-spotify-darkgray rounded-lg p-6">
            <div className="prose prose-invert max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-spotify-lightgray mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}