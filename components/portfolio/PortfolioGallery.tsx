"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Heart, ArrowRight, Bookmark, X, Search } from "lucide-react";
import Link from "next/link";

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

interface PortfolioGalleryProps {
  searchQuery: string;
  categoryFilter: string;
  sortBy: string;
  projects: Project[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  searchQuery,
  categoryFilter,
  sortBy,
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    let results = [...projects];

    // Category filter
    if (categoryFilter !== "all") {
      results = results.filter((p) => p.categorySlug === categoryFilter);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter((project) => {
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query);
        const matchesCategory = project.category.toLowerCase().includes(query);

        return matchesName || matchesDescription || matchesCategory;
      });
    }

    // Sorting
    switch (sortBy) {
      case "order":
        results.sort((a, b) => (a.order || 0) - (b.order || 0));
        break;
      case "recent":
        results.reverse();
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return results;
  }, [projects, searchQuery, categoryFilter, sortBy]);

  const toggleFavorite = (projectId: string): void => {
    setFavorites((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const getCategoryColor = (categorySlug: string) => {
    const colors: Record<string, string> = {
      "web-development": "bg-cyan-600",
      "graphic-design": "bg-yellow-600",
      "video-editing": "bg-red-600",
      "content-creation": "bg-purple-600",
      "sales-copywriting": "bg-blue-600",
      "social-media-management": "bg-pink-600",
      "ai-automation": "bg-purple-600",
      "mobile-app-development": "bg-blue-600",
    };
    return colors[categorySlug] || "bg-gray-600";
  };

  return (
    <>
      <div className="space-y-6">
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{filteredProjects.length}</span> of{" "}
          <span className="font-semibold">{projects.length}</span> projects
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const colorClass = getCategoryColor(project.categorySlug);

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {project.badge && (
                      <span
                        className={`${colorClass} text-white px-3 py-1 rounded-full text-xs font-bold`}
                      >
                        {project.badge}
                      </span>
                    )}
                    {project.popular && (
                      <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(project.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                        favorites.includes(project.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(project.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-cyan-500 hover:text-white rounded-full transition-all">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Quick View
                    </button>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className={`flex-1 ${colorClass} hover:opacity-90 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm`}
                    >
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${colorClass.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {project.category}
                  </span>

                  <Link href={`/portfolio/${project.slug}`}>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors mt-1">
                      {project.name}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.showcaseText || project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[75vh] md:max-h-[90vh] overflow-y-auto hidden-scrollbar">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${getCategoryColor(
                  selectedProject.categorySlug
                ).replace("bg-", "text-")}`}
              >
                {selectedProject.category}
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mb-2 mt-1">
                {selectedProject.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedProject.showcaseText || selectedProject.description}
              </p>

              <Link
                href={`/portfolio/${selectedProject.slug}`}
                className={`block w-full ${getCategoryColor(
                  selectedProject.categorySlug
                )} hover:opacity-90 text-white py-4 rounded-lg font-bold text-lg transition-colors text-center`}
              >
                View Full Project Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;
