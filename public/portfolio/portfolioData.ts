export interface PortfolioProject {
    id: number;
    title: string;
    category: string;
    type: "branding" | "marketing" | "product" | "advertising";
    image: string;
  }
  
  export const portfolioProjects: PortfolioProject[] = [
    {
      id: 1,
      title: "ضيانا للطاقة الشمسية",
      category: "Branding & Social Media",
      type: "branding",
      image: "/portfolio/deyana.png",
    },
    {
      id: 2,
      title: "الهرم للخدمات الجامعية",
      category: "Marketing",
      type: "marketing",
      image: "/portfolio/alharam.png",
    },
    {
      id: 3,
      title: "CONFY",
      category: "Product Design",
      type: "product",
      image: "/portfolio/confy.png",
    },
    {
      id: 4,
      title: "التونسا",
      category: "Food Branding",
      type: "branding",
      image: "/portfolio/tunisa.png",
    },
    {
      id: 5,
      title: "Pinar",
      category: "Food Campaign",
      type: "marketing",
      image: "/portfolio/pinar.png",
    },
    {
      id: 6,
      title: "الوطنية",
      category: "Advertising",
      type: "advertising",
      image: "/portfolio/watania.png",
    },
    {
      id: 7,
      title: "Mahmood",
      category: "Creative Design",
      type: "branding",
      image: "/portfolio/mahmood.png",
    },
  ];