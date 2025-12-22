import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Safety Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0B1220]/90 text-white ">
      {/* Newsletter Section */}
      <div className="border-b border-background/10 ">
        <div className="container-custom py-12">
          <div className="flex flex-col p-6 lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
              <p className="">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/40 border-background/90 text-white placeholder:text-white/50 h-12"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Main Footer */}
      <div className="container-custom p-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">E-cart</span>
            </Link>
            <p className="mb-6 max-w-sm">
              Your one-stop destination for premium products at unbeatable prices. Shop smart, live better.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm ">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Thoothukudi, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>support@ecart.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Bottom Bar */}
      <div className="border-t border-background/10 p-12">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © 2025 E-cart. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-background/60 mr-2">We accept:</span>
              <div className="flex gap-2">
                {["Visa", "Mastercard", "Amex", "PayPal"].map((payment) => (
                  <div
                    key={payment}
                    className="px-3 py-1.5 rounded text-xs font-medium"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};