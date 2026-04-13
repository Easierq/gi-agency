import WebDevClient from "@/components/service-category/WebDevClient";

export const revalidate = 0;

const CATEGORY = "web-development";
const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}
const WebDevelopmentPage = async () => {
  const projects = await fetchProjects(CATEGORY);

  return <WebDevClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default WebDevelopmentPage;
