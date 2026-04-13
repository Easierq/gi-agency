import React from "react";
import { Rocket, Award, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced professionals in every service category",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Headphones,
      title: "Unlimited Revisions",
      description: "We work until you're 100% satisfied",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-green-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional results that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-6`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
