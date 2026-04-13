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
  techStack?: string[];
  clientName?: string;
}

interface WebDevGalleryProps {
  searchQuery: string;
  sortBy: string;
  categorySlug: string;
  projects: Project[];
}

const WebDevGallery: React.FC<WebDevGalleryProps> = ({
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
  // const allProjects: Project[] = [
  //   {
  //     id: "1",
  //     slug: "saas-dashboard",
  //     name: "SaaS Analytics Dashboard",
  //     description:
  //       "Modern analytics platform with real-time data visualization and reporting",
  //     image:
  //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //     badge: "Featured",
  //     popular: true,
  //     featured: true,
  //     techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  //     clientName: "TechStart Inc.",
  //   },
  //   {
  //     id: "2",
  //     slug: "ecommerce-platform",
  //     name: "E-Commerce Platform",
  //     description:
  //       "Full-featured online store with payment integration and inventory management",
  //     image:
  //       "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
  //     badge: "Popular",
  //     popular: true,
  //     techStack: ["React", "Node.js", "Stripe", "MongoDB"],
  //     clientName: "Fashion Retailer",
  //   },
  //   {
  //     id: "3",
  //     slug: "corporate-website",
  //     name: "Corporate Website Redesign",
  //     description:
  //       "Modern business website with CMS integration and blog functionality",
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  //     techStack: ["WordPress", "PHP", "MySQL"],
  //     clientName: "Global Corp",
  //   },
  //   {
  //     id: "4",
  //     slug: "portfolio-site",
  //     name: "Creative Portfolio Website",
  //     description: "Stunning portfolio showcase for a creative design agency",
  //     image:
  //       "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  //     badge: "New",
  //     techStack: ["React", "Framer Motion", "Sanity CMS"],
  //     clientName: "Creative Studio",
  //   },
  //   {
  //     id: "5",
  //     slug: "booking-platform",
  //     name: "Booking & Reservation Platform",
  //     description:
  //       "Custom booking system with calendar integration and payment processing",
  //     image:
  //       "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  //     techStack: ["Vue.js", "Firebase", "Google Calendar API"],
  //     clientName: "Hotel Chain",
  //   },
  //   {
  //     id: "6",
  //     slug: "learning-management",
  //     name: "Learning Management System",
  //     description:
  //       "Educational platform with course management and video streaming",
  //     image:
  //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  //     featured: true,
  //     techStack: ["Next.js", "Prisma", "AWS S3"],
  //     clientName: "Online Academy",
  //   },
  //   {
  //     id: "7",
  //     slug: "fitness-app",
  //     name: "Fitness Tracking App",
  //     description:
  //       "Progressive web app for workout tracking and nutrition planning",
  //     image:
  //       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  //     techStack: ["React", "PWA", "Chart.js"],
  //     clientName: "Fitness Brand",
  //   },
  //   {
  //     id: "8",
  //     slug: "restaurant-ordering",
  //     name: "Restaurant Online Ordering",
  //     description: "Online ordering system with real-time order tracking",
  //     image:
  //       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  //     techStack: ["Next.js", "Stripe", "Twilio"],
  //     clientName: "Restaurant Chain",
  //   },
  //   {
  //     id: "9",
  //     slug: "real-estate-portal",
  //     name: "Real Estate Listing Portal",
  //     description: "Property listing platform with advanced search and filters",
  //     image:
  //       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  //     techStack: ["React", "Google Maps API", "Node.js"],
  //     clientName: "Real Estate Agency",
  //   },
  // ];

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
        const matchesTech = project.techStack?.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        const matchesClient = project.clientName?.toLowerCase().includes(query);

        return (
          matchesName || matchesDescription || matchesTech || matchesClient
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
        // In real app, sort by createdAt
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

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {project.badge && (
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
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
                  <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-cyan-500 hover:text-white rounded-full transition-all">
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
                    className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <Link href={`/services/${categorySlug}/${project.slug}`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
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

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.techStack.length - 3}
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

              {selectedProject.techStack &&
                selectedProject.techStack.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <Link
                href={`/services/${categorySlug}/${selectedProject.slug}`}
                className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-lg font-bold text-lg transition-colors text-center"
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

export default WebDevGallery;
