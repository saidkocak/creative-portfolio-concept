# Claude Sonnet Prompt: Create a Reusable 3D Portfolio Image Showcase Component

## Context
Create a reusable React component for displaying a 3D interactive portfolio image showcase using React Three Fiber. This component should render a list of portfolio items (images, projects, artworks) as floating 3D objects in an isometric perspective with smooth camera controls, responsive design, and automatic center-focused hover states.

## Requirements

### Core Functionality
1. **3D Scene Setup**: Create an orthographic camera with isometric view (45° rotation on Y-axis, looking down at an angle)
2. **Portfolio Display**: Render each portfolio item as a 3D object positioned in a line extending back into the distance
3. **Center-Focused Interaction**: Automatically highlight/hover the portfolio item in the center of the viewport as user scrolls
4. **Responsive Design**: Adjust camera zoom based on screen size (mobile: 200, large screens: 300, default: 275)
5. **Performance Optimization**: Include adaptive DPR and event handling for smooth performance
6. **Camera Controls**: Integrate smooth scrolling controls that move the camera through the portfolio

### Technical Specifications

#### Dependencies to Use
```typescript
// React Three Fiber ecosystem
import { AdaptiveDpr, AdaptiveEvents, OrthographicCamera, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Animation and motion
import { useMotionValueEvent } from "framer-motion";

// React hooks
import { useRef, useState, useEffect } from "react";

// Three.js
import * as THREE from "three";
```

#### Component Interface
```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
  link?: string;
  // Add other portfolio properties as needed
}

interface SceneProps {
  portfolioItems: PortfolioItem[];
  // Optional customization props
  cameraPosition?: [number, number, number];
  zoomLevels?: {
    mobile: number;
    desktop: number;
    large: number;
  };
  alphaMapTexturePath?: string;
  itemSpacing?: number; // Distance between items (default: 0.5)
  centerThreshold?: number; // How close to center to trigger hover (default: 0.5)
  onCenterItemChange?: (item: PortfolioItem | null, index: number) => void;
}
```

#### Camera Configuration
- **Position**: [3, 3.75, 3] (x: right, y: up, z: forward)
- **Rotation Order**: "YXZ"
- **Y Rotation**: Math.PI / 4 (45 degrees)
- **X Rotation**: Math.atan(-1 / Math.sqrt(2)) (isometric angle)
- **Near/Far Clipping**: 2 to 10 units

#### Responsive Breakpoints
- Mobile (< 768px): Zoom 200
- Large screens (> 1500px): Zoom 300
- Default: Zoom 275

### Component Structure

#### 1. State Management
- Camera reference using useRef
- Window dimensions tracking with custom hook
- Responsive width state management
- Current center item index tracking
- Scroll position monitoring

#### 2. Center-Focused Logic
- Calculate which portfolio item is closest to the center of the viewport
- Automatically trigger hover state for the center item
- Smooth transitions between center items as user scrolls
- Optional callback when center item changes

#### 3. Texture Loading
- Load alpha map texture for visual effects
- Path: "/textures/alphaMap.webp" (make configurable)
- Handle portfolio item image loading

#### 4. Performance Components
- AdaptiveDpr with pixelated option
- AdaptiveEvents for optimized interactions

#### 5. Portfolio Rendering
- Map through portfolioItems array
- Pass item data, index, shared alpha texture, and center state to PortfolioItem component
- Use item.id as React key
- Calculate center proximity for each item

#### 6. Camera Controls
- Custom controls component for smooth scrolling
- Pass camera reference and portfolio count
- Handle scroll-to-center logic

### Code Structure Template
```typescript
const Scene: React.FC<SceneProps> = ({ 
  portfolioItems, 
  cameraPosition = [3, 3.75, 3],
  zoomLevels = { mobile: 200, desktop: 275, large: 300 },
  alphaMapTexturePath = "/textures/alphaMap.webp",
  itemSpacing = 0.5,
  centerThreshold = 0.5,
  onCenterItemChange
}) => {
  // Camera setup with useRef
  // Responsive design with dimension tracking
  // Texture loading
  // Center item calculation logic
  // Scroll position tracking
  
  // Calculate center item based on scroll position
  const calculateCenterItem = (scrollOffset: number) => {
    const centerIndex = Math.round(scrollOffset * (portfolioItems.length - 1));
    return Math.max(0, Math.min(centerIndex, portfolioItems.length - 1));
  };

  // Return JSX with:
  //   - Performance optimizations
  //   - Orthographic camera with responsive zoom
  //   - Group containing mapped PortfolioItem components with center state
  //   - CustomControls component
};
```

### Center-Focused Hover System
```typescript
// Each portfolio item should receive:
interface PortfolioItemProps {
  item: PortfolioItem;
  index: number;
  alphaMapTexture: THREE.Texture;
  isCenter: boolean; // Whether this item is in the center
  distanceFromCenter: number; // 0 = center, 1+ = further away
}

// Visual states based on center proximity:
// - isCenter: Full hover effect (scale, glow, enhanced visibility)
// - distanceFromCenter < 1: Partial hover effect
// - distanceFromCenter >= 1: Normal state
```

### Additional Features to Include
1. **Smooth Transitions**: Animate between center items with easing
2. **Keyboard Navigation**: Arrow keys to navigate between portfolio items
3. **Auto-scroll to Center**: Method to programmatically scroll to specific item
4. **Loading States**: Show fallback while images load
5. **Error Handling**: Handle missing images gracefully
6. **Accessibility**: Screen reader support and focus management
7. **TypeScript**: Full type safety with proper interfaces
8. **Documentation**: JSDoc comments explaining each prop and method

### Expected Child Components
- `PortfolioItem`: Renders individual portfolio item as 3D mesh with center-aware states
- `CustomControls`: Handles camera movement, scrolling, and center calculation
- `useDimensions`: Custom hook for responsive design

### Performance Considerations
- Use React.memo for expensive re-renders
- Implement proper cleanup for event listeners
- Optimize texture loading and sharing
- Consider virtualization for large portfolio lists
- Debounce center item calculations
- Preload adjacent images for smooth scrolling

### Styling and Visual Requirements
- Isometric 3D perspective
- Smooth animations and transitions between center states
- Enhanced visual feedback for center item (scale, glow, etc.)
- Clean, modern aesthetic suitable for portfolios
- Mobile-first responsive design
- Proper z-index layering
- Subtle depth-of-field effect (center sharp, edges softer)

### Center-Focused Interaction Patterns
1. **Scroll-Based**: Center item changes as user scrolls through portfolio
2. **Smooth Transitions**: Gradual state changes between items
3. **Visual Hierarchy**: Center item is most prominent, others fade based on distance
4. **Callback Integration**: Notify parent component when center item changes
5. **Snap-to-Center**: Optional smooth scrolling to align items perfectly

## Output Requirements
Generate a complete, production-ready React component that:
1. Is fully typed with TypeScript
2. Includes comprehensive JSDoc documentation
3. Handles edge cases and error states
4. Is optimized for performance
5. Follows React best practices
6. Is easily customizable through props
7. Includes detailed inline comments explaining the 3D math and center calculation logic
8. Implements smooth center-focused hover states
9. Provides callback hooks for integration with external UI components

The component should be ready to drop into any React Three Fiber application for showcasing portfolios, image galleries, product showcases, or any visual content that benefits from 3D presentation with center-focused interaction. 