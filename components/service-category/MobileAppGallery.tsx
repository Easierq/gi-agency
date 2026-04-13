"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Heart,
  ArrowRight,
  Bookmark,
  X,
  Search,
  Star,
  Download,
} from "lucide-react";
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
  appType?: string;
  platforms?: string[];
  downloads?: string;
  rating?: string;
  clientName?: string;
  techStack?: string[];
}

interface MobileAppGalleryProps {
  searchQuery: string;
  sortBy: string;
  categorySlug: string;
  projects: Project[];
}

const MobileAppGallery: React.FC<MobileAppGalleryProps> = ({
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

  // const allProjects: Project[] = [
  //   {
  //     id: "1",
  //     slug: "fitness-tracker-app",
  //     name: "Fitness Tracker Pro",
  //     description:
  //       "Comprehensive fitness tracking app with AI-powered workout plans and nutrition tracking",
  //     image:
  //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  //     badge: "Featured",
  //     popular: true,
  //     featured: true,
  //     appType: "Health & Fitness",
  //     platforms: ["iOS", "Android"],
  //     downloads: "100K+",
  //     rating: "4.8/5",
  //     clientName: "FitLife Inc.",
  //     techStack: ["React Native", "Firebase", "Redux"],
  //   },
  //   {
  //     id: "2",
  //     slug: "ecommerce-shopping-app",
  //     name: "ShopEase Mobile",
  //     description:
  //       "Feature-rich e-commerce app with AR try-on capability and seamless checkout",
  //     image:
  //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  //     badge: "Popular",
  //     popular: true,
  //     appType: "E-Commerce",
  //     platforms: ["iOS", "Android"],
  //     downloads: "500K+",
  //     rating: "4.7/5",
  //     clientName: "Fashion Retailer",
  //     techStack: ["Flutter", "Stripe", "AWS"],
  //   },
  //   {
  //     id: "3",
  //     slug: "food-delivery-app",
  //     name: "QuickBite Delivery",
  //     description:
  //       "Fast food delivery app with real-time tracking and multiple payment options",
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  //     appType: "Food & Beverage",
  //     platforms: ["iOS", "Android"],
  //     downloads: "250K+",
  //     rating: "4.6/5",
  //     clientName: "Restaurant Chain",
  //     techStack: ["React Native", "Google Maps", "Socket.io"],
  //   },
  //   {
  //     id: "4",
  //     slug: "productivity-planner",
  //     name: "TaskMaster Pro",
  //     description:
  //       "Advanced task management and productivity app with AI-powered scheduling",
  //     image:
  //       "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  //     badge: "New",
  //     appType: "Productivity",
  //     platforms: ["iOS", "Android", "Web"],
  //     downloads: "50K+",
  //     rating: "4.9/5",
  //     clientName: "Productivity Co.",
  //     techStack: ["Flutter", "Firebase", "ML Kit"],
  //   },
  //   {
  //     id: "5",
  //     slug: "social-networking-app",
  //     name: "ConnectHub",
  //     description:
  //       "Modern social networking app with video calling and instant messaging",
  //     image:
  //       "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  //     featured: true,
  //     appType: "Social Networking",
  //     platforms: ["iOS", "Android"],
  //     downloads: "1M+",
  //     rating: "4.5/5",
  //     clientName: "Social Tech Inc.",
  //     techStack: ["Swift", "Kotlin", "WebRTC"],
  //   },
  //   {
  //     id: "6",
  //     slug: "finance-banking-app",
  //     name: "SmartBank Mobile",
  //     description:
  //       "Secure banking app with biometric authentication and instant transfers",
  //     image:
  //       "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  //     appType: "Finance",
  //     platforms: ["iOS", "Android"],
  //     downloads: "200K+",
  //     rating: "4.8/5",
  //     clientName: "Digital Bank",
  //     techStack: ["Native iOS", "Native Android", "Plaid"],
  //   },
  // ];

  const filteredProjects = useMemo(() => {
    let results = [...projects];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter((project) => {
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query);
        const matchesType = project.appType?.toLowerCase().includes(query);
        const matchesPlatforms = project.platforms?.some((p) =>
          p.toLowerCase().includes(query)
        );
        const matchesTech = project.techStack?.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        const matchesClient = project.clientName?.toLowerCase().includes(query);

        return (
          matchesName ||
          matchesDescription ||
          matchesType ||
          matchesPlatforms ||
          matchesTech ||
          matchesClient
        );
      });
    }

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
            <p className="text-gray-600">Try adjusting your search query</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.badge}
                    </span>
                  )}
                  {project.popular && (
                    <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Popular
                    </span>
                  )}
                </div>

                {project.rating && (
                  <span className="absolute bottom-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {project.rating}
                  </span>
                )}

                {project.downloads && (
                  <span className="absolute bottom-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {project.downloads}
                  </span>
                )}

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
                  <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-indigo-500 hover:text-white rounded-full transition-all">
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
                    href={`/services/${categorySlug}/${project.slug}`}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-5">
                {project.appType && (
                  <div className="text-xs text-indigo-600 font-semibold mb-1">
                    {project.appType}
                  </div>
                )}

                <Link href={`/services/${categorySlug}/${project.slug}`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
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

                {project.platforms && project.platforms.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
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
              {selectedProject.appType && (
                <p className="text-sm text-indigo-600 font-semibold mb-2">
                  {selectedProject.appType}
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

              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedProject.downloads && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Downloads:</h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Download className="w-4 h-4" />
                      {selectedProject.downloads}
                    </span>
                  </div>
                )}
                {selectedProject.rating && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Rating:</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Star className="w-4 h-4 fill-current" />
                      {selectedProject.rating}
                    </span>
                  </div>
                )}
              </div>

              {selectedProject.platforms &&
                selectedProject.platforms.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Platforms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.platforms.map((platform, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {selectedProject.techStack &&
                selectedProject.techStack.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Tech Stack:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <Link
                href={`/services/${categorySlug}/${selectedProject.slug}`}
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-bold text-lg transition-colors text-center"
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

export default MobileAppGallery;
