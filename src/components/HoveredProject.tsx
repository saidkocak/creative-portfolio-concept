import { useProjectContext } from "@/context/TrackContext";
import { AnimatePresence, motion } from "framer-motion";

const HoveredProject = () => {
  // CONTEXT PROJECTS
  const { hoveredProject } = useProjectContext();

  return (
    <AnimatePresence mode="sync">
      {hoveredProject && (
        <div
          key={hoveredProject.id}
          className="absolute bottom-28 right-16 flex flex-col items-end z-50 max-sm:hidden"
        >
          <motion.h3
            key={hoveredProject.id + hoveredProject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl font-bold mb-1 max-md:text-xl"
          >
            {hoveredProject.name}
          </motion.h3>
          <motion.p
            key={hoveredProject.id + hoveredProject.type}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-[#9C9A9A] text-lg max-md:text-base mb-2"
          >
            {`${hoveredProject.type} • ${hoveredProject.location} • ${hoveredProject.year}`}
          </motion.p>
          <motion.p
            key={hoveredProject.id + hoveredProject.description}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="text-[#7A7A7A] text-sm max-w-xs text-right"
          >
            {hoveredProject.description}
          </motion.p>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HoveredProject; 