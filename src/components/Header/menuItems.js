export const menuItems = [
  {
    name: "/",
    label: "Start",
  },
  {
    name: "nasza-misja",
    label: "Nasza misja",
    items: [
      { name: "about", label: "About" },
      {
        name: "case-study",
        label: "Case Study",
        items: [
          { name: "case-study", label: "Case Study" },
          { name: "case-study-details", label: "Case Study Details" },
        ],
      },
      {
        name: "blog",
        label: "Blog",
        items: [
          { name: "blog-regular", label: "Blog Regular" },
        ],
      },
      {
        name: "pricing",
        label: "Pricing",
        items: [
          { name: "pricing-1", label: "Pricing 01" },
          { name: "pricing-2", label: "Pricing 02" },
        ],
      },
      {
        name: "utility",
        label: "Utility",
        items: [
          { name: "coming-soon", label: "Coming Soon" },
          { name: "coming-soon-2", label: "Coming Soon 02" },
          { name: "404", label: "404 Page" },
          { name: "thank-you", label: "Thank You" },
        ],
      },
      {
        name: "essential",
        label: "Essential",
        items: [
          { name: "faq", label: "FAQ" },
          { name: "reviews", label: "Reviews" },
        ],
      },
    ],
  },
  {
    name: "polityka-prywatnosci",
    label: "Polityka prywatności"
  },
];
