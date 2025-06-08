import { useProjectContext } from "@/context/TrackContext";
import useDimensions from "@/hooks/useDimensions";
import type { Project } from "@/lib/types";
import { cameraSpeed } from "@/lib/utils";
import { fragmentShader, vertexShader } from "@/shaders/shader";
import { useTexture } from "@react-three/drei";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ProjectListItemProps {
  project: Project;
  index: number;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  project,
  index,
}) => {
  // ===== HOVER STATE =====
  const [isHover, setIsHover] = useState(false);

  // ===== RESPONSIVE DESIGN =====
  const { width } = useDimensions();
  const [hoverDisabled, setHoverDisabled] = useState(false);

  // ===== ASPECT RATIO STATE =====
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

  useMotionValueEvent(width, "change", (latest) => {
    if (latest < 768) {
      setHoverDisabled(true);
    } else {
      setHoverDisabled(false);
    }
  });

  // ===== ANIMATION VARIANTS =====
  const variants = {
    initial: { x: 0, y: 0, scale: 1 },
    appear: { x: 0, y: 0.5, scale: 1 },
    hover: { 
      x: 0, 
      y: 0.8, // Move up slightly more
      scale: 1.05 // Slightly larger on hover for glass effect
    },
  };

  // ===== CONTEXT FUNCTIONS =====
  const { setHoveredProject, setSelectedProject } = useProjectContext();

  // ===== TEXTURE LOADING =====
  const texture = useTexture(project.image);

  // ===== CALCULATE ASPECT RATIO =====
  useEffect(() => {
    if (texture?.image) {
      const img = texture.image;
      const maxWidth = 1.2; // Maximum width constraint
      const aspectRatio = img.width / img.height;
      
      let finalWidth = maxWidth;
      let finalHeight = maxWidth / aspectRatio;
      
      // If height becomes too large, constraint by height instead
      const maxHeight = 1; // Maximum height constraint
      if (finalHeight > maxHeight) {
        finalHeight = maxHeight;
        finalWidth = maxHeight * aspectRatio;
      }
      
      setDimensions({ width: finalWidth, height: finalHeight });
    }
  }, [texture]);

  // ===== SHADER UNIFORMS WITH GLASS EFFECT =====
  const uniforms = useRef({
    uTexture: { value: texture },
    uOpacity: { value: 0 },
    uCameraSpeed: { value: cameraSpeed.get() || 0 },
  });

  // ===== FADE-IN ANIMATION =====
  useEffect(() => {
    uniforms.current.uOpacity.value = 0;

    setTimeout(() => {
      const duration = 1000;
      const start = performance.now();

      function easeInOutQuad(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      function animate(time: number) {
        const elapsed = time - start;
        const t = Math.min(elapsed / duration, 1);

        const easedValue = easeInOutQuad(t);
        uniforms.current.uOpacity.value = easedValue * 0.95;

        if (t < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, index * 75);
  }, [index]);

  // ===== HOVER ANIMATION =====
  useEffect(() => {
    if (isHover) {
      // Simple hover effect without glass
    }
  }, [isHover]);

  useFrame(() => {
    uniforms.current.uCameraSpeed.value = cameraSpeed.get();
  });

  // ===== EVENT HANDLERS =====
  const handleInteraction = () => {
    if (uniforms.current.uOpacity.value >= 0.7) {
      setSelectedProject(project);
    }
  };

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (uniforms.current.uOpacity.value >= 0.7) {
      document.body.style.cursor = "pointer";
      setIsHover(true);
      setHoveredProject(project);
    }
  };

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    setIsHover(false);
    setHoveredProject(null);
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    handleInteraction();
  };

  return (
    <>
      {/* ===== MAIN PROJECT MESH WITH GLASS BOX EFFECT ===== */}
      <motion.mesh
        key={project.id}
        position={[0, 0.5, -index * 0.8]}
        variants={variants}
        initial="initial"
        animate={
          isHover && uniforms.current.uOpacity.value >= 0.7 && !hoverDisabled
            ? "hover"
            : "appear"
        }
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
          scale: { type: "spring", stiffness: 250, damping: 25 },
          default: {
            duration: 1,
            delay: index * 0.05,
            type: "spring",
            damping: 10,
          },
        }}
        onPointerMove={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        renderOrder={isHover ? 1000 : 0}
      >
        {/* Dynamic BoxGeometry with calculated aspect ratio */}
        <boxGeometry args={[dimensions.width, dimensions.height, 0.01, 8, 8, 1]} />
        <shaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          side={THREE.DoubleSide}
        />
      </motion.mesh>

      {/* ===== INVISIBLE HELPER MESH FOR BETTER INTERACTION ===== */}
      <mesh
        position={[0, 0.5, -index * 0.8]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <boxGeometry args={[dimensions.width + 0.1, dimensions.height + 0.1, 0.04, 4, 4, 1]} />
        <meshBasicMaterial visible={false} />
      </mesh>
    </>
  );
};

export default ProjectListItem; 