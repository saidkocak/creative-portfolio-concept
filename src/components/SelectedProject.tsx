import { useProjectContext } from "@/context/TrackContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const SelectedProject = () => {
  const { selectedProject } = useProjectContext();

  return (
    <AnimatePresence mode="wait">
      {selectedProject && (
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          }}
          exit={{ opacity: 0 }}
          className="absolute top-32 left-16 flex items-center gap-4 p-4 z-50 bg-[#F1F1F1]/50 dark:bg-[#2A2A2A]/50 shadow-sm max-sm:top-16 max-sm:left-1/2 max-sm:-translate-x-1/2"
        >
          {/* PROJECT IMAGE */}
          <motion.div
            key={`${selectedProject.id}Image`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
            }}
            exit={{ opacity: 0 }}
            className="overflow-hidden relative group h-72 cursor-pointer"
          >
            <Image
              src={selectedProject.image}
              width={512}
              height={512}
              alt="Project image"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* PROJECT NAME AND DETAILS */}
          <div className="flex flex-col">
            <motion.h3
              key={`${selectedProject.id}${selectedProject.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-lg font-medium w-40 line-clamp-1 text-black dark:text-white"
            >
              {selectedProject.name}
            </motion.h3>

            <motion.p
              key={`${selectedProject.id}${selectedProject.type}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
              className="text-[#9C9A9A] dark:text-[#B0B0B0] leading-tight text-sm"
            >
              {selectedProject.type} • {selectedProject.location}
            </motion.p>

            <motion.p
              key={`${selectedProject.id}${selectedProject.year}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
              className="text-[#9C9A9A] dark:text-[#B0B0B0] leading-tight text-xs mt-1"
            >
              {selectedProject.year} • {selectedProject.description}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelectedProject; 