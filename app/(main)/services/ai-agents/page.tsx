import AgentClient from "@/components/service-category/AgentClient";

export const revalidate = 0;

const cat = "ai-agent-building";
const CATEGORY = "ai-agents";
const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}
const AgentPage = async () => {
  const projects = await fetchProjects(cat);

  return <AgentClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default AgentPage;
