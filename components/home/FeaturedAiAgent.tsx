"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Code } from "lucide-react";
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
  techStack: string[];
  clientName?: string;
}

interface Props {
  data?: Project[];
}

export default function FeaturedAiAgent({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = data || [];

  const scrollAmount = 350; // adjust based on card width + gap

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Ai Agents Development{" "}
                <span className="hidden md:inline-block text-cyan-600">
                  Services
                </span>
              </h2>
            </div>
            <p className="text-gray-600">
              Recent ai agent applications we've built
            </p>
          </div>

          <Link
            href="/services/ai-agents"
            className="hidden md:flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            View All
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto hidden-scrollbar scroll-smooth"
          >
            <div className="flex gap-4 md:gap-6 py-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/services/ai-agents/${project.slug}`}
                  className="flex-shrink-0 w-72 md:w-80"
                >
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {project.badge && (
                        <span className="absolute top-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {project.badge}
                        </span>
                      )}

                      {project.popular && (
                        <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Popular
                        </span>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm">
                          View Project
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {project.name}
                      </h3>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {project.clientName && (
                        <p className="text-xs text-gray-500 mb-3">
                          Client:{" "}
                          <span className="font-semibold">
                            {project.clientName}
                          </span>
                        </p>
                      )}

                      <div className="space-y-1 mb-4">
                        <p className="text-xs text-gray-500 mb-1">
                          Tech Stack:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded text-xs font-medium"
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

          {/* Chevron Buttons */}
          {projects.length > 3 && (
            <>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-600" />
              </button>

              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronRight className="w-6 h-6 text-cyan-600" />
              </button>
            </>
          )}
        </div>

        {/* Mobile "View All" */}
        <div className="text-center mt-8 md:hidden">
          <Link
            href="/services/ai-agents"
            className="inline-flex items-center border border-cyan-600 text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            View All Ai Agents Projects
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
