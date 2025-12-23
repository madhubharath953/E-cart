"use client";

import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate, Link } from "react-router-dom";

const categories = [
  { name: "Electronics", href: "#" },
  { name: "Fashion", href: "#" },
  { name: "Home & Garden", href: "#" },
  { name: "Beauty", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Books", href: "#" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const navigate = useNavigate();
  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-black backdrop-blur-md ">
      <nav className="container-custom ">
        <div className="flex items-center px-10 py-4 justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500 px-2 py-2 flex items-center justify-center">
              <span className="text-primary-foreground text-white font-bold text-xl">E</span>
            </div>
            <span className="hidden sm:block text-xl text-gray-800 font-bold text-foreground">
              E-Cart
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 ">
            <div className="relative w-full items-center bg-gray-300/50 rounded-lg px-4 ">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full pl-12 pr-4 h-12 rounded-lg  bg-transparent outline-none px-3 text-sm border-0 "
              />
            </div>
          </div>

          {/* Dashboard Button */}
          <button className="hidden lg:flex items-center gap-2 bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors hover:text-white"
            onClick={handleDashboardClick}>
            Dashboard</button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Categories Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="gap-1"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                Categories
                <ChevronDown className={`h-4 w-4 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
              </Button>

              {isCategoryOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-card rounded-xl shadow-elevated border border-border animate-scale-in">
                  <div className="py-2">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button variant="icon" size="icon" className="relative cursor-pointer">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="icon" size="icon" className="relative  cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="icon" size="icon">
              <User className="h-5 w-5  -cursor-pointer" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center text-black gap-2">
            <Button variant="icon" size="icon" className="relative cursor-pointer ">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative cursor-pointer text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 h-11 rounded-xl outline-none bg-secondary border-none border-0"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="block px-4 py-3 text-black hover:shadow-lg rounded-lg transition-colors"
                >
                  {category.name}
                </a>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
                <Button variant="ghost" className="flex-1 justify-start gap-2">
                  <Heart className="h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="flex-1 justify-start gap-2">
                  <User className="h-5 w-5" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};