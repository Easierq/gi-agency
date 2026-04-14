// app/services/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Code,
  PenTool,
  FileText,
  Share2,
  Video,
  Palette,
  ArrowRight,
  Star,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Filter,
  Smartphone,
  Bot,
  Zap,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // const categories = [
  //   {
  //     id: "web-development",
  //     name: "Web Development",
  //     slug: "web-development",
  //     icon: Code,
  //     description: "Professional websites and web applications",
  //     projectCount: 47,
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  //     color: "from-cyan-500 to-blue-500",
  //     bgColor: "bg-cyan-50",
  //     iconColor: "text-cyan-600",
  //     borderColor: "border-cyan-200",
  //     featured: true,
  //     tags: ["Next.js", "React", "TypeScript"],
  //   },
  //   {
  //     id: "graphic-design",
  //     name: "Graphic Design",
  //     slug: "graphic-design",
  //     icon: Palette,
  //     description: "Creative designs that make an impact",
  //     projectCount: 42,
  //     image:
  //       "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
  //     color: "from-yellow-500 to-orange-500",
  //     bgColor: "bg-yellow-50",
  //     iconColor: "text-yellow-600",
  //     borderColor: "border-yellow-200",
  //     featured: true,
  //     tags: ["Branding", "Logo Design", "Print Design"],
  //   },

  //   {
  //     id: "ai-automation",
  //     name: "AI Automation",
  //     slug: "ai-automation",
  //     icon: Sparkles,
  //     description: "Intelligent automation powered by AI",
  //     projectCount: 25,
  //     image:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  //     color: "from-purple-500 to-indigo-500",
  //     bgColor: "bg-purple-50",
  //     iconColor: "text-purple-600",
  //     borderColor: "border-purple-200",
  //     featured: true,
  //     tags: ["GPT-4", "Automation", "AI-Powered"],
  //   },
  //   {
  //     id: "mobile-app-development",
  //     name: "Mobile App Development",
  //     slug: "mobile-app-development",
  //     icon: Smartphone,
  //     description: "Native and cross-platform apps",
  //     projectCount: 30,
  //     image:
  //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  //     color: "from-indigo-500 to-blue-500",
  //     bgColor: "bg-indigo-50",
  //     iconColor: "text-indigo-600",
  //     borderColor: "border-indigo-200",
  //     featured: true,
  //     tags: ["iOS", "Android", "React Native"],
  //   },
  // ];

  const categories = [
    {
      id: "web-development",
      name: "Web Development",
      slug: "web-development",
      icon: Code,
      description: "Professional websites and web applications",
      projectCount: 47,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      featured: true,
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      slug: "graphic-design",
      icon: Palette,
      description: "Creative designs that make an impact",
      projectCount: 42,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      featured: true,
      tags: ["Branding", "Logo Design", "Print Design"],
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      slug: "ai-automation",
      icon: Sparkles,
      description: "Intelligent automation powered by AI",
      projectCount: 25,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      featured: true,
      tags: ["GPT-4", "Automation", "AI-Powered"],
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      slug: "mobile-app-development",
      icon: Smartphone,
      description: "Native and cross-platform apps",
      projectCount: 30,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      featured: true,
      tags: ["iOS", "Android", "React Native"],
    },
    {
      id: "vibe-coding",
      name: "Vibe Coding",
      slug: "vibe-coding",
      icon: Zap,
      description: "AI-assisted development at lightning speed",
      projectCount: 18,
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
      featured: true,
      tags: ["Cursor", "v0", "Bolt.new"],
    },
    {
      id: "ai-agent-building",
      name: "AI Agent Building",
      slug: "ai-agent-building",
      icon: Bot,
      description: "Autonomous agents that think and act",
      projectCount: 15,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      featured: true,
      tags: ["LangChain", "CrewAI", "AutoGen"],
    },
  ];

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || cat.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCategories = categories.filter((cat) => cat.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute transform -rotate-45 top-20 -left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute transform rotate-12 bottom-10 right-20 w-24 h-24 bg-white rounded-full"></div>
        </div> */}

        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[40px] md:text-6xl font-bold mb-6 leading-tight">
                Our Portfolio of
                <span className="block text-yellow-300">
                  Professional Services
                </span>
              </h1>

              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Explore our work across web development, design, content
                creation, and more
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Category Filter */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3 md:mb-6">
            <h2 className="text-2xl font-semibold md:font-bold text-gray-900">
              Browse by Category
            </h2>

            <div className="flex items-center gap-2">
              <Filter className="hidden md:flex w-5 h-5 text-gray-400" />

              {/* ShadCN Select */}
              <Select
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <SelectTrigger className="w-60">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured <span className="text-green-600">Services</span>
                </h2>
                <p className="text-gray-600">
                  Our most popular and highly-rated service categories
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/services/${category.slug}`}>
                      <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                          <div
                            className={`absolute top-4 right-4 ${category.bgColor} p-3 rounded-full shadow-lg`}
                          >
                            <Icon className={`w-6 h-6 ${category.iconColor}`} />
                          </div>

                          <div className="absolute top-4 left-4">
                            <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                              ⭐ Featured
                            </span>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-1">
                              {category.name}
                            </h3>
                            <p className="text-green-100 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-600 text-sm">
                              {category.projectCount} projects completed
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {category.tags.map((tag, i) => (
                              <span
                                key={i}
                                className={`${category.bgColor} ${category.iconColor} px-2 py-1 rounded-full text-xs font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-gray-600 text-sm font-medium">
                              View Portfolio
                            </span>
                            <div className="flex items-center text-green-600 group-hover:text-green-700 font-semibold">
                              Explore
                              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === "all"
              ? "All Service Categories"
              : "Filtered Results"}
          </h2>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No services found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/services/${category.slug}`}>
                      <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                          ></div>

                          <div
                            className={`absolute top-4 right-4 ${category.bgColor} ${category.borderColor} border-2 p-3 rounded-full shadow-lg`}
                          >
                            <Icon className={`w-6 h-6 ${category.iconColor}`} />
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm">
                            {category.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <span className="ml-2 text-sm font-semibold text-gray-700">
                                Featured
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {category.projectCount} projects
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div>
                              <div className="text-xs text-gray-500">
                                Portfolio
                              </div>
                              <div className="text-lg font-bold text-green-600">
                                {category.projectCount}+ projects
                              </div>
                            </div>
                            <div className="flex items-center text-green-600 group-hover:text-green-700 font-semibold">
                              View Portfolio
                              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your unique needs. Let's
            discuss your project!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-colors inline-flex items-center shadow-xl"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-colors border-2 border-white/30"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
