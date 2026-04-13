import MobileAppClient from "@/components/service-category/MobileAppClient";

export const revalidate = 0;

const CATEGORY = "mobile-app-development";

const baseUrl = "https://giagency-admin.vercel.app/api/services";

async function fetchProjects(category: string) {
  const res = await fetch(`${baseUrl}/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

const MobileAppDevelopmentPage = async () => {
  const projects = await fetchProjects(CATEGORY);

  return <MobileAppClient projects={projects.data} categorySlug={CATEGORY} />;
};

export default MobileAppDevelopmentPage;
