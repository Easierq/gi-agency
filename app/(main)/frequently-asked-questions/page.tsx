"use client";
import { useState } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Code,
  Palette,
  Video,
  PenTool,
  FileText,
  Share2,
  DollarSign,
  Clock,
  Users,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "web-dev", name: "Web Development", icon: Code },
    { id: "design", name: "Graphic Design", icon: Palette },
    { id: "video", name: "Video Editing", icon: Video },
    { id: "copy", name: "Copywriting", icon: PenTool },
    { id: "content", name: "Content", icon: FileText },
    { id: "social", name: "Social Media", icon: Share2 },
    { id: "pricing", name: "Pricing & Payment", icon: DollarSign },
    { id: "process", name: "Process", icon: Clock },
  ];

  const faqs = [
    {
      category: "web-dev",
      question: "What technologies do you use for web development?",
      answer:
        "We primarily use modern tech stacks including Next.js, React, TypeScript, Tailwind CSS, Node.js, and various databases like PostgreSQL and MongoDB. We choose technologies based on your project requirements to ensure optimal performance and scalability.",
    },
    {
      category: "web-dev",
      question: "How long does it take to build a website?",
      answer:
        "Timeline varies based on complexity. A basic website takes 2-4 weeks, while a complex web application can take 2-3 months. We provide a detailed timeline during the project kickoff and keep you updated throughout the development process.",
    },
    {
      category: "web-dev",
      question: "Do you provide website maintenance and support?",
      answer:
        "Yes! We offer ongoing maintenance packages that include updates, security patches, backups, and technical support. We can also provide training for your team to manage content independently.",
    },
    {
      category: "web-dev",
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are built with a mobile-first approach and are fully responsive across all devices. We test on various screen sizes to ensure perfect functionality and user experience.",
    },
    {
      category: "design",
      question: "What graphic design services do you offer?",
      answer:
        "We offer comprehensive design services including logo design, brand identity, business cards, brochures, social media graphics, packaging design, infographics, and more. Each project is custom-tailored to your brand.",
    },
    {
      category: "design",
      question: "How many design concepts will I receive?",
      answer:
        "For logo design, we typically provide 3 initial concepts. For other projects, we start with 2-3 concepts. You'll have opportunities for revisions to refine your chosen direction until you're completely satisfied.",
    },
    {
      category: "design",
      question: "What file formats will I receive?",
      answer:
        "You'll receive all source files (AI, PSD, or Figma) plus ready-to-use formats like PNG, JPG, SVG, and PDF. For print projects, we provide print-ready files with appropriate color profiles and specifications.",
    },
    {
      category: "design",
      question: "Can you match my existing brand guidelines?",
      answer:
        "Yes! We can work within your existing brand guidelines or help you create new ones. If you have a brand style guide, we'll ensure all designs are consistent with your established visual identity.",
    },
    {
      category: "video",
      question: "What types of videos do you produce?",
      answer:
        "We produce promotional videos, social media content, product demos, corporate videos, testimonial videos, event coverage, explainer videos, and more. We handle everything from filming to final editing.",
    },
    {
      category: "video",
      question: "Do you provide video shooting services or just editing?",
      answer:
        "We offer both! We can handle complete video production from concept to delivery, or we can edit footage you've already captured. Our team includes videographers, editors, and motion graphics specialists.",
    },
    {
      category: "video",
      question: "How many revisions are included?",
      answer:
        "Most packages include 2 rounds of revisions. We work closely with you during the editing process to ensure the final product matches your vision. Additional revisions can be accommodated if needed.",
    },
    {
      category: "video",
      question: "What's the turnaround time for video projects?",
      answer:
        "For editing-only projects, typically 5-10 business days. Full production projects take 3-4 weeks depending on complexity. Rush delivery is available for an additional fee.",
    },
    {
      category: "copy",
      question: "What copywriting services do you provide?",
      answer:
        "We write website copy, landing pages, email campaigns, sales letters, product descriptions, ad copy, blog posts, and more. All copy is SEO-optimized and conversion-focused.",
    },
    {
      category: "copy",
      question: "Do you conduct research for copywriting projects?",
      answer:
        "Yes! We research your industry, competitors, and target audience to create copy that resonates. We'll also review any existing brand materials and interview your team if needed.",
    },
    {
      category: "copy",
      question: "Will the copy be SEO-optimized?",
      answer:
        "Absolutely. We incorporate keyword research and SEO best practices into all website and blog content. We balance search optimization with compelling, natural-sounding copy that converts.",
    },
    {
      category: "content",
      question: "What's included in content creation services?",
      answer:
        "Content creation includes blog posts, articles, white papers, case studies, e-books, newsletters, and more. We handle research, writing, editing, and can include custom graphics or images.",
    },
    {
      category: "content",
      question: "How often will you publish content?",
      answer:
        "We offer flexible publishing schedules from weekly to monthly, depending on your needs and budget. We create content calendars and can manage the entire publishing process for you.",
    },
    {
      category: "content",
      question: "Do you handle content strategy?",
      answer:
        "Yes! We develop comprehensive content strategies aligned with your business goals, including topic research, keyword planning, content calendars, and performance tracking.",
    },
    {
      category: "social",
      question: "Which social media platforms do you manage?",
      answer:
        "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube. We recommend platforms based on where your target audience is most active.",
    },
    {
      category: "social",
      question: "Do you create the social media content?",
      answer:
        "Yes! Our service includes content creation (graphics, videos, captions), scheduling, community management, engagement, and monthly analytics reports. Everything is handled for you.",
    },
    {
      category: "social",
      question: "How do you measure social media success?",
      answer:
        "We track metrics like engagement rate, reach, follower growth, website traffic, and conversions. You'll receive monthly reports with insights and recommendations for continuous improvement.",
    },
    {
      category: "pricing",
      question: "How much do your services cost?",
      answer:
        "Pricing varies by project scope and complexity. Web development starts at $3,000, design projects from $500, and monthly retainers from $1,500. Contact us for a custom quote tailored to your needs.",
    },
    {
      category: "pricing",
      question: "Do you offer package deals or discounts?",
      answer:
        "Yes! We offer bundled packages for multiple services and provide discounts for long-term contracts. We're happy to create a custom package that fits your budget and needs.",
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit cards, PayPal, and other major payment methods. For larger projects, we typically require a 50% deposit upfront with the balance due upon completion.",
    },
    {
      category: "pricing",
      question: "Do you offer payment plans?",
      answer:
        "Yes, for projects over $5,000, we can arrange milestone-based payment plans. This allows you to spread payments over the project timeline, making larger investments more manageable.",
    },
    {
      category: "process",
      question: "What's your project process like?",
      answer:
        "We follow a structured process: Discovery call → Proposal & contract → Design/development → Revisions → Final delivery → Support. You'll have a dedicated project manager and regular updates throughout.",
    },
    {
      category: "process",
      question: "How involved will I need to be?",
      answer:
        "We handle the heavy lifting, but your input is crucial at key milestones. Expect initial meetings to discuss goals, feedback sessions during development, and final approval. We make it as easy as possible.",
    },
    {
      category: "process",
      question: "What do you need from me to get started?",
      answer:
        "We'll need information about your business, goals, target audience, brand assets (if available), and any specific requirements. We'll guide you through what's needed during our initial consultation.",
    },
    {
      category: "process",
      question: "Can you work with tight deadlines?",
      answer:
        "We can accommodate rush projects when possible, though this may incur additional fees. Contact us with your timeline and we'll let you know if we can meet your deadline without compromising quality.",
    },
    {
      category: "process",
      question: "Do you sign NDAs?",
      answer:
        "Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project. We take data security and privacy very seriously.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            {/* <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              ❓ Help Center
            </span> */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block text-yellow-300">Questions</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, process, and
              pricing
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 md:py-8 bg-white border-b border-gray-200 sticky top-20 md:top-32 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-3 pb-2 hidden-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all flex-shrink-0 ${
                    activeCategory === cat.id
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-cyan-600">
                  {filteredFAQs.length}
                </span>{" "}
                question{filteredFAQs.length !== 1 ? "s" : ""}
                {activeCategory !== "all" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-semibold">
                      {categories.find((c) => c.id === activeCategory)?.name}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-xs text-cyan-600 font-semibold">
                        {categories.find((c) => c.id === faq.category)?.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                        openFAQ === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you
                with any questions about our services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <a
                  href="/contact"
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors group"
                >
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </a>

                <a
                  href="tel:+2347065866656"
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors group"
                >
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-sm text-gray-600">+234 706 586-6656</p>
                </a>

                <a
                  href="/contact"
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors group"
                >
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Live Chat</h3>
                  <p className="text-sm text-gray-600">Chat with our team</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Popular Resources
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/services"
                className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">🎨</div>
                <p className="font-semibold text-gray-800 text-sm">
                  Our Services
                </p>
              </a>
              <a
                href="/portfolio"
                className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">💼</div>
                <p className="font-semibold text-gray-800 text-sm">Portfolio</p>
              </a>
              <a
                href="/about"
                className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">👥</div>
                <p className="font-semibold text-gray-800 text-sm">About Us</p>
              </a>
              <a
                href="/contact"
                className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">📞</div>
                <p className="font-semibold text-gray-800 text-sm">Contact</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
