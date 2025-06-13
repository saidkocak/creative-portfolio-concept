import useDimensions from "@/hooks/useDimensions";
import type { Project } from "@/lib/types";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  OrthographicCamera,
} from "@react-three/drei";
import { useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import type * as THREE from "three";
import CustomControls from "./CustomControls";
import ProjectListItem from "./ProjectListItem";
import { degToRad } from "three/src/math/MathUtils.js";

interface SceneProps {
  projectList: Project[];
}

const Scene: React.FC<SceneProps> = ({ projectList }) => {
  // ===== CAMERA SETUP =====
  const cameraRef = useRef<THREE.OrthographicCamera>(null);

  // Set the initial camera position in 3D space [x, y, z]
  // x: left/right, y: up/down, z: forward/back
  
  // CURRENT: Isometric view (default)
  // const [cameraX, cameraY, cameraZ] = [3, 3.75, 3];
  // const [cameraX, cameraY, cameraZ] = [3, 3.75, 3];
  const [cameraX, cameraY, cameraZ] = [3, 1.75, 1];

  // ===== RESPONSIVE DESIGN =====
  const { width } = useDimensions();
  const [innerWidth, setInnerWidth] = useState<number>(width.get());

  useMotionValueEvent(width, "change", (latest) => {
    setInnerWidth(latest);
  });

  return (
    <>
      {/* ===== PERFORMANCE OPTIMIZATIONS ===== */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* ===== CAMERA SETUP ===== */}
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        // Dynamic zoom based on screen size:
        // Mobile (< 768px): zoom 200 (closer)
        // Large screens (> 1500px): zoom 300 (further)
        // Default: zoom 275 (medium)
        zoom={innerWidth < 768 ? 200 : innerWidth > 1500 ? 300 : 350}
        near={0.0001}
        far={1000}
        position={[cameraX, cameraY, cameraZ]}
        rotation-order="YXZ"
        
          // // CURRENT: Isometric rotations
          // rotation-y={Math.PI / 3}
          // rotation-x={Math.atan(-1 / Math.sqrt(2))}
        
          // NOW WITH DEGREES!
    rotation-y={degToRad(45)} // Rotate 45 degrees around Y-axis
    rotation-x={degToRad(-10)} // Rotate -35.26 degrees around X-axis
    //rotation-z={degToRad(10)} // Rotate 10 degrees around Z-axis
/>

      {/* ===== PROJECT DISPLAY AREA ===== */}
      <group>
        {projectList.map((project, index) => {
          return (
            <ProjectListItem
              key={project.id}
              project={project}
              index={index}
            />
          );
        })}
      </group>

      {/* ===== CAMERA CONTROLS ===== */}
      <CustomControls
        cameraRef={cameraRef}
        itemsCount={projectList.length}
        projects={projectList}
      />
    </>
  );
};

export default Scene;
