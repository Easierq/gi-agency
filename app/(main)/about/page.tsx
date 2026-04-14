"use client";
import { useState } from "react";
import {
  Award,
  Users,
  Globe,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Code,
  Palette,
  Video,
  PenTool,
  FileText,
  Share2,
  ChevronRight,
  Heart,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    {
      number: "200+",
      label: "Projects Completed",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      number: "150+",
      label: "Happy Clients",
      color: "bg-green-50 text-green-600",
    },
    {
      number: "50+",
      label: "Team Members",
      color: "bg-purple-50 text-purple-600",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      color: "bg-blue-50 text-blue-600",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver nothing but the highest quality work that exceeds expectations.",
      color: "bg-cyan-100 text-cyan-600",
      details:
        "Every project undergoes rigorous quality checks. We stay updated with industry best practices and latest technologies.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge solutions for every challenge.",
      color: "bg-purple-100 text-purple-600",
      details:
        "From emerging technologies to creative strategies, we're always exploring new ways to solve problems better.",
    },
    {
      icon: Heart,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to achieving your goals.",
      color: "bg-pink-100 text-pink-600",
      details:
        "We build long-term partnerships, not just deliver projects. Your growth drives our approach to every solution.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Fast delivery without compromising quality. We respect your timeline.",
      color: "bg-yellow-100 text-yellow-600",
      details:
        "Streamlined processes and agile methodologies ensure we deliver on time while maintaining our quality standards.",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      color: "from-cyan-500 to-blue-500",
      projects: "80+",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Visual identity and branding that makes your business stand out",
      color: "from-yellow-500 to-orange-500",
      projects: "150+",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and post-production services",
      color: "from-red-500 to-pink-500",
      projects: "120+",
    },
    {
      icon: PenTool,
      title: "Sales Copywriting",
      description: "Compelling copy that converts readers into customers",
      color: "from-blue-500 to-purple-500",
      projects: "200+",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Engaging content that tells your story and drives results",
      color: "from-purple-500 to-pink-500",
      projects: "180+",
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Strategic social media management that builds communities",
      color: "from-pink-500 to-red-500",
      projects: "100+",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Started as a freelance web development service with just 2 people",
    },
    {
      year: "2019",
      title: "Team Expansion",
      description: "Grew to a team of 10 and added graphic design services",
    },
    {
      year: "2020",
      title: "Full Service Agency",
      description: "Expanded to offer complete digital marketing solutions",
    },
    {
      year: "2022",
      title: "Major Milestone",
      description: "Completed 100+ projects and opened second office",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won multiple awards for excellence in digital services",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Now serving clients across 15+ countries worldwide",
    },
  ];

  // const team = [
  //   {
  //     name: "Alex Rodriguez",
  //     role: "Founder & CEO",
  //     image: "bg-gradient-to-br from-cyan-400 to-blue-500",
  //     bio: "Full-stack developer turned entrepreneur",
  //     speciality: "Strategy & Leadership",
  //   },
  //   {
  //     name: "Sarah Chen",
  //     role: "Creative Director",
  //     image: "bg-gradient-to-br from-purple-400 to-pink-500",
  //     bio: "Award-winning designer with 10+ years experience",
  //     speciality: "Design & Branding",
  //   },
  //   {
  //     name: "Marcus Johnson",
  //     role: "Head of Development",
  //     image: "bg-gradient-to-br from-green-400 to-cyan-500",
  //     bio: "Tech lead specializing in scalable solutions",
  //     speciality: "Web & Mobile Development",
  //   },
  //   {
  //     name: "Emily Davis",
  //     role: "Content Strategist",
  //     image: "bg-gradient-to-br from-orange-400 to-red-500",
  //     bio: "Content marketing expert and storyteller",
  //     speciality: "Content & Copywriting",
  //   },
  // ];

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              We Create Digital
              <span className="block text-yellow-300">
                Experiences That Matter
              </span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              A full-service creative agency helping businesses grow through
              innovative design, development, and marketing solutions.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="container mx-auto px-4 pb-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} rounded-2xl p-6 text-center backdrop-blur-sm bg-white/10 border border-white/20`}
              >
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <p className="text-sm text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-cyan-600 font-bold text-sm uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-2">
                Turning Ideas Into Reality Since 2018
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  What started as a small freelance operation has grown into a
                  full-service digital agency. We began with a simple mission:
                  help businesses succeed online with exceptional web
                  development services.
                </p>
                <p>
                  Over the years, we've expanded our expertise to include
                  graphic design, video production, content creation, and
                  comprehensive digital marketing strategies. Today, we're proud
                  to be a trusted partner for businesses of all sizes.
                </p>
                <p>
                  Our team of talented designers, developers, writers, and
                  strategists work together to deliver solutions that don't just
                  look good—they drive real business results. We've completed
                  over 200 projects across 6 core service areas.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center"
                >
                  View Our Work
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl w-64 h-64 -z-10"></div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl w-48 h-48 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wide">
              What We Do
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Full-Service{" "}
              <span className="text-cyan-600">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to execution, we handle every aspect of your digital
              presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div
                    className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    {/* <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                      {service.projects}
                    </span> */}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              6 Years of <span className="text-cyan-600">Growth</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    } gap-8`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full -ml-2 border-4 border-white shadow-lg z-10"></div>

                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      } pl-20 md:pl-0`}
                    >
                      <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:block flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              What Drives{" "}
              <span className="text-cyan-600">Everything We Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                    activeValue === index
                      ? "ring-4 ring-cyan-200 transform scale-105"
                      : "hover:-translate-y-2"
                  }`}
                >
                  <div
                    className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm mb-4">
                    {value.description}
                  </p>
                  {activeValue === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 text-center">
                        {value.details}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wide">
              Meet The Team
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              The Minds Behind{" "}
              <span className="text-cyan-600">Your Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className={`aspect-square ${member.image} group-hover:scale-110 transition-transform duration-500`}
                  ></div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{member.bio}</p>
                  <p className="text-xs text-gray-500 font-medium">
                    {member.speciality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with exceptional digital solutions that
                drive growth, enhance brand presence, and create meaningful
                connections with their audiences. We're committed to delivering
                innovation, quality, and measurable results in everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading creative agency known for transforming
                businesses through innovative digital experiences. We envision a
                future where every brand we touch reaches its full potential
                through strategic design, development, and marketing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join 150+ businesses that trust us with their digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
