import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF3EA]">
      <div className="container-custom py-16 lg:py-24">
        <div className="px-16 py-16  grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center bg-orange-100 gap-2 px-4 py-2  text-orange-600 rounded-full  text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              New Season Collection Available
            </div>

            <h1 className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              E-Cart.
              <br />
              <span className="gradient-text text-orange-600">Live Better.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              Discover premium products at unbeatable prices. Free shipping on orders over ₹500 and easy returns.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group bg-orange-500 shadow-elevated hover:bg-orange-600 ">
                Shop Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl" className=" px-6 hover:bg-orange-500">
                View Offers
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Premium shopping experience"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-elevated"
              />
            </div>



            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};