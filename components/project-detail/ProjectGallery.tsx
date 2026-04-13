"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
  badge?: string;
  featured: boolean;
}

export default function ProjectGallery({
  images,
  projectName,
  badge,
  featured,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <div>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group">
          <div className="aspect-auto lg:aspect-video relative">
            <img
              src={images[selectedImage]}
              alt={projectName}
              className="w-full h-full object-cover"
            />

            {badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {badge}
                </span>
              </div>
            )}

            {featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ Featured
                </span>
              </div>
            )}

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="hidden lg:flex absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 className="w-5 h-5 text-gray-800" />
            </button>

            {/* Zoom Hint */}
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
              Click to zoom
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 lg:gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-cyan-600 shadow-lg scale-105"
                    : "border-gray-200 hover:border-cyan-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${projectName} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsFullscreen(false)}
          />
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute z-50 border border-slate-200 top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-6xl w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <img
                src={images[selectedImage]}
                alt={projectName}
                className="w-full h-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute border border-slate-200 left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute border border-slate-200 right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === index
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
