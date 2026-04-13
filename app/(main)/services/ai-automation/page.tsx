// "use client";
// import React, { useState } from "react";
// import { Search, Sparkles } from "lucide-react";
// import AIAutomationGallery from "@/components/service-category/AIAutomationGallery";
// const AIAutomationPage = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [sortBy, setSortBy] = useState<string>("popular");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-24">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl">
//             <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//               <Sparkles className="w-5 h-5 mr-2" />
//               <span className="text-sm font-semibold">
//                 AI Automation Portfolio
//               </span>
//             </div>
//             <h1 className="text-5xl font-bold mb-4">
//               AI-Powered Automation Solutions
//             </h1>
//             <p className="text-xl text-purple-100 mb-8">
//               Explore our portfolio of intelligent automation projects and AI
//               integrations
//             </p>

//             {/* Search Bar */}
//             <form onSubmit={handleSearch} className="relative max-w-2xl">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search AI automation projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
//               />
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Toolbar */}
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-4">
//             <span className="text-gray-600">
//               Browse our AI automation portfolio
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-sm text-gray-600">Sort by:</span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               <option value="popular">Most Popular</option>
//               <option value="recent">Most Recent</option>
//               <option value="name">Project Name</option>
//             </select>
//           </div>
//         </div>

//         {/* Main Content */}
//         <main>
//           <AIAutomationGallery
//             searchQuery={searchQuery}
//             sortBy={sortBy}
//             categorySlug="ai-automation"
//           />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AIAutomationPage;

import { AiClient } from "@/components/service-category/AiClient";

export const revalidate = 0;

const CATEGORY = "ai-automation";

const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

const AIAutomationPage = async () => {
  const projects = await fetchProjects(CATEGORY);
  console.log(projects);

  return <AiClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default AIAutomationPage;
