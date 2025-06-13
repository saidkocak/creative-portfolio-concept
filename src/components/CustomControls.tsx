import { cameraSpeed, lerp, scrollOffset } from "@/lib/utils";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type React from "react";
import { useRef, useEffect } from "react";
import type * as THREE from "three";
import { useProjectContext } from "@/context/TrackContext";
import useDimensions from "@/hooks/useDimensions";
import type { Project } from "@/lib/types";

interface CustomControlsProps {
  cameraRef: React.RefObject<THREE.OrthographicCamera>;
  itemsCount: number;
  projects: Project[];
}

const CustomControls: React.FC<CustomControlsProps> = ({
  cameraRef,
  itemsCount,
  projects,
}) => {
  const previousZRef = useRef<number | null>(null);
  const previousActiveIndexRef = useRef<number>(-1);
  const scroll = useScroll();
  const maxZ = 3;
  const minZ = 3 - 0.8 * (itemsCount - 1);
  const factor = 0.05;
  
  // Get context and screen width for mobile detection
  const { setActiveProjectIndex, setHoveredProject } = useProjectContext();
  const { width } = useDimensions();
  const isMobile = width.get() < 768;

  // Initialize the first project as hovered on mobile when component mounts
  useEffect(() => {
    if (isMobile && projects.length > 0) {
      setHoveredProject(projects[0]);
      previousActiveIndexRef.current = 0;
    }
  }, [isMobile, projects, setHoveredProject]);

  useFrame((state, delta) => {
    if (cameraRef.current) {
      scrollOffset.set(scroll.offset);

      const targetZ = lerp(maxZ, minZ, scroll.offset);
      const z = cameraRef.current.position.z;
      const newZ = lerp(z, targetZ, factor);

      cameraRef.current.position.z = newZ;

      if (previousZRef.current !== null && delta > 0) {
        const velocityZ = (newZ - previousZRef.current) / delta;
        cameraSpeed.set(velocityZ);
      }
      previousZRef.current = newZ;
      
      // Calculate active project index on mobile based on scroll position
      if (isMobile && projects.length > 0) {
        const activeIndex = Math.round(scroll.offset * (itemsCount - 1));
        const clampedIndex = Math.max(0, Math.min(itemsCount - 1, activeIndex));
        
        // Only update if the active index has changed
        if (clampedIndex !== previousActiveIndexRef.current) {
          setActiveProjectIndex(clampedIndex);
          setHoveredProject(projects[clampedIndex]);
          previousActiveIndexRef.current = clampedIndex;
        }
      }
    }

    // POUR QUE LE HOVER EFFECT MARCHE AU SCROLL
    state.events.update?.();
  });

  return null;
};

export default CustomControls;
