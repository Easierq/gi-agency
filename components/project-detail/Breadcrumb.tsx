// import { ChevronRight, Home } from "lucide-react";
// import Link from "next/link";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  category: string;
  categorySlug: string;
}

interface BreadcrumbProps {
  project: Project;
}

export default function Breadcrumb({ project }: BreadcrumbProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    {
      label: project.category,
      href: `/services/${project.categorySlug}`,
    },
    { label: project.name, href: "#" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full overflow-x-auto hidden-scrollbar"
    >
      <div className="flex items-center text-sm min-w-max px-1">
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center flex-shrink-0">
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors"
              >
                <Home className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-gray-900 font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
