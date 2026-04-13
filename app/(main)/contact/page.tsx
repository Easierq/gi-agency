"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  // MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Calendar,
  CheckCircle,
  Code,
  Palette,
  Video,
  PenTool,
  FileText,
  Share2,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "web-development",
    budget: "",
    message: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your API
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 706 586-6656",
      subtext: "Mon-Fri: 9AM-6PM EST",
      action: "Call Now",
      color: "bg-cyan-100 text-cyan-600",
      href: "tel:+2347048390756",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@giagency.com",
      subtext: "We respond within 24 hours",
      action: "Send Email",
      color: "bg-green-100 text-green-600",
      href: "mailto:isiaqofficial@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Chat with our team",
      subtext: "Available during business hours",
      action: "Start Chat",
      color: "bg-purple-100 text-purple-600",
      href: "https://api.whatsapp.com/send?phone=2347065866656",
    },
    {
      icon: Calendar,
      title: "Book a Call",
      details: "Free consultation",
      subtext: "30-minute strategy session",
      action: "Schedule Now",
      color: "bg-blue-100 text-blue-600",
      href: "https://api.whatsapp.com/send?phone=2347065866656",
    },
  ];

  const services = [
    {
      icon: Code,
      name: "Web Development",
      description: "Custom websites & web apps",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      icon: Palette,
      name: "Graphic Design",
      description: "Branding & visual identity",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: Video,
      name: "Video Editing",
      description: "Professional video production",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: PenTool,
      name: "Sales Copywriting",
      description: "Compelling sales copy",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: FileText,
      name: "Content Creation",
      description: "Engaging written content",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: Share2,
      name: "Social Media",
      description: "Social media management",
      color: "bg-pink-50 border-pink-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute transform -rotate-45 top-20 -left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute transform rotate-12 bottom-10 right-20 w-24 h-24 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              Let's Work Together
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Start Your Project
              <span className="block text-yellow-300">With Us Today</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create
              something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your <span className="text-cyan-600">Contact Method</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - pick what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all group"
                >
                  <div
                    className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {method.title}
                  </h3>
                  <p className="text-gray-900 font-semibold mb-1 text-center">
                    {method.details}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {method.subtext}
                  </p>
                  <a
                    href={method.href}
                    className="block text-center bg-gray-100 hover:bg-cyan-600 hover:text-white text-gray-700 py-2 rounded-lg font-medium transition-colors"
                  >
                    {method.action}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700 mb-6">
                      Thanks for reaching out! We'll review your project details
                      and get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ShadCN Select - Service */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Needed *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="graphic-design">
                              Graphic Design
                            </SelectItem>
                            <SelectItem value="video-editing">
                              Video Editing
                            </SelectItem>
                            <SelectItem value="sales-copywriting">
                              Sales Copywriting
                            </SelectItem>
                            <SelectItem value="content-creation">
                              Content Creation
                            </SelectItem>
                            <SelectItem value="social-media">
                              Social Media Management
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* ShadCN Select - Budget */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budget: value })
                          }
                        >
                          <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">
                              Under $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* ShadCN Select - Timeline */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          setFormData({ ...formData, timeline: value })
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">
                            ASAP (within 2 weeks)
                          </SelectItem>
                          <SelectItem value="1-month">
                            Within 1 month
                          </SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center group"
                    >
                      Send Project Inquiry
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
                <Clock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-cyan-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold text-white">9AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold text-white">10AM - 4PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-white">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-cyan-100">
                    Eastern Standard Time (EST)
                  </p>
                </div>
              </div>

              {/* Services Quick Reference */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className={`${service.color} border-2 p-3 rounded-lg`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">
                              {service.name}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stay updated with our latest work
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Prefer to Talk Directly?
            </h3>
            <p className="text-purple-100 mb-6">
              Schedule a free 30-minute consultation call with our team
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=2347048390756"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
