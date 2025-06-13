"use client";

import { ARCHITECTURE_PROJECTS } from "@/lib/types";
import { useParams } from "next/navigation";
import Image from "next/image";

interface ProjectInfo {
  label: string;
  value: string;
}

const ProjectPage = () => {
  const params = useParams();
  const project = ARCHITECTURE_PROJECTS.find((p) => p.id === params.id);

  // Add console logging for debugging
  console.log('Project ID:', params.id);
  console.log('Found project:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  const projectInfo: ProjectInfo[] = [
    { label: "Procedure", value: "Two-stage design competition for interdisciplinary team / Second stage" },
    { label: "Client", value: "Department of Finance and Economics (DFE), Republic and Canton of Ticino" },
    { label: "Architects", value: "Working community Hämmerli & Caccia Architetti Sagl, Luca Pessina Architetti SA" },
    { label: "Civil engineer", value: "Schnetzer Puskas Ingenieure AG" },
    { label: "RCVS plant designers", value: "Erisel SA" },
    { label: "Building physics", value: "IFEC ingegneria SA" },
    { label: "Fire protection", value: "Erisel SA" },
    { label: "Electrical engineering", value: "Elettroconsulenze Solcà SA" },
    { label: "Landscape architecture", value: "MOFA urban landscape studio" },
    { label: "Images", value: "Stefano Zeni" },
    { label: "Model", value: "Marchesoni models" },
  ];

  // Generate project images based on the project ID
  const projectImages = [
    `/img/arch-imgs/${project.id}.png`,
    `/img/arch-imgs/${String(Number.parseInt(project.id) + 1).padStart(3, '0')}.png`,
    `/img/arch-imgs/${String(Number.parseInt(project.id) + 2).padStart(3, '0')}.png`,
    `/img/arch-imgs/${String(Number.parseInt(project.id) + 3).padStart(3, '0')}.png`,
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-gray-200">{project.type} • {project.location} • {project.year}</p>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="col-span-3">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Info Column */}
          <div className="col-span-1">
            <div className="sticky top-8 space-y-6">
              {projectInfo.map((info) => (
                <div key={info.label} className="border-b border-gray-800 pb-4">
                  <h3 className="text-sm font-semibold uppercase text-gray-400">
                    {info.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Images Column */}
          <div className="col-span-3">
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {projectImages.map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Project image ${image.split('/').pop()?.replace('.png', '')}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty Column */}
          <div className="col-span-1" />
        </div>
      </section>
    </main>
  );
};

export default ProjectPage; 