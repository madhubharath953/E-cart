import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group text-gray-900 bg-card rounded-2xl border border-border/50 overflow-hidden card-hover">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {badge}
          </span>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-12 px-2 py-1 bg-destructive  text-xs font-semibold rounded-full">
            -{discount}%
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${isWishlisted
              ? "bg-destructive text-destructive-foreground"
              : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card"
            }`}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full" variant="hero">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium  line-clamp-2 mb-2  transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-border"
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-900">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-900 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};