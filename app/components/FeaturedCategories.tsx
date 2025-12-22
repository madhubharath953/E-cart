import { Smartphone, Shirt, Home, Sparkles, Dumbbell, BookOpen } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    items: "2.5K+ items",
  },
  {
    name: "Fashion",
    icon: Shirt,
    color: "from-pink-500 to-rose-500",
    items: "5K+ items",
  },
  {
    name: "Home & Living",
    icon: Home,
    color: "from-amber-500 to-orange-500",
    items: "3K+ items",
  },
  {
    name: "Beauty",
    icon: Sparkles,
    color: "from-purple-500 to-violet-500",
    items: "1.8K+ items",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-500",
    items: "2K+ items",
  },
  {
    name: "Books",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-500",
    items: "4K+ items",
  },
];

export const FeaturedCategories = () => {
  return (
    <section className="py-16 lg:py-20 bg-white text-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you&apos;re looking for
          </p>
        </div>

        <div className=" p-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-card rounded-2xl p-6 text-center card-hover border border-border/50 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <category.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.items}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};