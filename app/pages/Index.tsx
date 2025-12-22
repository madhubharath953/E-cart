import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { TrendingProducts } from "@/components/TrendingProducts";
import { DealsSection } from "@/components/DealsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
        <DealsSection />
        <WhyChooseUs />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;