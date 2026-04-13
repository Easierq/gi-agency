import GraphicsClient from "@/components/service-category/GraphicsClient";

export const revalidate = 0;

const CATEGORY = "graphics-design";

const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

const GraphicDesignPage = async () => {
  const projects = await fetchProjects(CATEGORY);

  return <GraphicsClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default GraphicDesignPage;
