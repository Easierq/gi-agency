// app/not-found.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  ArrowRight,
  Code,
  Palette,
  Video,
  PenTool,
  FileText,
  Share2,
  ChevronRight,
  Sparkles,
  MapPin,
  Compass,
  Briefcase,
  Mail,
} from "lucide-react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const quickLinks = [
    {
      icon: Home,
      title: "Home",
      description: "Back to homepage",
      href: "/",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Briefcase,
      title: "Services",
      description: "Our services",
      href: "/services",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Sparkles,
      title: "Portfolio",
      description: "View our work",
      href: "/",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch",
      href: "/contact",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  // const services = [
  //   {
  //     name: "Web Development",
  //     href: "/services/web-development",
  //     icon: Code,
  //     color: "from-cyan-500 to-blue-500",
  //   },
  //   {
  //     name: "Graphic Design",
  //     href: "/services/graphic-design",
  //     icon: Palette,
  //     color: "from-yellow-500 to-orange-500",
  //   },
  //   {
  //     name: "Video Editing",
  //     href: "/services/video-editing",
  //     icon: Video,
  //     color: "from-red-500 to-pink-500",
  //   },
  //   {
  //     name: "Sales Copy",
  //     href: "/services/sales-copywriting",
  //     icon: PenTool,
  //     color: "from-blue-500 to-purple-500",
  //   },
  //   {
  //     name: "Content Creation",
  //     href: "/services/content-creation",
  //     icon: FileText,
  //     color: "from-purple-500 to-pink-500",
  //   },
  //   {
  //     name: "Social Media",
  //     href: "/services/social-media-management",
  //     icon: Share2,
  //     color: "from-pink-500 to-red-500",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
            animationDelay: "2s",
          }}
        />

        {/* Floating Icons */}
        <div className="absolute top-20 right-20 animate-float">
          <Code className="w-12 h-12 text-cyan-300/50" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float-delayed">
          <Palette className="w-10 h-10 text-purple-300/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-slow">
          <Video className="w-14 h-14 text-blue-300/50" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <Sparkles className="w-10 h-10 text-pink-300/50" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            {/* 404 Number */}
            <div className="mb-8 relative">
              <h1
                className="text-[180px] md:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 leading-none select-none"
                style={{
                  textShadow: "0 0 80px rgba(6, 182, 212, 0.3)",
                }}
              >
                404
              </h1>
              {/* Floating Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-full p-8 shadow-2xl animate-bounce-slow">
                  <Compass className="w-16 h-16 text-cyan-600" />
                </div>
              </div>
            </div>

            {/* Main Message */}
            <div className="mb-6 space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Looks like this project has been moved or doesn't exist. Let's
                help you find what you're looking for!
              </p>
            </div>

            {/* Decorative Separator */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-300"></div>
              <MapPin className="w-5 h-5 text-cyan-500" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-300"></div>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our portfolio..."
                  className="w-full px-6 py-4 pr-32 border-2 border-gray-300 rounded-full focus:border-cyan-500 focus:outline-none text-lg shadow-lg"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      window.location.href = `/services?q=${e.currentTarget.value}`;
                    }
                  }}
                />
                <button
                  onClick={(e) => {
                    const input = e.currentTarget
                      .previousElementSibling as HTMLInputElement;
                    window.location.href = `/services?q=${input.value}`;
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-cyan-500"
                  >
                    <div
                      className={`${link.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-cyan-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {link.description}
                    </p>
                    <div className="flex items-center text-cyan-600 font-semibold text-sm">
                      <span>Go now</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Our Services */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Explore Our Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all border-2 border-transparent hover:border-cyan-500 text-center"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                      {service.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div> */}

          {/* Popular Projects Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Popular Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  category: "Web Development",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                  href: "/services/web-development",
                },
                {
                  title: "Brand Identity Design",
                  category: "Graphic Design",
                  image:
                    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
                  href: "/services/graphic-design",
                },
                {
                  title: "Product Launch Video",
                  category: "Video Editing",
                  image:
                    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop",
                  href: "/services/video-editing",
                },
              ].map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs text-cyan-300 mb-1">
                      {project.category}
                    </p>
                    <h4 className="font-bold text-lg">{project.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Need Help?</h3>
              <p className="text-cyan-100 mb-6 text-lg">
                Can't find what you're looking for? We're here to help you
                navigate our portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Home CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Home className="w-6 h-6" />
              Back to Homepage
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
