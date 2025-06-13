import { useEffect } from "react";
import { useProjectContext } from "@/context/TrackContext";
import { ARCHITECTURE_PROJECTS } from "@/lib/types";
import { useRouter } from "next/navigation";

const KeyboardNavigation = () => {
  const router = useRouter();
  const { selectedProject } = useProjectContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        if (selectedProject) {
          router.push(`/project/${selectedProject.id}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, router]);

  return null;
};

export default KeyboardNavigation; 