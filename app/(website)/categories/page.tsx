import CategoryCard from "@/components/website/categories/CategoryCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  { id: 1, name: "Music", icon: "🎵" },
  { id: 2, name: "Science", icon: "🧪" },
  { id: 3, name: "Movie", icon: "🎬" },
  { id: 4, name: "Traffic", icon: "🚦" },
  { id: 5, name: "Foods", icon: "🍜" },
  { id: 6, name: "Worlds Map", icon: "🌍" },
  { id: 7, name: "Sports", icon: "⚽" },
  { id: 8, name: "General Knowledge", icon: "🧠" },
];

const page = () => {
  return (
    <section className="relative min-h-[calc(100vh-75px)] bg-[linear-gradient(181deg,#BC4EA8_0.62%,#E03E68_47.14%,#FE8D45_99.35%)] overflow-hidden px-4 py-16">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
      <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" />
      <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-pretty">
            Categories
          </h1>
          <p className="text-white text-center text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            3 categories for your team, and 3 categories for the opposing team,
            for a total of 6 categories with 36 different questions. choose the
            categories carefully to ensure the greatest chance of winning
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search your Choice"
              className="pl-10 pr-4 h-12 rounded-full border-none bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#D946A6]"
            />
          </div>
        </div>

        {/* Popular Categories Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 text-pretty">
            Popular Categories
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 space-y-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>

        
        {/* Popular Categories Section */}
        <div className="mb-8 mt-40">
          <h2 className="text-4xl font-bold text-white text-center mb-12 text-pretty">
            Temporary Categories
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 space-y-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
