"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
        {/* <div className="absolute transform -rotate-45 top-20 -left-10 w-32 h-32 bg-white rounded-full"></div> */}
        <div className="absolute transform rotate-12 bottom-10 right-20 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-14 pt-16 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start">
            {/* <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 inline mr-2" />
              🎉 Transform Your Business{" "}
              <span className="hidden md:inline-block">
                - Get 5% Off First Project
              </span>
            </span> */}

            <h1 className="sm:hidden text-5xl sm:text-6xl text-center font-bold mb-4 lg:mb-6 leading-tight">
              We Build It.
              <span className="inline-block text-yellow-300">You Grow</span>
            </h1>
            <h1 className="hidden sm:inline-block text-[40px] sm:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Elevate Your Brand
              <span className="block text-yellow-300">
                With Expert Services
              </span>
            </h1>

            <p className="hidden sm:inline-block text-xl text-center lg:text-left mb-8 text-green-100 max-w-lg ">
              From compelling Ai automations to stunning web development, we
              deliver digital solutions that drive results and grow your
              business.
            </p>
            <p className="sm:hidden text-lg text-center lg:text-left mb-8 text-green-100 max-w-lg ">
              We combine expert development, smart AI automation, and world
              class design to build digital products your users will love.
            </p>

            {/* Search Bar */}
            {/* <form
              onSubmit={handleSearch}
              className="bg-white rounded-full p-2 flex items-center max-w-lg mb-5 lg:mb-8 mx-auto lg:mx-0"
            >
              <input
                type="text"
                placeholder="What service do you need?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 text-gray-800 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
              >
                Explore Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="hidden lg:flex bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            {/* <div className="hidden lg:hidden flex-wrap justify-center lg:justify-start gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <p className="text-sm text-green-100">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <p className="text-sm text-green-100">Projects Done</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4.9★</div>
                <p className="text-sm text-green-100">Client Rating</p>
              </div>
            </div> */}
          </div>

          {/* Right Content - Featured Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-2 lg:p-4 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="Team working"
                className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-2 md:-right-4 bg-yellow-400 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg">
                20% OFF
              </div>
            </div>

            {/* Floating Features */}
            <div className="hidden md:block absolute z-20 top-10 -left-6 bg-white text-green-600 px-4 py-3 rounded-lg shadow-lg transform -rotate-6">
              <div className="text-center">
                <p className="font-bold">Fast Delivery</p>
                <p className="text-sm">On-Time Projects</p>
              </div>
            </div>

            <div className="hidden md:block absolute z-20 bottom-20 -right-6 bg-yellow-400 text-green-800 px-4 py-3 rounded-lg shadow-lg transform rotate-6">
              <div className="text-center">
                <p className="font-bold">100% Satisfaction</p>
                <p className="text-sm">Money Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
