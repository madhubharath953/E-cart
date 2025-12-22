import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders over ₹50. Fast & reliable delivery to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Your payment information is safe with our encrypted checkout system.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy. No questions asked.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our friendly team is here to help you anytime, anywhere.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-20 bg-white text-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Shop With Us
          </h2>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            We committed to providing you with the best shopping experience
          </p>
        </div>

        <div className=" text-gray-900 grid  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center text-gray-900 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-900 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};