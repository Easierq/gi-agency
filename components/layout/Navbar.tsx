"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
//
import { QuickAccessIcon } from "@/misc/icon";
import { Logo } from "./logo";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "../ui/button";

export const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const categories = [
    {
      name: "Mobile App Development",
      slug: "mobile-app-development",
    },
    {
      name: "Vibe Coding",
      slug: "vibe-coding",
    },
    {
      name: "Ai Agents",
      slug: "ai-agents",
    },
    {
      name: "Ai Automation",
      slug: "ai-automation",
    },
    {
      name: "Graphics Design",
      slug: "graphics-design",
    },
    {
      name: "Web Development",
      slug: "web-development",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-none border-b border-slate-100" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/services"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                <span>Services</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                <span>Contact Us</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                <span>About</span>
              </Link>
              <Link
                href="/frequently-asked-questions"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                <span>FAQs</span>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=2347065866656"
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-1 rounded-lg px-6 py-2 font-medium transition-colors"
              >
                <span>Work with Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-green-700 hover:text-green-500"
              aria-label="Open menu"
            >
              {/* <Menu className="w-6 h-6" /> */}
              <QuickAccessIcon className="h-6 w-6 ml-[2px] mb-1" />
            </button>
          </div>

          {/* Desktop Category Menu */}
          {/* <div className="hidden md:flex items-center justify-between border-t overflow-auto hidden-scrollbar">
            <div className="flex items-center space-x-8 py-4">
              {categories.map((category, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={`/services/${category.slug}`}
                    className="flex items-center space-x-1 whitespace-nowrap text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    <span>{category.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div> */}
          <div className="relative hidden md:flex items-center justify-between border-t">
            {/* LEFT FADE */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

            {/* SCROLL AREA */}
            <div className="overflow-x-auto hidden-scrollbar w-full">
              <div className="flex items-center space-x-8 py-4 min-w-max">
                {categories.map((category, index) => (
                  <div key={index} className="relative group flex-shrink-0">
                    <Link
                      href={`/services/${category.slug}`}
                      className="flex items-center space-x-1 whitespace-nowrap text-gray-700 hover:text-green-600 font-medium transition-colors"
                    >
                      <span>{category.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto hidden-scrollbar transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-10 shadow-sm">
            <Logo />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-green-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="py-4 ">
            <div className="px-4">
              {/* Mobile Links */}
              <div className="space-y-1 text-gray-700 text-xl pt-4">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/services/${category.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 pr-4 text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="space-y-1 text-gray-700 text-xl">
                  <div className="h-[0.2px] my-3 bg-slate-400" />
                  <Link
                    href="/frequently-asked-questions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-3 space-x-1 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
                  >
                    <span>Faqs</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-3 space-x-1 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
                  >
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-3 space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    <span>About</span>
                  </Link>
                </div>
              </div>

              {/* Mobile Actions */}
            </div>
          </div>
          <div className="sticky bottom-0 inset-x-0 bg-white p-4 shadow-lg flex items-center justify-around pt-4 border-t">
            <Link
              href="https://api.whatsapp.com/send?phone=2347065866656"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full p-2 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold text-lg transition-colors"
            >
              Work with Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
