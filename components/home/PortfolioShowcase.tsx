"use client";
import React, { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "Design" },
    { id: "content", name: "Content" },
    { id: "video", name: "Video" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      client: "Fashion Retailer",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Web Development", "E-Commerce"],
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "design",
      client: "Tech Startup",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Graphic Design", "Branding"],
    },
    {
      id: 3,
      title: "Content Marketing Campaign",
      category: "content",
      client: "SaaS Company",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      tags: ["Content Creation", "Marketing"],
    },
    {
      id: 4,
      title: "Product Launch Video",
      category: "video",
      client: "Consumer Electronics",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      tags: ["Video Editing", "Production"],
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "web",
      client: "Fitness Brand",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile App", "Development"],
    },
    {
      id: 6,
      title: "Social Media Redesign",
      category: "design",
      client: "Restaurant Chain",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      tags: ["Social Media", "Design"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our recent work and success stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-green-600 p-4 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  Client:{" "}
                  <span className="font-semibold">{project.client}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
            View Full Portfolio
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
