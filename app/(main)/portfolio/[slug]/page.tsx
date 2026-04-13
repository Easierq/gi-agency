import { notFound } from "next/navigation";
import ProjectGallery from "@/components/project-detail/ProjectGallery";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectDetails from "@/components/project-detail/ProjectDetails";
// import RelatedProjects from "@/components/project-detail/RelatedProjects";
import Breadcrumb from "@/components/project-detail/Breadcrumb";
import VideoPlayer from "@/components/portfolio/VideoPlayer";

const baseUrl = "https://giagency-admin.vercel.app/api/portfolio";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getProject(slug: string) {
  const res = await fetch(`${baseUrl}/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

async function getRelatedProjects(currentId: string) {
  const res = await fetch(`${baseUrl}?featured=true&limit=6`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const projects = await res.json();

  // return projects.data.filter((p: any) => p.id !== currentId);
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  // console.log(project.data);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb project={project.data} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {/* Project Gallery */}
            <ProjectGallery
              images={
                project.images?.length > 0 ? project.images : [project.image]
              }
              projectName={project.name}
              badge={project.badge}
              featured={project.featured}
            />

            {/* Video Player (if video exists) */}
            {project.videoUrl && <VideoPlayer videoUrl={project.videoUrl} />}
          </div>

          <ProjectInfo project={project.data} />
        </div>

        <ProjectDetails project={project.data} />

        {/* {relatedProjects.length > 0 && (
          <RelatedProjects
            currentProjectId={project.id}
            relatedProjects={relatedProjects}
            categorySlug={CATEGORY}
          />
        )} */}
      </div>
    </div>
  );
}
