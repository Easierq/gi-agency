// "use client";
// import { useState } from "react";
// import { Check, Package } from "lucide-react";

// interface Project {
//   name: string;
//   features?: string[];
//   description: string;
// }

// interface ProjectDetailsProps {
//   project: Project;
// }

// export default function ProjectDetails({ project }: ProjectDetailsProps) {
//   const [activeTab, setActiveTab] = useState<"overview" | "features">(
//     "overview"
//   );

//   const tabs = [
//     { id: "overview" as const, label: "Overview", icon: Package },
//     { id: "features" as const, label: "Features", icon: Check },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
//       {/* Tabs Header */}
//       <div className="border-b">
//         <div className="flex overflow-x-auto">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center gap-2 px-8 py-4 font-semibold whitespace-nowrap transition-colors border-b-2 ${
//                   activeTab === tab.id
//                     ? "border-cyan-600 text-cyan-600"
//                     : "border-transparent text-gray-600 hover:text-cyan-600"
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="p-8">
//         {/* Overview Tab */}
//         {activeTab === "overview" && (
//           <div className="prose max-w-none">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               About This Project
//             </h3>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               {project.description}
//             </p>

//             <h4 className="text-xl font-bold text-gray-900 mb-3 mt-8">
//               Project Highlights
//             </h4>
//             <ul className="space-y-2 mb-6">
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 mt-1">✓</span>
//                 <span className="text-gray-700">
//                   Custom-built solution tailored to client needs
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 mt-1">✓</span>
//                 <span className="text-gray-700">
//                   Modern tech stack and best practices
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 mt-1">✓</span>
//                 <span className="text-gray-700">
//                   Responsive design for all devices
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 mt-1">✓</span>
//                 <span className="text-gray-700">
//                   Optimized for performance and scalability
//                 </span>
//               </li>
//             </ul>

//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
//               <h4 className="font-bold text-blue-900 mb-2">
//                 Interested in a Similar Project?
//               </h4>
//               <p className="text-blue-700 text-sm">
//                 We can build a custom solution tailored to your specific
//                 requirements. Contact us to discuss your project and get a
//                 personalized quote.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Features Tab */}
//         {activeTab === "features" && (
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Project Features
//             </h3>
//             {project.features && project.features.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {project.features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors"
//                   >
//                     <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <Check className="w-4 h-4" />
//                     </div>
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-600">
//                 No detailed features listed for this project.
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// ============================================
// components/project-detail/ProjectDetails.tsx
// ============================================
"use client";
import { useState } from "react";
import {
  Check,
  Package,
  Info,
  Palette,
  Video,
  Code,
  Smartphone,
  FileText,
  TrendingUp,
  Share,
  Cpu,
} from "lucide-react";
import { UnifiedProject } from "@/types/project";

interface ProjectDetailsProps {
  project: UnifiedProject;
}

type TabId = "overview" | "features" | "specs";

type TabItem = {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "specs">(
    "overview"
  );

  // Dynamic tab configuration based on project type
  const getTabs = () => {
    const baseTabs: TabItem[] = [
      { id: "overview" as const, label: "Overview", icon: Package },
      { id: "features" as const, label: "Features", icon: Check },
    ];

    // Add specs tab if project has technical details
    const hasSpecs =
      project.techStack ||
      project.softwareUsed ||
      project.designTools ||
      project.aiTechnologies ||
      project.platforms ||
      project.integrations ||
      project.colorPalette ||
      project.videoType ||
      project.appType;

    if (hasSpecs) {
      baseTabs.push({
        id: "specs" as const,
        label: "Specifications",
        icon: Info,
      });
    }

    return baseTabs;
  };

  const tabs = getTabs();

  // Get category-specific highlights
  const getCategoryHighlights = () => {
    const baseHighlights = [
      "Custom-built solution tailored to client needs",
      "Professional quality and attention to detail",
    ];

    switch (project.categorySlug) {
      case "web-development":
        return [
          ...baseHighlights,
          "Modern tech stack and best practices",
          "Responsive design for all devices",
          "Optimized for performance and SEO",
        ];
      case "video-editing":
        return [
          ...baseHighlights,
          "Professional-grade editing and post-production",
          "Optimized for multiple platforms",
          "Color grading and audio enhancement",
        ];
      case "graphic-design":
        return [
          ...baseHighlights,
          "Original creative concepts",
          "Print and digital ready files",
          "Consistent brand identity",
        ];
      case "mobile-app-development":
        return [
          ...baseHighlights,
          "Cross-platform compatibility",
          "Intuitive user experience",
          "App store optimization ready",
        ];
      case "ai-automation":
        return [
          ...baseHighlights,
          "Cutting-edge AI technologies",
          "Seamless integration with existing systems",
          "Scalable and maintainable architecture",
        ];
      case "content-creation":
        return [
          ...baseHighlights,
          "SEO-optimized content",
          "Engaging and conversion-focused",
          "Industry-specific expertise",
        ];
      case "sales-copywriting":
        return [
          ...baseHighlights,
          "Conversion-focused messaging",
          "Compelling calls-to-action",
          "A/B tested approaches",
        ];
      case "social-media-management":
        return [
          ...baseHighlights,
          "Data-driven strategy",
          "Consistent brand voice",
          "Engagement optimization",
        ];
      default:
        return baseHighlights;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
      {/* Tabs Header */}
      <div className="border-b">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 font-semibold whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-cyan-600 text-cyan-600"
                    : "border-transparent text-gray-600 hover:text-cyan-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About This Project
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3 mt-8">
              Project Highlights
            </h4>
            <ul className="space-y-2 mb-6">
              {getCategoryHighlights().map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Category-specific overview sections */}
            {project.results && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-green-900 mb-2">
                  Measurable Results
                </h4>
                <p className="text-green-700">{project.results}</p>
              </div>
            )}

            {project.videoType && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-purple-900 mb-2">Video Type</h4>
                <p className="text-purple-700">{project.videoType}</p>
              </div>
            )}

            {project.projectType && (
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-pink-900 mb-2">Design Type</h4>
                <p className="text-pink-700">{project.projectType}</p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-blue-900 mb-2">
                Interested in a Similar Project?
              </h4>
              <p className="text-blue-700 text-sm">
                We can build a custom solution tailored to your specific
                requirements. Contact us to discuss your project and get a
                personalized quote.
              </p>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Features
            </h3>
            {project.features && project.features.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors"
                  >
                    <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Check className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  No detailed features listed for this project.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specs" && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h3>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-cyan-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Technology Stack
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Software Used */}
            {project.softwareUsed && project.softwareUsed.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-5 h-5 text-red-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Software Used
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.softwareUsed.map((software, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Design Tools */}
            {project.designTools && project.designTools.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-pink-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Design Tools
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.designTools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AI Technologies */}
            {project.aiTechnologies && project.aiTechnologies.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    AI Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.aiTechnologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Platforms */}
            {project.platforms && project.platforms.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-bold text-gray-900">Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.platforms.map((platform, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Integrations */}
            {project.integrations && project.integrations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Share className="w-5 h-5 text-green-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Integrations
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Color Palette */}
            {project.colorPalette && project.colorPalette.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-pink-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Color Palette
                  </h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.colorPalette.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-20 h-20 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="mt-2 text-sm font-mono text-gray-600">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.videoDuration && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">
                    {project.videoDuration}
                  </p>
                </div>
              )}
              {project.resolution && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Resolution</p>
                  <p className="font-semibold text-gray-900">
                    {project.resolution}
                  </p>
                </div>
              )}
              {project.wordCount && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Word Count</p>
                  <p className="font-semibold text-gray-900">
                    {project.wordCount.toLocaleString()}
                  </p>
                </div>
              )}
              {project.appType && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">App Type</p>
                  <p className="font-semibold text-gray-900">
                    {project.appType}
                  </p>
                </div>
              )}
              {project.automationType && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Automation Type</p>
                  <p className="font-semibold text-gray-900">
                    {project.automationType}
                  </p>
                </div>
              )}
              {project.campaignType && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Campaign Type</p>
                  <p className="font-semibold text-gray-900">
                    {project.campaignType}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
