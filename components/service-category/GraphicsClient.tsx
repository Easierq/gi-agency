"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Palette } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GraphicDesignGallery from "@/components/service-category/GraphicDesignGallery";

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  designTools?: string[];
  projectType?: string;
  clientName?: string;
  colorPalette?: string[];
}

interface Props {
  projects: Project[];
  categorySlug: string;
}

const GraphicsClient = ({ projects, categorySlug }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showStickySearch, setShowStickySearch] = useState(false);

  const heroSearchRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickySearch(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroSearchRef.current) {
      observer.observe(heroSearchRef.current);
    }

    return () => {
      if (heroSearchRef.current) observer.unobserve(heroSearchRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 🔽 STICKY SEARCH BAR */}
      <div
        className={`fixed left-0 right-0 z-40 w-full bg-white border-b border-slate-200 transition-all duration-500 ${
          showStickySearch
            ? "top-[74px] md:top-[134px] opacity-100 translate-y-0"
            : "top-[40px] opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-none p-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search graphic design projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 text-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/95 via-yellow-500/90 to-orange-500/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Palette className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold text-white">
                Graphic Design Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-4 text-white">
              Creative Design Projects
            </h1>

            <p className="text-xl text-yellow-100 mb-8">
              Explore our portfolio of logos, branding, and visual designs
            </p>

            {/* 🔽 HERO SEARCH */}
            <form ref={heroSearchRef} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search graphic design projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-gray-600">
            Browse our graphic design portfolio
          </span>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Project Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <GraphicDesignGallery
          searchQuery={searchQuery}
          sortBy={sortBy}
          categorySlug={categorySlug}
          projects={projects}
        />
      </div>
    </div>
  );
};

export default GraphicsClient;
