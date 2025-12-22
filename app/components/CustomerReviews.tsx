import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    review: "Absolutely love shopping here! The quality of products is amazing and delivery is always on time. Customer service is top-notch!",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    review: "Best online shopping experience I've had. The returns process was seamless when I needed to exchange a size. Highly recommend!",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4,
    review: "Great selection of products at competitive prices. The app is easy to use and I love the personalized recommendations!",
    date: "2 weeks ago",
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    review: "I've been a loyal customer for 2 years now. Never disappointed with the quality and the deals are unbeatable!",
    date: "3 weeks ago",
  },
];

export const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-20 bg-white text-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it – hear from our happy customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`rounded-2xl p-6 border border-orange-500/50 hover:border-orange-500/70 animate-fade-in cursor-pointer transition-all ${activeIndex === index ? "ring-2 ring-orange-500" : ""
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              <p className=" text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-border"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
            <p className="text-muted-foreground text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
            <p className="text-muted-foreground text-sm">Orders Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99%</div>
            <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};