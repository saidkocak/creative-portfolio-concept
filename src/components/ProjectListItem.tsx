// This component creates a single 3D project item that users can see and interact with
// Think of it like a floating card or picture frame in 3D space that shows a project

import { useProjectContext } from "@/context/TrackContext";
import useDimensions from "@/hooks/useDimensions";
import type { Project } from "@/lib/types";
import { cameraSpeed } from "@/lib/utils";
import { fragmentShader, vertexShader } from "@/shaders/shader";
import { useTexture, Text } from "@react-three/drei";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";

// This defines what information this component needs to work:
// - project: all the details about one specific project (like title, image, etc.)
// - index: the position number of this project in the list (1st, 2nd, 3rd, etc.)
interface ProjectListItemProps {
  project: Project;
  index: number;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  project,
  index,
}) => {
  const router = useRouter(); // This helps navigate to different pages when clicked
  
  // ===== TRACKING WHEN USER HOVERS OVER THE PROJECT =====
  // This keeps track of whether the user's mouse is currently over this project
  // When true, the project will have special hover effects (like glowing or moving)
  const [isHover, setIsHover] = useState(false);

  // ===== MAKING IT WORK ON DIFFERENT SCREEN SIZES =====
  // This gets the current screen width so we can adjust behavior for phones vs computers
  const { width } = useDimensions();
  // On small screens (phones), we disable hover effects since there's no mouse
  const [hoverDisabled, setHoverDisabled] = useState(false);

  // ===== KEEPING TRACK OF PROJECT IMAGE SIZE =====
  // This stores the width and height of the project image so we can display it properly
  // We start with a 1:1 square, but will adjust based on the actual image
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

  // This watches for screen size changes and disables hover on small screens (phones/tablets)
  useMotionValueEvent(width, "change", (latest) => {
    if (latest < 768) {
      // 768px is roughly the cutoff between phone and desktop
      setHoverDisabled(true); // Turn off hover effects on small screens
    } else {
      setHoverDisabled(false); // Allow hover effects on larger screens
    }
  });

  // ===== DEFINING HOW THE PROJECT MOVES AND ANIMATES =====
  // These are like presets for different animation states
  const variants = {
    // Starting position - normal, no movement
    initial: { x: 0, y: 0, scale: 1 },
    // When first appearing - moves up slightly to create a floating effect
    appear: { x: 0, y: 0.5, scale: 1 },
    // When user hovers - moves right and up more, gets bigger for emphasis
    hover: { 
      x: 0.2,           // Move slightly to the right
      y: 1,             // Move up more than the normal position
      scale: 1.15       // Make it 15% bigger to draw attention
    },
  };

  // ===== CONNECTING TO THE MAIN APP'S PROJECT TRACKING =====
  // These functions let us tell the main app which project is being hovered/selected
  const { setHoveredProject, setSelectedProject, activeProjectIndex } = useProjectContext();

  // ===== MOBILE SCROLL-BASED ACTIVATION =====
  // On mobile, we use scroll position to determine which project should be "active"
  const isMobile = width.get() < 768;
  const isScrollActive = isMobile && activeProjectIndex === index;

  // ===== LOADING THE PROJECT'S IMAGE =====
  // This loads the project's image file and prepares it for 3D display
  const texture = useTexture(project.image);

  // ===== CALCULATING THE RIGHT SIZE FOR THE PROJECT IMAGE =====
  // This runs whenever the image finishes loading
  useEffect(() => {
    if (texture?.image) {
      const img = texture.image;
      const maxWidth = 1.2;  // We don't want any project to be wider than this
      const aspectRatio = img.width / img.height; // How wide vs tall the image is
      
      // Start by trying to make it the maximum width
      let finalWidth = maxWidth;
      let finalHeight = maxWidth / aspectRatio;
      
      // But if that makes it too tall, limit the height instead
      const maxHeight = 1; // Maximum height we allow
      if (finalHeight > maxHeight) {
        finalHeight = maxHeight;
        finalWidth = maxHeight * aspectRatio;
      }
      
      // Save these calculated dimensions so we can use them to create the 3D shape
      setDimensions({ width: finalWidth, height: finalHeight });
    }
  }, [texture]); // This runs again whenever the texture changes

  // ===== SETTING UP VISUAL EFFECTS FOR THE 3D PROJECT =====
  // Uniforms are like settings we can send to the graphics card to control how things look
  const uniforms = useRef({
    uTexture: { value: texture },      // The project image
    uOpacity: { value: 0 },            // How see-through it is (0 = invisible, 1 = solid)
    uCameraSpeed: { value: cameraSpeed.get() || 0 }, // How fast the camera is moving (for effects)
  });

  // ===== CREATING A SMOOTH FADE-IN EFFECT WHEN THE PROJECT FIRST APPEARS =====
  useEffect(() => {
    // Start completely invisible
    uniforms.current.uOpacity.value = 0;

    // Wait a bit (longer for projects further down the list) then fade in
    setTimeout(() => {
      const duration = 1000; // Fade in over 1 second
      const start = performance.now(); // Record when we started

      // This creates a smooth easing effect (starts slow, speeds up, then slows down)
      function easeInOutQuad(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      // This function runs many times per second to create smooth animation
      function animate(time: number) {
        const elapsed = time - start;
        const t = Math.min(elapsed / duration, 1); // Progress from 0 to 1

        const easedValue = easeInOutQuad(t);
        uniforms.current.uOpacity.value = easedValue * 0.95; // Fade to 95% opacity

        // Keep animating until we're done
        if (t < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, index * 400); // Each project starts fading in 400ms after the previous one
  }, [index]);

  // ===== UPDATING VISUAL EFFECTS EVERY FRAME =====
  // This runs 60 times per second to keep effects smooth and responsive
  useFrame(() => {
    uniforms.current.uCameraSpeed.value = cameraSpeed.get();
  });

  // ===== WHAT HAPPENS WHEN USER CLICKS THE PROJECT =====
  const handleInteraction = () => {
    // Only allow clicking if the project has faded in enough (70% or more visible)
    if (uniforms.current.uOpacity.value >= 0.7) {
      setSelectedProject(project);           // Mark this project as selected
      router.push(`/project/${project.id}`); // Navigate to the project's detail page
    }
  };

  // ===== WHAT HAPPENS WHEN USER HOVERS OVER THE PROJECT =====
  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation(); // Prevent this event from affecting other elements
    // Only show hover effects if project is visible enough and not on mobile
    if (uniforms.current.uOpacity.value >= 0.7 && !isMobile) {
      document.body.style.cursor = "pointer"; // Change mouse cursor to indicate it's clickable
      setIsHover(true);                       // Trigger hover animations
      setHoveredProject(project);             // Tell the app which project is being hovered
    }
  };

  // ===== WHAT HAPPENS WHEN USER STOPS HOVERING =====
  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!isMobile) {
      document.body.style.cursor = "auto";  // Change cursor back to normal
      setIsHover(false);                    // Stop hover animations
      setHoveredProject(null);              // Tell the app nothing is being hovered
    }
  };

  // ===== WHAT HAPPENS WHEN USER CLICKS =====
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    handleInteraction(); // Navigate to project details
  };

  return (
    <>
      {/* ===== THE MAIN 3D PROJECT THAT USERS SEE AND INTERACT WITH ===== */}
      <motion.group
        key={project.id}
        // Position in 3D space: each project is placed further back based on its index
        position={[0, 0.5, -index * 0.8]}
        variants={variants}
        initial="initial"
        // Choose animation state based on hover/scroll-active state and visibility
        animate={
          (isScrollActive) || ((isHover && !hoverDisabled) && uniforms.current.uOpacity.value >= 0.7)
            ? "hover"   // Use hover animation if conditions are met
            : "appear"  // Otherwise use the normal floating animation
        }
        // How the animations should feel (springy, smooth, etc.)
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20 },      // Horizontal movement
          y: { type: "spring", stiffness: 300, damping: 20 },      // Vertical movement  
          scale: { type: "spring", stiffness: 250, damping: 25 },  // Size changes
          default: {
            duration: 1,           // Base animation duration
            delay: index * 0.5,    // Each project animates in slightly after the previous
            type: "spring",        // Bouncy, natural feeling
            damping: 10,          // How much the spring bounces
          },
        }}
      >
        {/* ===== THE ACTUAL 3D SHAPE THAT DISPLAYS THE PROJECT IMAGE ===== */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <mesh
          onPointerMove={handlePointerEnter}  // Detect when mouse enters
          onPointerLeave={handlePointerLeave} // Detect when mouse leaves
          onClick={handleClick}               // Detect clicks
          renderOrder={isHover || isScrollActive ? 1000 : 0}   // Draw on top when hovered/active
        >
          {/* The 3D shape - a thin rectangular box sized to match the project image */}
          <boxGeometry args={[dimensions.width, dimensions.height, 0.01, 8, 8, 1]} />
          {/* The visual appearance - uses custom shaders for special effects */}
          <shaderMaterial
            transparent                    // Allow see-through effects
            vertexShader={vertexShader}   // Code that positions the 3D vertices
            fragmentShader={fragmentShader} // Code that colors each pixel
            uniforms={uniforms.current}   // Settings that control the visual effects
            side={THREE.DoubleSide}       // Make both front and back visible
          />
        </mesh>
      </motion.group>

      {/* ===== INVISIBLE HELPER SHAPE FOR BETTER MOUSE INTERACTION ===== */}
      {/* This creates a slightly larger invisible area around the project */}
      {/* It makes it easier for users to hover/click, especially on the edges */}
      <mesh
        position={[0, 0.5, -index * 0.8]}  // Same position as the main project
        onPointerEnter={handlePointerEnter} // Same hover detection
        onPointerLeave={handlePointerLeave}
      >
        {/* Slightly larger than the visible project for easier interaction */}
        <boxGeometry args={[dimensions.width + 0.1, dimensions.height + 0.1, 0.04, 4, 4, 1]} />
        {/* Completely invisible - just for interaction detection */}
        <meshBasicMaterial visible={false} />
      </mesh>
    </>
  );
};

export default ProjectListItem; 