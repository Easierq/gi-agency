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
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  designTools?: string[];
  projectType?: string;
  clientName?: string;
  colorPalette?: string[];
}

interface GraphicDesignGalleryProps {
  searchQuery: string;
  sortBy: string;
  categorySlug: string;
  projects: Project[];
}

const GraphicDesignGallery: React.FC<GraphicDesignGalleryProps> = ({
  searchQuery,
  sortBy,
  categorySlug,
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

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
  // Mock data - Replace with actual Prisma queries

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let results = [...projects];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter((project) => {
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query);
        const matchesTools = project.designTools?.some((tool) =>
          tool.toLowerCase().includes(query)
        );
        const matchesType = project.projectType?.toLowerCase().includes(query);
        const matchesClient = project.clientName?.toLowerCase().includes(query);

        return (
          matchesName ||
          matchesDescription ||
          matchesTools ||
          matchesType ||
          matchesClient
        );
      });
    }

    // Sorting
    switch (sortBy) {
      case "popular":
        results.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return 0;
        });
        break;
      case "recent":
        results.reverse();
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return results;
  }, [searchQuery, sortBy]);

  const toggleFavorite = (projectId: string): void => {
    setFavorites((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <>
      <div className="space-y-6">
        {/* Results count */}
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{filteredProjects.length}</span> of{" "}
          <span className="font-semibold">{projects.length}</span> projects
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600">Try adjusting your search query</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {project.badge && (
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.badge}
                    </span>
                  )}
                  {project.popular && (
                    <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Popular
                    </span>
                  )}
                </div>

                {/* Top Right Actions */}
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
                  <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-yellow-500 hover:text-white rounded-full transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Hover Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Quick View
                  </button>
                  <Link
                    href={`/services/${categorySlug}/${project.slug}`}
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {project.projectType && (
                  <div className="text-xs text-yellow-600 font-semibold mb-1">
                    {project.projectType}
                  </div>
                )}

                <Link href={`/services/${categorySlug}/${project.slug}`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                    {project.name}
                  </h3>
                </Link>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {project.clientName && (
                  <p className="text-xs text-gray-500 mb-3">
                    Client:{" "}
                    <span className="font-semibold">{project.clientName}</span>
                  </p>
                )}

                {/* Design Tools */}
                {project.designTools && project.designTools.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.designTools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.designTools.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.designTools.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
      </div>
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
              {selectedProject.projectType && (
                <p className="text-sm text-yellow-600 font-semibold mb-2">
                  {selectedProject.projectType}
                </p>
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>

              {selectedProject.clientName && (
                <p className="text-gray-500 mb-6">
                  Client:{" "}
                  <span className="font-semibold">
                    {selectedProject.clientName}
                  </span>
                </p>
              )}

              {selectedProject.designTools &&
                selectedProject.designTools.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Design Tools Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.designTools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <Link
                href={`/services/${categorySlug}/${selectedProject.slug}`}
                className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-lg font-bold text-lg transition-colors text-center"
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

export default GraphicDesignGallery;
