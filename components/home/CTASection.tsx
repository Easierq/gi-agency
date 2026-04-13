import React from "react";
import { ArrowRight, Phone, Mail, Gift } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 pb-40 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 rounded-xl md:rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-6 lg:p-16 text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Limited Time Offer
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                Ready to Elevate Your Business?
              </h2>

              <p className="text-lg lg:text-xl text-green-100 mb-4 lg:mb-8 leading-relaxed">
                Get started today and receive 20% off your first project. Let's
                bring your vision to life with our expert team!
              </p>

              <div className="space-y-4 mb-6 lg:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Free Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Unlimited Revisions</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center shadow-xl"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <div />
              </div>
            </div>

            {/* Right Side - Contact Options */}
            <div className="bg-white p-6 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Prefer to talk? Our team is ready to answer your questions and
                discuss your project.
              </p>

              <div className="space-y-4 lg:space-y-6">
                <a
                  href="tel:+2347048390756"
                  className="flex items-center gap-4 p-4 lg:p-6 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group border-2 border-green-200"
                >
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Call us at</div>
                    <div className="text-lg font-bold text-gray-800">
                      (234) 704-8390-756
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@agency.com"
                  className="flex items-center gap-4 p-4 lg:p-6 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group border-2 border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email us at</div>
                    <div className="text-lg font-bold text-gray-800">
                      hello@agency.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 gap-4 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 min-w-12 min-h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Special Offer!
                    </h4>
                    <p className="text-sm text-gray-600">
                      Book a consultation this week and get 20% off your first
                      project + a free brand audit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
