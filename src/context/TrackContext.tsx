// ProjectContext.tsx
import type { Project } from "@/lib/types";
import type React from "react";
import { createContext, useContext, useState } from "react";

// Définissez la forme de votre contexte
interface ProjectContextType {
  hoveredProject: Project | null;
  selectedProject: Project | null;
  setHoveredProject: (project: Project | null) => void;
  setSelectedProject: (project: Project | null) => void;
}

// Créez le contexte
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Créez un fournisseur pour le contexte
export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        hoveredProject,
        selectedProject,
        setHoveredProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error(
      "useProjectContext doit être utilisé à l'intérieur d'un ProjectProvider"
    );
  }
  return context;
};
