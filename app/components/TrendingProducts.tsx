import { ProductCard } from "../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Apple AirPods Pro 2nd Generation",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviews: 2453,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Nike Air Max 270 React Sneakers",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviews: 1829,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    badge: "New",
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch 5 Pro",
    price: 349,
    originalPrice: 449,
    rating: 4.7,
    reviews: 967,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 4,
    name: "Minimalist Leather Crossbody Bag",
    price: 89,
    rating: 4.5,
    reviews: 543,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 3241,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "Top Rated",
  },
  {
    id: 6,
    name: "Premium Sunglasses Collection",
    price: 149,
    rating: 4.4,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  },
  {
    id: 7,
    name: "Smart Home Speaker with Alexa",
    price: 79,
    originalPrice: 99,
    rating: 4.3,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
  },
  {
    id: 8,
    name: "Professional Camera Lens Kit",
    price: 599,
    rating: 4.8,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&q=80",
  },
];

export const TrendingProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="ps-16 py-16 lg:py-20 bg-white text-gray-900">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Trending Now
            </h2>
            <p className="text- gray-500 text-lg">
              Discover what everyone&apos;s loving this season
            </p>
          </div>

          <div className="hidden text-gray-900 md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Products */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 text-gray-900 w-[280px] text-gray-900 snap-start animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center text-gray-900 bg-white mt-10">
          <Button variant="outline" size="lg" className="bg-white font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};