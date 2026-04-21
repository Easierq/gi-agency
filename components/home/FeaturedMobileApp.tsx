"use client";
import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Smartphone,
} from "lucide-react";
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
  platforms: string[];
  appType: string;
  downloads?: string;
  rating?: string;
}

interface Props {
  data?: Project[];
}

export default function FeaturedMobileApp({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = data || [];

  const scrollAmount = 350; // width of card + gap

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
              {/* <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div> */}
              <h2 className="hidden md:inline-block text-3xl font-bold text-gray-800">
                Mobile App Development{" "}
                <span className="hidden md:inline-block text-purple-600">
                  Service
                </span>
              </h2>
              <h2 className="inline-block md:hidden text-3xl font-bold text-gray-800">
                App Development
                <span className="hidden md:inline-block text-purple-600">
                  Service
                </span>
              </h2>
            </div>
            <p className="text-gray-600">
              Native and cross-platform mobile applications
            </p>
          </div>

          <Link
            href="/services/mobile-app-development"
            className="group hidden md:flex items-center bg-indigo-600 p-2 px-5 rounded-full text-white font-semibold"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hidden-scrollbar scroll-smooth py-4"
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/services/mobile-app-development/${project.slug}`}
                className="flex-shrink-0 w-72 md:w-80"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {project.badge && (
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {project.badge}
                      </span>
                    )}

                    {project.popular && (
                      <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Popular
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-indigo-600 font-semibold mb-1">
                      {project.appType}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      {project.downloads && (
                        <div className="text-xs text-gray-500">
                          <span className="font-semibold text-indigo-600">
                            {project.downloads}
                          </span>{" "}
                          downloads
                        </div>
                      )}
                      {project.rating && (
                        <div className="text-xs">
                          <span className="font-semibold text-yellow-600">
                            ⭐ {project.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 mb-1">Platforms:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.platforms.map((platform, i) => (
                          <span
                            key={i}
                            className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Chevron Buttons */}
          {projects.length > 3 && (
            <>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6 text-indigo-600" />
              </button>

              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronRight className="w-6 h-6 text-indigo-600" />
              </button>
            </>
          )}
        </div>

        {/* Mobile View All */}
        <div className="text-center mt-4 md:hidden">
          <Link
            href="/services/mobile-app-development"
            className="inline-flex items-center border border-indigo-600 px-3 py-2 rounded-full text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            View All Mobile App Projects
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
