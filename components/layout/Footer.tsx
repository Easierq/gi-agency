"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { LogoFooter } from "./logo";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const categories = [
    {
      name: "Social Media Marketing",
      slug: "social-media-marketing",
    },
    {
      // name: "Social media management",
      name: "Graphics Design",
      slug: "graphics-design",
    },
    {
      name: "Content Creation",
      slug: "content-creation",
    },
    {
      name: "Copy Writing",
      slug: "copy-writing",
    },
    {
      name: "Sales Copywriting",
      slug: "sales-copywriting",
    },
    {
      name: "Video Editing",
      slug: "video-editing",
    },
    {
      name: "Web Development",
      slug: "web-development",
    },
    {
      name: "Social Media Management",
      slug: "social-media-management",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <LogoFooter />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your space with our premium furniture collection.
              Quality craftsmanship meets modern design for your perfect home.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex flex-wrap gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/frequently-asked-questions"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={`/${category.slug}`}
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Festac, Lagos State | Osogbo, Osun State Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="tel:+2347065866656"
                  className="text-gray-400 hover:text-green-500"
                >
                  (234) 706-5866-656
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="mailto:isiaqofficial@gmail.com"
                  className="text-gray-400 hover:text-green-500 break-all"
                >
                  Support@giagency.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 GIAgency. All rights reserved.
            </p>

            <div></div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-7 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};
