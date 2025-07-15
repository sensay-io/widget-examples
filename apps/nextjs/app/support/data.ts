export const FAQS = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'My Orders' section. You'll also receive tracking updates via email once your order ships.",
    category: "Orders",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in original condition with all packaging intact. Some items may have different return policies.",
    category: "Returns",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping options during checkout.",
    category: "Shipping",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via phone, email, or live chat. Our support hours are Monday-Friday 9AM-6PM EST.",
    category: "Support",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "Most products come with a manufacturer warranty. Warranty terms vary by product and are listed on each product page.",
    category: "Warranty",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled within 1 hour of placement if they haven't been processed for shipping. Contact our support team immediately for assistance.",
    category: "Orders",
  },
];

export const ARTICLES = [
  {
    id: 1,
    title: "Getting Started with Your New Product",
    description:
      "Learn the basics of setting up and using your new purchase. Step-by-step guide for first-time users.",
    category: "Getting Started",
  },
  {
    id: 2,
    title: "Troubleshooting Common Issues",
    description:
      "Quick solutions for the most frequently encountered problems. Save time with our comprehensive troubleshooting guide.",
    category: "Troubleshooting",
  },
  {
    id: 3,
    title: "Understanding Your Warranty Coverage",
    description:
      "Everything you need to know about warranty terms, coverage periods, and how to file a warranty claim.",
    category: "Warranty",
  },
  {
    id: 4,
    title: "Shipping and Delivery Information",
    description:
      "Track your order, understand delivery times, and learn about our shipping policies and options.",
    category: "Shipping",
  },
  {
    id: 5,
    title: "Return and Refund Process",
    description:
      "Complete guide to returning items, processing refunds, and understanding our return policy requirements.",
    category: "Returns",
  },
  {
    id: 6,
    title: "Account Management and Security",
    description:
      "How to manage your account settings, update personal information, and keep your account secure.",
    category: "Account",
  },
];

export type Article = (typeof ARTICLES)[number];
export type Faq = (typeof FAQS)[number];
