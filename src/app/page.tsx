"use client";

import Interface from "@/components/Interface";
import LoaderScreen from "@/components/LoaderScreen";
import Scene from "@/components/Scene";
import { ProjectProvider } from "@/context/TrackContext";
import { ARCHITECTURE_PROJECTS } from "@/lib/types";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  // STATES
  const [projects] = useState(ARCHITECTURE_PROJECTS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading time for projects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Increased to 2 seconds for better loading experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectProvider>
      <main className="h-dvh w-screen relative overflow-hidden">
        {/* LOADING */}
        <AnimatePresence mode="wait">
          {!isLoaded && (
            <LoaderScreen message="Loading architecture portfolio..." />
          )}
        </AnimatePresence>

        <Interface itemsCount={projects.length} />

        {/* R3F CANVAS - Only render after loading is complete */}
        {isLoaded && (
          <Canvas>
            <Suspense fallback={null}>
              <ScrollControls
                eps={0.001}
                horizontal={false}
                pages={projects.length / 2.5}
                damping={0.05}
              >
                <Scene projectList={projects} />
              </ScrollControls>
            </Suspense>
          </Canvas>
        )}
      </main>
    </ProjectProvider>
  );
}
