import VibeClient from "@/components/service-category/VibeClient";

export const revalidate = 0;

const CATEGORY = "vibe-coding";
const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}
const VibePage = async () => {
  const projects = await fetchProjects(CATEGORY);

  return <VibeClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default VibePage;
