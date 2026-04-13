"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID and platform
  const getVideoInfo = (url: string) => {
    // YouTube
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      return { platform: "youtube", id: youtubeMatch[1] };
    }

    // Vimeo
    const vimeoRegex =
      /vimeo\.com\/(?:channels\/|groups\/|album\/\d+\/video\/)?(\d+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) {
      return { platform: "vimeo", id: vimeoMatch[1] };
    }

    // Direct video URL
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return { platform: "direct", id: url };
    }

    return null;
  };

  const videoInfo = getVideoInfo(videoUrl);

  if (!videoInfo) {
    return (
      <div className="bg-gray-100 rounded-2xl p-6 text-center">
        <p className="text-gray-600">Unsupported video URL format</p>
      </div>
    );
  }

  const renderPlayer = () => {
    if (!isPlaying) {
      // Thumbnail with play button
      let thumbnailUrl = "";

      if (videoInfo.platform === "youtube") {
        thumbnailUrl = `https://img.youtube.com/vi/${videoInfo.id}/maxresdefault.jpg`;
      } else if (videoInfo.platform === "vimeo") {
        thumbnailUrl =
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop";
      }

      return (
        <div
          className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      );
    }

    // Actual video player
    if (videoInfo.platform === "youtube") {
      return (
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoInfo.id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }

    if (videoInfo.platform === "vimeo") {
      return (
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${videoInfo.id}?autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }

    if (videoInfo.platform === "direct") {
      return (
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
          <video
            src={videoInfo.id}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Project Video</h3>
        {renderPlayer()}
      </div>
    </div>
  );
}
