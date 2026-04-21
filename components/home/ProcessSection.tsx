import React from "react";
import { MessageSquare, Lightbulb, Rocket, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your goals, requirements, and project scope",
      color: "bg-blue-100 text-blue-600",
      number: "01",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Our team develops a customized plan tailored to your needs",
      color: "bg-purple-100 text-purple-600",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Execution",
      description: "We bring your project to life with expert execution",
      color: "bg-orange-100 text-orange-600",
      number: "03",
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Review, refine, and deliver your perfect final product",
      color: "bg-green-100 text-green-600",
      number: "04",
    },
  ];

  return (
    <section className="py-12 bg-green-50/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven approach to delivering exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-full mb-6`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            Ready to get started? Let's bring your vision to life!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=2347065866656"
            className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
