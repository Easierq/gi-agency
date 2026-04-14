"use client";
import { useState, useRef } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Code,
  Palette,
  Sparkles,
  Smartphone,
  Zap,
  Bot,
  DollarSign,
  Clock,
  MessageCircle,
  Mail,
  Phone,
  Briefcase,
  Users,
} from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "web-dev", name: "Web Development", icon: Code },
    { id: "design", name: "Graphic Design", icon: Palette },
    { id: "ai-automation", name: "AI Automation", icon: Sparkles },
    { id: "mobile", name: "Mobile App Dev", icon: Smartphone },
    { id: "vibe-coding", name: "Vibe Coding", icon: Zap },
    { id: "ai-agents", name: "AI Agent Building", icon: Bot },
    { id: "pricing", name: "Pricing & Payment", icon: DollarSign },
    { id: "process", name: "Process", icon: Clock },
  ];

  const faqs = [
    // ── Web Development ──────────────────────────────────────
    {
      category: "web-dev",
      question: "What technologies do you use for web development?",
      answer:
        "We build primarily with Next.js, TypeScript, Tailwind CSS, and Supabase or PostgreSQL on the backend. For admin systems and dashboards we use ShadCN UI, Prisma, and Zod. Every stack decision is made based on your project's scale and requirements.",
    },
    {
      category: "web-dev",
      question: "How long does it take to build a web application?",
      answer:
        "A standard marketing site or landing page takes 1–2 weeks. A full web application — with authentication, dashboards, and a database — typically takes 4–8 weeks depending on complexity. We provide a detailed timeline before we start.",
    },
    {
      category: "web-dev",
      question: "Do you build admin panels and CMS systems?",
      answer:
        "Yes. We regularly build custom admin dashboards, content management systems, and kiosk interfaces. These include features like role-based access, data tables, form builders, and analytics — all tailored to your workflow.",
    },
    {
      category: "web-dev",
      question: "Will my web app be mobile-responsive?",
      answer:
        "Always. We build mobile-first by default. Every interface is tested across screen sizes and devices to ensure a seamless experience whether your users are on desktop, tablet, or phone.",
    },

    // ── Graphic Design ───────────────────────────────────────
    {
      category: "design",
      question: "What graphic design services do you offer?",
      answer:
        "We cover the full design spectrum — logo and brand identity, UI/UX design, social media graphics, pitch decks, print materials, product photography editing, and game UI kits. Every project is custom and on-brand.",
    },
    {
      category: "design",
      question: "How many design concepts will I receive?",
      answer:
        "For brand identity and logo projects we deliver 3 initial concepts. For UI design and other projects we start with 2 directions. You'll go through revision rounds until you're completely satisfied with the result.",
    },
    {
      category: "design",
      question: "What file formats will I receive?",
      answer:
        "You'll get all source files — Figma, AI, or PSD — plus export-ready formats like PNG, JPG, SVG, and PDF. Print projects include print-ready files with correct color profiles and bleed settings.",
    },
    {
      category: "design",
      question: "Can you design within my existing brand guidelines?",
      answer:
        "Absolutely. If you have a brand style guide we'll work within it precisely. If you don't have one yet, we can build a full brand identity system from scratch as part of the project.",
    },

    // ── AI Automation ────────────────────────────────────────
    {
      category: "ai-automation",
      question: "What kinds of workflows can you automate with AI?",
      answer:
        "We automate a wide range — customer support, lead qualification, invoice processing, email marketing, content generation, social media scheduling, recruitment screening, and competitor price monitoring. If it's repetitive, we can automate it.",
    },
    {
      category: "ai-automation",
      question: "What tools and platforms do you use for automation?",
      answer:
        "We build with n8n, Zapier, Make, and custom Python pipelines depending on your needs. On the AI side we use GPT-4, Claude, LangChain, and OpenAI APIs. We recommend the best stack for your use case and budget.",
    },
    {
      category: "ai-automation",
      question: "Which platforms can your automations integrate with?",
      answer:
        "We integrate with virtually any platform that has an API — Slack, Gmail, HubSpot, Notion, Airtable, WhatsApp, Mailchimp, QuickBooks, Google Sheets, WordPress, WooCommerce, and many more.",
    },
    {
      category: "ai-automation",
      question: "How do you measure the success of an automation?",
      answer:
        "We define success metrics upfront — time saved, ticket reduction, response rate, error rate, etc. You'll receive performance reports and we'll iterate on the automation to continuously improve its output.",
    },

    // ── Mobile App Development ───────────────────────────────
    {
      category: "mobile",
      question: "Do you build for iOS, Android, or both?",
      answer:
        "Both. We build cross-platform apps using React Native and Flutter, so your app works on iOS and Android from a single codebase. For projects requiring native-specific features, we can build platform-specific solutions.",
    },
    {
      category: "mobile",
      question:
        "Can you build apps with real-time features like tracking or chat?",
      answer:
        "Yes. We build real-time features using Socket.io, Firebase, and WebRTC. This covers live location tracking, in-app chat, push notifications, live order updates, and video consultations.",
    },
    {
      category: "mobile",
      question: "Do you handle app store submission?",
      answer:
        "Yes. We handle the full submission process for both the Apple App Store and Google Play Store, including screenshots, metadata, compliance checks, and responding to review feedback.",
    },
    {
      category: "mobile",
      question: "Can you integrate payment systems into a mobile app?",
      answer:
        "Absolutely. We integrate Paystack, Stripe, Flutterwave, and other payment gateways — including in-app purchases, subscriptions, and wallet systems — depending on your market and use case.",
    },

    // ── Vibe Coding ──────────────────────────────────────────
    {
      category: "vibe-coding",
      question: "What exactly is Vibe Coding?",
      answer:
        "Vibe Coding is AI-assisted rapid development — using tools like Cursor, v0, Bolt.new, and Claude to build production-ready applications significantly faster than traditional development. You get the same quality in a fraction of the time.",
    },
    {
      category: "vibe-coding",
      question: "How fast can you ship a project using Vibe Coding?",
      answer:
        "A landing page can be live in hours. An MVP with authentication, a database, and a dashboard can be shipped in 1–3 days. Full e-commerce stores or SaaS platforms in under a week. Speed depends on scope, not on cutting corners.",
    },
    {
      category: "vibe-coding",
      question: "Is the code quality production-ready?",
      answer:
        "Yes. Every project goes through a quality review — the code is clean, typed (TypeScript), and maintainable. We don't ship AI-generated spaghetti. You get readable, well-structured code you or any developer can build on.",
    },
    {
      category: "vibe-coding",
      question: "What can I build with Vibe Coding?",
      answer:
        "Anything from landing pages and portfolios to SaaS dashboards, CRM tools, job boards, chat interfaces, and e-commerce stores. If it's a web application, we can build it fast.",
    },

    // ── AI Agent Building ────────────────────────────────────
    {
      category: "ai-agents",
      question: "What is an AI agent and how is it different from a chatbot?",
      answer:
        "A chatbot responds to questions. An AI agent takes actions — it can browse the web, run queries, send emails, create documents, and complete multi-step tasks autonomously. It's the difference between answering and doing.",
    },
    {
      category: "ai-agents",
      question: "What frameworks do you use to build AI agents?",
      answer:
        "We build with LangChain, LangGraph, CrewAI, and AutoGen depending on the complexity and use case. For backend infrastructure we use Python with FastAPI, Redis for task queuing, and PostgreSQL or Supabase for data.",
    },
    {
      category: "ai-agents",
      question: "What AI models do your agents run on?",
      answer:
        "We use GPT-4, Claude 3.5 Sonnet, Gemini Pro, and Whisper depending on the task. For document processing we also use GPT-4 Vision and Tesseract OCR. We recommend the right model based on accuracy, cost, and speed requirements.",
    },
    {
      category: "ai-agents",
      question: "Can agents integrate with our existing tools and systems?",
      answer:
        "Yes. Agents can connect to Slack, Gmail, Notion, GitHub, Jira, HubSpot, databases, internal APIs, and more. If it has an API or webhook, the agent can interact with it.",
    },

    // ── Pricing ──────────────────────────────────────────────
    {
      category: "pricing",
      question: "How much do your services cost?",
      answer:
        "Pricing depends on scope and complexity. Web applications start from $1,500, graphic design projects from $300, AI automation builds from $800, mobile apps from $3,000, Vibe Coding MVPs from $500, and AI agent builds from $1,200. Contact us for a custom quote.",
    },
    {
      category: "pricing",
      question: "Do you offer package deals or discounts?",
      answer:
        "Yes. We offer bundled packages when you combine multiple services — for example, a web app plus branding, or an AI automation stack plus an agent. Long-term retainer agreements also come with discounted rates.",
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, Paystack, Flutterwave, and PayPal. For international clients we also accept Wise. Larger projects require a 50% deposit upfront with the balance on delivery.",
    },
    {
      category: "pricing",
      question: "Do you offer payment plans?",
      answer:
        "Yes, for projects above $2,000 we can set up milestone-based payment plans tied to delivery stages. This makes larger investments easier to manage without delaying the project.",
    },

    // ── Process ──────────────────────────────────────────────
    {
      category: "process",
      question: "What does your project process look like?",
      answer:
        "We follow a clear process: Discovery call → Proposal & contract → Design/build → Review & revisions → Final delivery → Post-launch support. You'll have a point of contact and regular updates at every stage.",
    },
    {
      category: "process",
      question: "How involved do I need to be during the project?",
      answer:
        "We handle the heavy lifting. We need your input at the start (goals, brand, requirements), during key review checkpoints, and for final approval. Outside of that, we keep you updated without demanding your time.",
    },
    {
      category: "process",
      question: "What do you need from me to get started?",
      answer:
        "A brief on your goals and target audience, any existing brand assets, and access to relevant platforms or APIs. We'll send a structured onboarding questionnaire to guide you through exactly what we need.",
    },
    {
      category: "process",
      question: "Can you work with tight deadlines?",
      answer:
        "Yes — especially for Vibe Coding and AI automation projects where speed is our strength. Rush delivery is available for other services too. Tell us your deadline and we'll be straight with you about whether we can hit it.",
    },
    {
      category: "process",
      question: "Do you sign NDAs?",
      answer:
        "Absolutely. We sign NDAs before discussing sensitive project details. Confidentiality is standard practice for us — your ideas, data, and business information stay private.",
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
          {/* <div className="absolute transform -rotate-45 top-20 -left-10 w-32 h-32 bg-white rounded-full"></div> */}
          <div className="absolute transform rotate-12 bottom-10 right-20 w-24 h-24 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block text-yellow-300">Questions</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, process, and
              pricing
            </p>
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
                  // onClick={() => setActiveCategory(cat.id)}
                  onClick={() => {
                    setActiveCategory(cat.id);

                    const yOffset = -220; // adjust based on your sticky height
                    const element = faqRef.current;

                    if (element) {
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
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
      <section ref={faqRef} className="py-16 pt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors"
                >
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </a>
                <a
                  href="tel:+2347065866656"
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors"
                >
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-sm text-gray-600">+234 706 586-6656</p>
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-cyan-50 text-cyan-600 p-6 rounded-xl transition-colors"
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
      <section className="py-8 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Popular Resources
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/services"
                className="group bg-white p-4 rounded-xl text-center border border-cyan-500 hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Palette className="w-7 h-7 mx-auto mb-2 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                <p className="font-semibold text-cyan-600 text-sm group-hover:text-white transition-colors duration-300">
                  Our Services
                </p>
              </a>

              <a
                href="/portfolio"
                className="group bg-white p-4 rounded-xl text-center border border-cyan-500 hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Briefcase className="w-7 h-7 mx-auto mb-2 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                <p className="font-semibold text-cyan-600 text-sm group-hover:text-white transition-colors duration-300">
                  Portfolio
                </p>
              </a>

              <a
                href="/about"
                className="group bg-white p-4 rounded-xl text-center border border-cyan-500 hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Users className="w-7 h-7 mx-auto mb-2 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                <p className="font-semibold text-cyan-600 text-sm group-hover:text-white transition-colors duration-300">
                  About Us
                </p>
              </a>

              <a
                href="/contact"
                className="group bg-white p-4 rounded-xl text-center border border-cyan-500 hover:bg-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Phone className="w-7 h-7 mx-auto mb-2 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                <p className="font-semibold text-cyan-600 text-sm group-hover:text-white transition-colors duration-300">
                  Contact
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
