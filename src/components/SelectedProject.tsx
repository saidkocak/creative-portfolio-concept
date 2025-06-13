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
          className="absolute top-32 left-16 p-4 z-50 bg-[#F1F1F1]/50 dark:bg-[#2A2A2A]/50 shadow-sm max-sm:top-16 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[90vw] max-sm:max-w-sm"
        >
          {/* PROJECT IMAGE WITH OVERLAY */}
          <motion.div
            key={`${selectedProject.id}Image`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
            }}
            exit={{ opacity: 0 }}
            className="overflow-hidden relative group h-72 w-512 cursor-pointer max-sm:h-48"
          >
            <Image
              src={selectedProject.image}
              width={512}
              height={512}
              alt="Project image"
              className="w-full h-full object-cover"
            />
            
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* PROJECT NAME AND LINK OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              {/* PROJECT NAME */}
              <motion.h3
                key={`${selectedProject.id}${selectedProject.name}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-lg font-medium text-white max-sm:text-base flex-1 pr-4"
              >
                {selectedProject.name}
              </motion.h3>

              {/* SEE PROJECT LINK */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
                className="flex items-center gap-1 flex-shrink-0"
              >
                <span className="text-sm text-white underline cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
                  see the project
                </span>
                
              </motion.div>
            </div>
          </motion.div>

          {/* COMMENTED OUT PROJECT DETAILS */}
          {/* <motion.p
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
          </motion.p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelectedProject; 