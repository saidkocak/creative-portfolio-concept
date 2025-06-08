import { useProjectContext } from "@/context/TrackContext";
import useDimensions from "@/hooks/useDimensions";
import type { Project } from "@/lib/types";
import { cameraSpeed } from "@/lib/utils";
import { fragmentShader, vertexShader } from "@/shaders/shader";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

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
      scale: 1 // Make it bigger but not too much
    },
  };

  // ===== CONTEXT FUNCTIONS =====
  const { setHoveredProject, setSelectedProject } = useProjectContext();

  // ===== TEXTURE LOADING =====
  const texture = useTexture(project.image);

  // ===== SHADER UNIFORMS =====
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
        const t = Math.min(elapsed / duration, 0.85);

        const easedValue = easeInOutQuad(t);
        uniforms.current.uOpacity.value = easedValue;

        if (t < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, index * 75);
  }, [index]);

  // ===== HOVER ANIMATION (currently empty) =====
  useEffect(() => {
    if (isHover) {
    }
  }, [isHover]);

  useFrame(() => {
    uniforms.current.uCameraSpeed.value = cameraSpeed.get();
  });

  return (
    <>
      {/* ===== MAIN PROJECT MESH ===== */}
      <motion.mesh
        key={project.id}
        position={[0, 0.5, -index * 0.5]}
        variants={variants}
        initial="initial"
        animate={
          isHover && uniforms.current.uOpacity.value >= 0.85 && !hoverDisabled
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
        onPointerMove={(e) => {
          e.stopPropagation();
          if (uniforms.current.uOpacity.value >= 0.85) {
            document.body.style.cursor = "pointer";
            setIsHover(true);
            setHoveredProject(project);
          }
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
          setIsHover(false);
          setHoveredProject(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
        renderOrder={isHover ? 1000 : 0}
      >
        <planeGeometry args={[1, 1, 8, 8]} />
        <shaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
        />
      </motion.mesh>

      {/* ===== INVISIBLE HELPER MESH ===== */}
      <mesh
        position={[0, 0.5, -index * 0.5]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          setIsHover(true);
          setHoveredProject(project);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
          setIsHover(false);
          setHoveredProject(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
      >
        <planeGeometry args={[1, 1, 8, 8]} />
        <material visible={false} />
      </mesh>
    </>
  );
};

export default ProjectListItem; 