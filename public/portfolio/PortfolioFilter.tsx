"use client";

interface PortfolioFilterProps {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  { label: "الكل", value: "all" },
  { label: "الهوية", value: "branding" },
  { label: "التسويق", value: "marketing" },
  { label: "المنتجات", value: "product" },
  { label: "الإعلانات", value: "advertising" },
];

export default function PortfolioFilter({
  active,
  onChange,
}: PortfolioFilterProps) {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            active === filter.value
              ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30"
              : "border border-white/10 bg-white/5 text-gray-300 hover:border-violet-500 hover:text-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}