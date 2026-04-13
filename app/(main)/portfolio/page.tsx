import { PortfolioCient } from "@/components/portfolio/PortfolioCient";

const ApiUrl = "https://giagency-admin.vercel.app/api/portfolio";

async function fetchProjects() {
  const res = await fetch(`${ApiUrl}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

async function PortfolioPage() {
  const projects = await fetchProjects();
  console.log(projects);

  return <PortfolioCient projects={projects.data} />;
}

export default PortfolioPage;
