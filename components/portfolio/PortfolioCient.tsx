"use client";
import { useState, useEffect } from "react";
import { Search, Briefcase } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  order: number;
  badge?: string;
  category: string;
  categorySlug: string;
  showcaseText?: string;
  popular?: boolean;
  featured?: boolean;
}

interface Props {
  projects: Project[];
}

export const PortfolioCient = ({ projects }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("order");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/95 via-blue-600/90 to-purple-600/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Briefcase className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold text-white">
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Our Best Work
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Explore our featured projects across all categories
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search portfolio projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Filter & Sort</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="graphic-design">Graphic Design</SelectItem>
                <SelectItem value="video-editing">Video Editing</SelectItem>
                <SelectItem value="content-creation">
                  Content Creation
                </SelectItem>
                <SelectItem value="sales-copywriting">
                  Sales Copywriting
                </SelectItem>
                <SelectItem value="social-media-management">
                  Social Media
                </SelectItem>
                <SelectItem value="ai-automation">AI Automation</SelectItem>
                <SelectItem value="mobile-app-development">
                  Mobile Apps
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="order">Display Order</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Project Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <main>
          <PortfolioGallery
            searchQuery={searchQuery}
            categoryFilter={categoryFilter}
            sortBy={sortBy}
            projects={projects}
          />
        </main>
      </div>
    </div>
  );
};
