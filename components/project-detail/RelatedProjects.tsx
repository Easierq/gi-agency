// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
// import Link from "next/link";

// interface Project {
//   id: string;
//   slug: string;
//   name: string;
//   category: string;
//   description: string;
//   badge?: string;
//   image: string;
//   techStack?: string[];
// }

// interface RelatedProjectsProps {
//   currentProjectId: string;
//   relatedProjects: Project[];
//   categorySlug: string;
// }

// export default function RelatedProjects({
//   currentProjectId,
//   relatedProjects,
//   categorySlug,
// }: RelatedProjectsProps) {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   if (relatedProjects.length === 0) return null;

//   const itemWidth = 320;
//   const gap = 24;
//   const maxScroll = Math.max(
//     0,
//     relatedProjects.length * (itemWidth + gap) - itemWidth * 3 - gap * 2
//   );

//   const handleScroll = (direction: "left" | "right") => {
//     if (direction === "left") {
//       setScrollPosition(Math.max(0, scrollPosition - (itemWidth + gap) * 2));
//     } else {
//       setScrollPosition(
//         Math.min(maxScroll, scrollPosition + (itemWidth + gap) * 2)
//       );
//     }
//   };

//   return (
//     <section className="mb-16">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             Related Projects
//           </h2>
//           <p className="text-gray-600">
//             Other projects in {relatedProjects[0]?.category}
//           </p>
//         </div>

//         {relatedProjects.length > 3 && (
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => handleScroll("left")}
//               disabled={scrollPosition === 0}
//               className="p-2 bg-white hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-200 rounded-lg transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => handleScroll("right")}
//               disabled={scrollPosition >= maxScroll}
//               className="p-2 bg-white hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-200 rounded-lg transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="relative overflow-hidden">
//         <div
//           className="flex gap-6 transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${scrollPosition}px)` }}
//         >
//           {relatedProjects.map((project) => (
//             <Link
//               key={project.id}
//               href={`/services/${categorySlug}/${project.slug}`}
//               className="flex-shrink-0 w-80"
//             >
//               <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />

//                   {project.badge && (
//                     <span className="absolute top-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
//                       {project.badge}
//                     </span>
//                   )}

//                   <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm">
//                       View Project
//                       <ArrowRight className="w-4 h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <p className="text-xs text-cyan-600 font-semibold mb-1">
//                     {project.category}
//                   </p>
//                   <h3 className="font-bold text-gray-800 mb-1 line-clamp-2 text-sm group-hover:text-cyan-600 transition-colors">
//                     {project.name}
//                   </h3>

//                   <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                     {project.description}
//                   </p>

//                   {project.techStack && project.techStack.length > 0 && (
//                     <div className="flex flex-wrap gap-1">
//                       {project.techStack.slice(0, 2).map((tech, i) => (
//                         <span
//                           key={i}
//                           className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded text-xs font-medium"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.techStack.length > 2 && (
//                         <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
//                           +{project.techStack.length - 2}
//                         </span>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ============================================
// components/project-detail/RelatedProjects.tsx
// ============================================
"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { UnifiedProject } from "@/types/project";

interface RelatedProjectsProps {
  currentProjectId: string;
  relatedProjects: UnifiedProject[];
  categorySlug: string;
}

export default function RelatedProjects({
  currentProjectId,
  relatedProjects,
  categorySlug,
}: RelatedProjectsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  if (relatedProjects.length === 0) return null;

  const itemWidth = 320;
  const gap = 24;
  const maxScroll = Math.max(
    0,
    relatedProjects.length * (itemWidth + gap) - itemWidth * 3 - gap * 2
  );

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollPosition(Math.max(0, scrollPosition - (itemWidth + gap) * 2));
    } else {
      setScrollPosition(
        Math.min(maxScroll, scrollPosition + (itemWidth + gap) * 2)
      );
    }
  };

  // Get category-specific color classes
  const getCategoryColors = () => {
    switch (categorySlug) {
      case "web-development":
        return {
          badge: "bg-cyan-600",
          hover: "hover:bg-cyan-50",
          text: "text-cyan-600",
          bg: "bg-cyan-600",
          bgHover: "hover:bg-cyan-700",
          tagBg: "bg-cyan-50",
          tagText: "text-cyan-700",
        };
      case "video-editing":
        return {
          badge: "bg-red-600",
          hover: "hover:bg-red-50",
          text: "text-red-600",
          bg: "bg-red-600",
          bgHover: "hover:bg-red-700",
          tagBg: "bg-red-50",
          tagText: "text-red-700",
        };
      case "graphic-design":
        return {
          badge: "bg-pink-600",
          hover: "hover:bg-pink-50",
          text: "text-pink-600",
          bg: "bg-pink-600",
          bgHover: "hover:bg-pink-700",
          tagBg: "bg-pink-50",
          tagText: "text-pink-700",
        };
      case "mobile-app-development":
        return {
          badge: "bg-blue-600",
          hover: "hover:bg-blue-50",
          text: "text-blue-600",
          bg: "bg-blue-600",
          bgHover: "hover:bg-blue-700",
          tagBg: "bg-blue-50",
          tagText: "text-blue-700",
        };
      case "ai-automation":
        return {
          badge: "bg-purple-600",
          hover: "hover:bg-purple-50",
          text: "text-purple-600",
          bg: "bg-purple-600",
          bgHover: "hover:bg-purple-700",
          tagBg: "bg-purple-50",
          tagText: "text-purple-700",
        };
      case "content-creation":
        return {
          badge: "bg-green-600",
          hover: "hover:bg-green-50",
          text: "text-green-600",
          bg: "bg-green-600",
          bgHover: "hover:bg-green-700",
          tagBg: "bg-green-50",
          tagText: "text-green-700",
        };
      case "sales-copywriting":
        return {
          badge: "bg-orange-600",
          hover: "hover:bg-orange-50",
          text: "text-orange-600",
          bg: "bg-orange-600",
          bgHover: "hover:bg-orange-700",
          tagBg: "bg-orange-50",
          tagText: "text-orange-700",
        };
      case "social-media-management":
        return {
          badge: "bg-indigo-600",
          hover: "hover:bg-indigo-50",
          text: "text-indigo-600",
          bg: "bg-indigo-600",
          bgHover: "hover:bg-indigo-700",
          tagBg: "bg-indigo-50",
          tagText: "text-indigo-700",
        };
      default:
        return {
          badge: "bg-cyan-600",
          hover: "hover:bg-cyan-50",
          text: "text-cyan-600",
          bg: "bg-cyan-600",
          bgHover: "hover:bg-cyan-700",
          tagBg: "bg-cyan-50",
          tagText: "text-cyan-700",
        };
    }
  };

  const colors = getCategoryColors();

  // Get primary tech/tool for each project
  const getPrimaryBadge = (project: UnifiedProject) => {
    if (project.techStack && project.techStack.length > 0)
      return project.techStack[0];
    if (project.softwareUsed && project.softwareUsed.length > 0)
      return project.softwareUsed[0];
    if (project.designTools && project.designTools.length > 0)
      return project.designTools[0];
    if (project.aiTechnologies && project.aiTechnologies.length > 0)
      return project.aiTechnologies[0];
    if (project.platforms && project.platforms.length > 0)
      return project.platforms[0];
    return null;
  };

  // Get secondary info badge
  const getSecondaryBadge = (project: UnifiedProject) => {
    if (project.videoDuration) return project.videoDuration;
    if (project.rating) return `⭐ ${project.rating}`;
    if (project.downloads) return project.downloads;
    if (project.wordCount)
      return `${(project.wordCount / 1000).toFixed(1)}k words`;
    return null;
  };

  // Get appropriate icon overlay
  const getIconOverlay = (project: UnifiedProject) => {
    if (project.videoUrl)
      return <Play className="w-8 h-8 text-white" fill="white" />;
    if (project.projectUrl || project.appStoreUrl || project.demoUrl)
      return <ExternalLink className="w-8 h-8 text-white" />;
    return <ArrowRight className="w-8 h-8 text-white" />;
  };

  // Get item count for additional badges
  const getAdditionalCount = (project: UnifiedProject) => {
    if (project.techStack && project.techStack.length > 1)
      return project.techStack.length - 1;
    if (project.softwareUsed && project.softwareUsed.length > 1)
      return project.softwareUsed.length - 1;
    if (project.designTools && project.designTools.length > 1)
      return project.designTools.length - 1;
    if (project.aiTechnologies && project.aiTechnologies.length > 1)
      return project.aiTechnologies.length - 1;
    return 0;
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Related Projects
          </h2>
          <p className="text-gray-600">
            Other projects in {relatedProjects[0]?.category || categorySlug}
          </p>
        </div>

        {relatedProjects.length > 3 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={scrollPosition === 0}
              className={`p-2 bg-white ${colors.hover} disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-200 rounded-lg transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={scrollPosition >= maxScroll}
              className={`p-2 bg-white ${colors.hover} disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-200 rounded-lg transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {relatedProjects.map((project) => {
            const primaryBadge = getPrimaryBadge(project);
            const secondaryBadge = getSecondaryBadge(project);
            const IconOverlay = getIconOverlay(project);
            const additionalCount = getAdditionalCount(project);

            return (
              <div key={project.id} className="flex-shrink-0 w-80 group">
                <Link href={`/services/${categorySlug}/${project.slug}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                          className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}
                        >
                          {IconOverlay}
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {project.badge && (
                          <span
                            className={`${colors.badge} text-white px-3 py-1 rounded-full text-xs font-bold`}
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

                      {/* Secondary Badge (Duration/Rating/etc) */}
                      {secondaryBadge && (
                        <span className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                          {secondaryBadge}
                        </span>
                      )}

                      {/* Hover Action Button */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                          className={`w-full ${colors.bg} ${colors.bgHover} text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm gap-2`}
                        >
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      {/* Category Label */}
                      <p
                        className={`text-xs ${colors.text} font-semibold mb-1 uppercase tracking-wide`}
                      >
                        {project.category}
                      </p>

                      {/* Project Name */}
                      <h3
                        className={`font-bold text-gray-800 mb-2 line-clamp-2 text-base group-hover:${colors.text} transition-colors`}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Client Name */}
                      {project.clientName && (
                        <p className="text-xs text-gray-500 mb-3">
                          Client:{" "}
                          <span className="font-semibold">
                            {project.clientName}
                          </span>
                        </p>
                      )}

                      {/* Tech/Tools Tags */}
                      <div className="flex flex-wrap gap-1">
                        {primaryBadge && (
                          <span
                            className={`${colors.tagBg} ${colors.tagText} px-2 py-1 rounded text-xs font-medium`}
                          >
                            {primaryBadge}
                          </span>
                        )}

                        {/* Show count of additional items */}
                        {additionalCount > 0 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            +{additionalCount} more
                          </span>
                        )}
                      </div>

                      {/* Special Project Info */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs">
                          {project.videoType && (
                            <span className="text-gray-500">
                              {project.videoType}
                            </span>
                          )}
                          {project.appType && (
                            <span className="text-gray-500">
                              {project.appType}
                            </span>
                          )}
                          {project.projectType && (
                            <span className="text-gray-500">
                              {project.projectType}
                            </span>
                          )}
                          {project.automationType && (
                            <span className="text-gray-500">
                              {project.automationType}
                            </span>
                          )}
                          {project.contentType && (
                            <span className="text-gray-500">
                              {project.contentType}
                            </span>
                          )}
                          {project.copyType && (
                            <span className="text-gray-500">
                              {project.copyType}
                            </span>
                          )}

                          {project.completionDate && (
                            <span className="text-gray-400 ml-auto">
                              {new Date(
                                project.completionDate
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href={`/services/${categorySlug}`}
          className={`inline-flex items-center gap-2 ${colors.bg} ${colors.bgHover} text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl`}
        >
          View All {relatedProjects[0]?.category || categorySlug} Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
