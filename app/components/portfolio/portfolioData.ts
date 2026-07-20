export interface Project {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    description: string;
    color: string;
  
    year?: string;
    client?: string;
    services?: string[];
  }
  
  export const categories = [
    "الكل",
    "Branding",
    "Marketing",
    "Website",
    "Product",
  ];
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "ضيانا للطاقة الشمسية",
      category: "Branding",
      type: "هوية بصرية وإدارة صفحات",
      image: "/portfolio/deyana.png",
      description:
        "تصميم هوية بصرية وإعلانات احترافية لشركة ضيانا للطاقة الشمسية.",
      color: "from-violet-600 to-fuchsia-600",
    },
    {
      id: 2,
      title: "الهرم للخدمات الجامعية",
      category: "Marketing",
      type: "Social Media",
      image: "/portfolio/alharam.png",
      description:
        "حملات تسويق وتصاميم احترافية للقبولات الجامعية.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 3,
      title: "CONFY",
      category: "Product",
      type: "Packaging",
      image: "/portfolio/confy.png",
      description:
        "تصميم هوية ومنشورات لعلامة تجارية متخصصة بالمنتجات الغذائية.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "التونسا",
      category: "Branding",
      type: "Food Branding",
      image: "/portfolio/tunisa.png",
      description:
        "حملة إعلانية وتصاميم احترافية للمنتجات الغذائية.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      title: "Pinar",
      category: "Marketing",
      type: "Campaign",
      image: "/portfolio/pinar.png",
      description:
        "تصميم حملة تسويقية متكاملة لمنتجات Pinar.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 6,
      title: "الوطنية",
      category: "Branding",
      type: "Advertising",
      image: "/portfolio/watania.png",
      description:
        "إعلانات احترافية وهوية بصرية متكاملة.",
      color: "from-pink-500 to-rose-500",
    },
  ];