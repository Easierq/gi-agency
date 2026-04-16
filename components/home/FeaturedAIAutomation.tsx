"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import CardSkeleton from "../common/CardSkeleton";

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
  aiTechnologies: string[];
  automationType: string;
  results?: string;
}
interface Props {
  data?: Project[];
}

export default function FeaturedAIAutomation({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = data || [];

  const scrollAmount = 350;

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  if (!projects.length) {
    return <CardSkeleton count={5} />; // show skeleton while loading
  }

  return (
    <section className="py-10 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                AI Automation{" "}
                <span className="hidden md:inline-block text-purple-600">
                  Service
                </span>
              </h2>
            </div>
            <p className="text-gray-600">
              Intelligent solutions powered by artificial intelligence
            </p>
          </div>

          <Link
            href="/services/ai-automation"
            className="hidden md:flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            View All <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth hidden-scrollbar"
          >
            <div className="flex gap-4 md:gap-6 py-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/services/ai-automation/${project.slug}`}
                  className="flex-shrink-0 w-72 md:w-80"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {project.badge && (
                        <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {project.badge}
                        </span>
                      )}

                      {project.popular && (
                        <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Popular
                        </span>
                      )}

                      {project.results && (
                        <span className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {project.results}
                        </span>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm">
                          View Project <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-xs text-purple-600 font-semibold mb-1">
                        {project.automationType}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 mb-1">
                          AI Technologies:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.aiTechnologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/services/ai-automation"
            className="inline-flex items-center border border-purple-600 text-purple-600 hover:text-purple-700 font-semibold"
          >
            View All AI Automation Projects{" "}
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
