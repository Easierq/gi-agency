import HeroSection from "@/components/home/HeroSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import FeaturedWebDevelopment from "@/components/home/FeaturedWebDevelopment";
import FeaturedGraphicDesign from "@/components/home/FeaturedGraphicDesign";
import FeaturedAIAutomation from "@/components/home/FeaturedAIAutomation";
import FeaturedMobileApp from "@/components/home/FeaturedMobileApp";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import FeaturedAiAgent from "@/components/home/FeaturedAiAgent";
import FeaturedVibeCoding from "@/components/home/FeaturedVibeCoding";
// import PortfolioShowcase from "@/components/home/PortfolioShowcase";
// import StatsSection from "@/components/home/StatsSection";
export const revalidate = 0;

//baseurl
const baseUrl = "https://giagency-admin.vercel.app/api/services";
const portfolioUrl = "https://giagency-admin.vercel.app/api/portfolio";

async function getPortfolioData() {
  const res = await fetch(`${portfolioUrl}?featured=true&limit=5`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch apps");
  return res.json();
}

//api calls

// async function getFeaturedContentCreation() {
//   const res = await fetch(`${baseUrl}/content-creation?featured=true&limit=5`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedSalesCopywriting() {
//   const res = await fetch(`${baseUrl}/sales-copywriting?featured=true&limit=5`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedVideoEditing() {
//   const res = await fetch(`${baseUrl}/video-editing?featured=true&limit=5`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedGraphicDesign() {
//   const res = await fetch(`${baseUrl}/graphic-design?featured=true&limit=5`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedSocialMediaManagement() {
//   const res = await fetch(
//     `${baseUrl}/social-media-management?featured=true&limit=5`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedAIAutomation() {
//   const res = await fetch(`${baseUrl}/ai-automation?featured=true&limit=5`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

// async function getFeaturedMobileApp() {
//   const res = await fetch(
//     `${baseUrl}/mobile-app-development?featured=true&limit=5`,
//     {
//       cache: "no-store",
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch apps");
//   return res.json();
// }

async function getFeaturedServices(service: string) {
  const res = await fetch(`${baseUrl}/${service}?featured=true&limit=5`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function HomePage() {
  const [
    webDevData,
    graphicsData,
    aiData,
    mobileAppData,
    agentData,
    vibeData,
    portfolioData,
  ] = await Promise.all([
    getFeaturedServices("web-development"),
    getFeaturedServices("graphics-design"),
    getFeaturedServices("ai-automation"),
    getFeaturedServices("mobile-app-development"),
    getFeaturedServices("vibe-coding"),
    getFeaturedServices("ai-agent-building"),
    getPortfolioData(),
  ]);

  console.log(graphicsData, mobileAppData);

  return (
    <div className="bg-white">
      {/* Hero with search and CTA */}
      <HeroSection />

      {/* Quick overview of all service categories */}
      <ServiceCategories />
      {/* <PortfolioShowcase /> */}
      <FeaturedPortfolio data={portfolioData.data} />

      {/* Featured service sliders - one for each service */}
      <FeaturedWebDevelopment data={webDevData.data} />
      <FeaturedGraphicDesign data={graphicsData.data} />
      <FeaturedAIAutomation data={aiData.data} />
      <FeaturedAiAgent data={agentData.data} />
      <FeaturedVibeCoding data={vibeData.data} />
      <FeaturedMobileApp data={mobileAppData.data} />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
