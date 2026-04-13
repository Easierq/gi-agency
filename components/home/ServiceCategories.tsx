"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PenTool,
  FileText,
  Share2,
  Video,
  Palette,
  Code,
  ChevronRight,
  Sparkles,
  Smartphone,
} from "lucide-react";

export default function ServiceCategories() {
  const categories = [
    {
      id: "sales-copywriting",
      name: "Sales Copywriting",
      slug: "sales-copywriting",
      icon: PenTool,
      serviceCount: 45,
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      color: "bg-blue-500",
    },
    {
      id: "content-creation",
      name: "Content Creation",
      slug: "content-creation",
      icon: FileText,
      serviceCount: 38,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      color: "bg-purple-500",
    },
    {
      id: "social-media-management",
      name: "Social Media Management",
      slug: "social-media-management",
      icon: Share2,
      serviceCount: 32,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      color: "bg-pink-500",
    },
    {
      id: "video-editing",
      name: "Video Editing",
      slug: "video-editing",
      icon: Video,
      serviceCount: 35,
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      color: "bg-red-500",
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      slug: "graphics-design",
      icon: Palette,
      serviceCount: 42,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      color: "bg-yellow-500",
    },
    {
      id: "web-development",
      name: "Web Development",
      slug: "web-development",
      icon: Code,
      serviceCount: 50,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      color: "bg-cyan-500",
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      slug: "ai-automation",
      icon: Sparkles,
      serviceCount: 25,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "bg-purple-500",
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      slug: "mobile-app-development",
      icon: Smartphone,
      serviceCount: 30,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      color: "bg-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions tailored to grow your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/services/${category.slug}`}>
                  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Icon Badge */}
                      <div
                        className={`absolute top-4 right-4 ${category.color} text-white p-3 rounded-full shadow-lg`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {category.name}
                      </h3>
                      {/* <p className="text-white text-sm mb-4">
                        {category.serviceCount}+ projects completed
                      </p> */}
                      <div className="flex items-center text-white group-hover:text-green-200 transition-colors">
                        <span className="font-medium">View Service</span>
                        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
