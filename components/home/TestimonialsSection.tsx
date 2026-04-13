"use client";
import React, { useState } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Working with this agency transformed our digital presence. Their web development team delivered a stunning website that exceeded our expectations. The attention to detail and professionalism was outstanding!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      company: "TechStart Inc.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director, GrowthCo",
      content:
        "The content creation team is phenomenal! They've helped us 3x our organic traffic with their SEO-optimized blog posts and engaging social media content. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      company: "GrowthCo",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      content:
        "Their graphic design services are top-notch. From our logo to complete brand identity, every piece was perfect. The team truly understands design and branding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "Creative Studio",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Client <span className="text-green-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 min-h-96 flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-green-600 w-8"
                    : "bg-gray-300 hover:bg-green-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
