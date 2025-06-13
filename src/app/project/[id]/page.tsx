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

 

  if (!project) {
    return <div>Project not found</div>;
  }

  const projectInfo: ProjectInfo[] = [
    { label: "Procedure", value: "Two-stage design competition for interdisciplinary team / Second stage" },
    { label: "Client", value: "Department of Finance and Economics (DFE), Republic and Canton of Ticino" },
    { label: "Architects", value: "Working community Hämmerli & Caccia Architetti Sagl, Luca Pessina Architetti SA" },
    { label: "Civil engineer", value: "Schnetzer Puskas Ingenieure AG" },
    { label: "RCVS plant designers", value: "Erisel SA" },
    { label: "Images", value: "Stefano Zeni" },
    { label: "Model", value: "Marchesoni models" },
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
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
      <section className="mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="col-span-3">
          
            <p className="w-4/5 text-md leading-relaxed text-gray-300">
              {project.longDescription}
            </p>
            {/* Images Column */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 gap-4">
              {project.visuals.map((image, index) => (
                <div key={`visual-${project.id}-${index}`} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={`Project visual ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
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
          

          {/* Empty Column */}
          <div className="col-span-1" />
        </div>
      </section>
    </main>
  );
};

export default ProjectPage; 