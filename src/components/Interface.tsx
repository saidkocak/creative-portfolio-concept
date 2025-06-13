import { motion } from "framer-motion";
import Image from "next/image";
import HoveredProject from "./HoveredProject";
import Indicators from "./Indicators";
import SelectedProject from "./SelectedProject";
import ThemeToggle from "./ThemeToggle";

interface InterfaceProps {
  itemsCount: number;
}

const Interface: React.FC<InterfaceProps> = ({ itemsCount }) => {
  return (
    <>
      {/* TITLE */}
      <a href="/">
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: 0.8, duration: 1, ease: "easeOut" },
          }}
          className="absolute flex items-center gap-4 max-sm:gap-2 top-16 left-16 z-50 max-sm:top-5 max-sm:left-1/2 max-sm:-translate-x-1/2"
        >
        
          <h1 className="text-3xl max-md:text-2xl max-sm:text-lg text-black dark:text-white">
            <span className="font-extrabold">Tamirci</span>Architects
          </h1>
        </motion.div>
      </a>

      {/* THEME TOGGLE */}
      <ThemeToggle />

      {/* SELECTED PROJECT */}
      {/* <SelectedProject /> */}

      {/* HOVERED PROJECT */}
      <HoveredProject />

      {/* INDICATORS */}
      <Indicators itemsCount={itemsCount} />

     
    </>
  );
};

export default Interface;
