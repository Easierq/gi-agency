// "use client";
// import { useState } from "react";
// import {
//   Heart,
//   Share2,
//   ExternalLink,
//   Calendar,
//   User,
//   Code,
//   Github,
//   ArrowRight,
//   Check,
//   Video,
//   Palette,
//   Cpu,
//   Share,
//   TrendingUp,
//   FileText,
//   Smartphone,
// } from "lucide-react";
// import { UnifiedProject } from "@/types/project";

// interface Project {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   clientName?: string;
//   completionDate?: string;
//   projectUrl?: string;
//   githubUrl?: string;
//   techStack?: string[];
//   badge?: string;
//   featured?: boolean;
// }

// interface ProjectInfoProps {
//   project: UnifiedProject;
// }

// export default function ProjectInfo({ project }: ProjectInfoProps) {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showShareMenu, setShowShareMenu] = useState(false);

//   const handleShare = (platform: string) => {
//     setShowShareMenu(false);
//     console.log(`Sharing to ${platform}`);
//   };

//   const formatDate = (dateString?: string) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
//   };

//   const getCategoryIcon = () => {
//     switch (project.categorySlug) {
//       case "web-development":
//         return <Code className="w-5 h-5 text-gray-400" />;
//       case "video-editing":
//         return <Video className="w-5 h-5 text-gray-400" />;
//       case "graphic-design":
//         return <Palette className="w-5 h-5 text-gray-400" />;
//       case "mobile-app-development":
//         return <Smartphone className="w-5 h-5 text-gray-400" />;
//       case "content-creation":
//         return <FileText className="w-5 h-5 text-gray-400" />;
//       case "sales-copywriting":
//         return <TrendingUp className="w-5 h-5 text-gray-400" />;
//       case "social-media-management":
//         return <Share className="w-5 h-5 text-gray-400" />;
//       case "ai-automation":
//         return <Cpu className="w-5 h-5 text-gray-400" />;
//       default:
//         return <Code className="w-5 h-5 text-gray-400" />;
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Badges */}
//       <div className="flex items-center gap-2">
//         {project.badge && (
//           <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
//             {project.badge}
//           </span>
//         )}
//         {project.featured && (
//           <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//             <Check className="w-4 h-4" />
//             Featured Project
//           </span>
//         )}
//       </div>

//       {/* Title */}
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-2">
//           {project.name}
//         </h1>
//         <p className="text-lg text-gray-600">{project.category}</p>
//       </div>

//       {/* Description */}
//       <div className="pb-6 border-b">
//         <p className="text-gray-700 leading-relaxed">{project.description}</p>
//       </div>

//       {/* Project Details */}
//       <div className="space-y-4 pb-6 border-b">
//         <h3 className="font-bold text-gray-900 text-lg">Project Details</h3>

//         <div className="grid grid-cols-2 gap-4">
//           {project.clientName && (
//             <div className="flex items-center gap-3">
//               <User className="w-5 h-5 text-gray-400" />
//               <div>
//                 <p className="text-sm text-gray-500">Client</p>
//                 <p className="font-semibold text-gray-900">
//                   {project.clientName}
//                 </p>
//               </div>
//             </div>
//           )}

//           <div className="flex items-center gap-3">
//             <Calendar className="w-5 h-5 text-gray-400" />
//             <div>
//               <p className="text-sm text-gray-500">Completed</p>
//               <p className="font-semibold text-gray-900">
//                 {formatDate(project.completionDate)}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Code className="w-5 h-5 text-gray-400" />
//             <div>
//               <p className="text-sm text-gray-500">Category</p>
//               <p className="font-semibold text-gray-900">{project.category}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Technologies */}
//       {project.techStack && project.techStack.length > 0 && (
//         <div className="space-y-3 pb-6 border-b">
//           <h3 className="font-bold text-gray-900 text-lg">Technologies Used</h3>
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((tech, index) => (
//               <span
//                 key={index}
//                 className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Action Buttons */}
//       <div className="space-y-3 pt-6">
//         {project.projectUrl && (
//           <a
//             href={project.projectUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
//           >
//             <ExternalLink className="w-6 h-6" />
//             View Live Project
//           </a>
//         )}

//         {project.githubUrl && (
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
//           >
//             <Github className="w-6 h-6" />
//             View on GitHub
//           </a>
//         )}

//         <div className="grid grid-cols-2 gap-3">
//           <button
//             onClick={() => setIsFavorite(!isFavorite)}
//             className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
//               isFavorite
//                 ? "bg-red-50 text-red-600 border-2 border-red-200"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
//             {isFavorite ? "Saved" : "Save"}
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => setShowShareMenu(!showShareMenu)}
//               className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
//             >
//               <Share2 className="w-5 h-5" />
//               Share
//             </button>
//             {showShareMenu && (
//               <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border p-2 w-48 z-10">
//                 <button
//                   onClick={() => handleShare("Facebook")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
//                 >
//                   Facebook
//                 </button>
//                 <button
//                   onClick={() => handleShare("Twitter")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
//                 >
//                   Twitter
//                 </button>
//                 <button
//                   onClick={() => handleShare("LinkedIn")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
//                 >
//                   LinkedIn
//                 </button>
//                 <button
//                   onClick={() => handleShare("Copy")}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
//                 >
//                   Copy Link
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Contact CTA */}
//       <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6 mt-6">
//         <h3 className="font-bold text-gray-900 mb-2">Like this project?</h3>
//         <p className="text-gray-600 text-sm mb-4">
//           Let's discuss how we can create something similar for your business.
//         </p>
//         <a
//           href="/contact"
//           className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//         >
//           Get in Touch
//           <ArrowRight className="w-5 h-5 ml-2" />
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import {
  Heart,
  Share2,
  ExternalLink,
  Calendar,
  User,
  Code,
  Github,
  ArrowRight,
  Check,
  Video,
  Palette,
  Smartphone,
  FileText,
  TrendingUp,
  Share,
  Cpu,
  Star,
  Download,
} from "lucide-react";
import { UnifiedProject } from "@/types/project";

interface ProjectInfoProps {
  project: UnifiedProject;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (platform: string) => {
    setShowShareMenu(false);
    console.log(`Sharing to ${platform}`);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Get category-specific icon
  const getCategoryIcon = () => {
    switch (project.categorySlug) {
      case "web-development":
        return <Code className="w-5 h-5 text-gray-400" />;
      case "video-editing":
        return <Video className="w-5 h-5 text-gray-400" />;
      case "graphic-design":
        return <Palette className="w-5 h-5 text-gray-400" />;
      case "mobile-app-development":
        return <Smartphone className="w-5 h-5 text-gray-400" />;
      case "content-creation":
        return <FileText className="w-5 h-5 text-gray-400" />;
      case "sales-copywriting":
        return <TrendingUp className="w-5 h-5 text-gray-400" />;
      case "social-media-management":
        return <Share className="w-5 h-5 text-gray-400" />;
      case "ai-automation":
        return <Cpu className="w-5 h-5 text-gray-400" />;
      default:
        return <Code className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex items-center gap-2">
        {project.badge && (
          <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {project.badge}
          </span>
        )}
        {project.featured && (
          <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Check className="w-4 h-4" />
            Featured Project
          </span>
        )}
      </div>

      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {project.name}
        </h1>
        <p className="text-lg text-gray-600">{project.category}</p>
      </div>

      {/* Description */}
      <div className="pb-6 border-b">
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </div>

      {/* Project Details - Dynamic based on category */}
      <div className="space-y-4 pb-6 border-b">
        <h3 className="font-bold text-gray-900 text-lg">Project Details</h3>

        <div className="grid grid-cols-2 gap-4">
          {project.clientName && (
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-semibold text-gray-900">
                  {project.clientName}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="font-semibold text-gray-900">
                {formatDate(project.completionDate)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {getCategoryIcon()}
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-semibold text-gray-900">{project.category}</p>
            </div>
          </div>

          {/* Video-specific details */}
          {project.videoDuration && (
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">
                  {project.videoDuration}
                </p>
              </div>
            </div>
          )}

          {project.resolution && (
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Resolution</p>
                <p className="font-semibold text-gray-900">
                  {project.resolution}
                </p>
              </div>
            </div>
          )}

          {/* Mobile App specific */}
          {project.rating && (
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-semibold text-gray-900">{project.rating}</p>
              </div>
            </div>
          )}

          {project.downloads && (
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="font-semibold text-gray-900">
                  {project.downloads}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Results for AI/Social Media/Sales Copy */}
        {project.results && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-700 font-semibold mb-1">Results</p>
            <p className="text-green-900">{project.results}</p>
          </div>
        )}
      </div>

      {/* Technologies - Dynamic based on category */}
      {(project.techStack ||
        project.softwareUsed ||
        project.designTools ||
        project.aiTechnologies) && (
        <div className="space-y-3 pb-6 border-b">
          <h3 className="font-bold text-gray-900 text-lg">
            {project.techStack
              ? "Technologies Used"
              : project.softwareUsed
              ? "Software Used"
              : project.designTools
              ? "Design Tools"
              : project.aiTechnologies
              ? "AI Technologies"
              : "Tools"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {(
              project.techStack ||
              project.softwareUsed ||
              project.designTools ||
              project.aiTechnologies
            )?.map((item, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Platforms (Video/Social Media/Mobile) */}
      {project.platforms && project.platforms.length > 0 && (
        <div className="space-y-3 pb-6 border-b">
          <h3 className="font-bold text-gray-900 text-lg">Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {project.platforms.map((platform, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Integrations (AI Automation) */}
      {project.integrations && project.integrations.length > 0 && (
        <div className="space-y-3 pb-6 border-b">
          <h3 className="font-bold text-gray-900 text-lg">Integrations</h3>
          <div className="flex flex-wrap gap-2">
            {project.integrations.map((integration, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons - Dynamic based on available URLs */}
      <div className="space-y-3 pt-6">
        {/* Web Development */}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-6 h-6" />
            View Live Project
          </a>
        )}

        {/* Video Editing */}
        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Video className="w-6 h-6" />
            Watch Video
          </a>
        )}

        {/* Mobile App */}
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <Smartphone className="w-6 h-6" />
            App Store
          </a>
        )}

        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <Smartphone className="w-6 h-6" />
            Google Play
          </a>
        )}

        {/* AI/Demo URL */}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-6 h-6" />
            View Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <Github className="w-6 h-6" />
            View on GitHub
          </a>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isFavorite
                ? "bg-red-50 text-red-600 border-2 border-red-200"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            {isFavorite ? "Saved" : "Save"}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
            {showShareMenu && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border p-2 w-48 z-10">
                <button
                  onClick={() => handleShare("Facebook")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("Twitter")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("LinkedIn")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare("Copy")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Copy Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6 mt-6">
        <h3 className="font-bold text-gray-900 mb-2">Like this project?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Let's discuss how we can create something similar for your business.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
