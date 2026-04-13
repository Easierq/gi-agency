"use client";
import React, { useState } from "react";
import { Search, Code } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VibeGallery from "./VibeGallery";

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  techStack?: string[];
  clientName?: string;
}

interface Props {
  projects: Project[];
  categorySlug: string;
}
const VibeClient = ({ projects, categorySlug }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section with Background Image */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/95 via-cyan-500/90 to-blue-500/95"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Code className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold text-white">
                Web Development Portfolio
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Professional Web Development
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Browse our portfolio of websites and web applications we've built
              for clients
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search web development projects..."
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
            <span className="text-gray-600">
              Browse our web development portfolio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Project Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content - ServiceGallery */}
        <main>
          <VibeGallery
            searchQuery={searchQuery}
            sortBy={sortBy}
            categorySlug={categorySlug}
            projects={projects}
          />
        </main>
      </div>
    </div>
  );
};

export default VibeClient;
