import React from "react";
import { Users, Briefcase, Award, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Briefcase,
      number: "1,000+",
      label: "Projects Completed",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Award,
      number: "50+",
      label: "Industry Awards",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Client Retention",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Impact in <span className="text-yellow-300">Numbers</span>
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Delivering excellence and measurable results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-green-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
