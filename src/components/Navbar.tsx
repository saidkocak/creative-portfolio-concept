"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1, duration: 1, ease: "easeOut" },
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex items-center justify-between max-sm:px-4"
    >
      {/* Title */}
      <Link href="/">
        <h1 className="text-3xl max-md:text-2xl max-sm:text-lg text-black dark:text-white">
          <span className="font-extrabold">Tamirci</span>Architects
        </h1>
      </Link>

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.nav>
  );
};

export default Navbar; 