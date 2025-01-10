import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import AnimatedHeading from './components/AnimatedHeading';
import AnimatedButton from './components/AnimatedButton';
import StaggeredList from './components/StaggeredList';
import DraggableBox from './components/DraggableBox';
import AnimatedSpinner from './components/AnimatedSpinner';
import CardFlip from './components/CardFlip';
import BouncingAnimation from './components/BouncingAnimation';
import WigglingText from './components/WigglingText';
import PulsatingBox from './components/PulsatingGlowingBox';
import ShapeMorph from './components/ShapeMorph';
import RippleButton from "./components/RippleButton";
import ExpandingHexagon from "./components/ExpandingHexagon";
import WavyText from "./components/WavyText";
import RotatingCube from "./components/RotatingCube";
import ElasticBall from "./components/ElasticBall";
import BlinkingLights from "./components/BlinkingLights";
export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  let inactivityTimer: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setIsMoving(true);

      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsMoving(false);
      }, 500); // Stop pulsating after 500ms of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimer);
    };
  }, []);
  const components = [
    { id: 1, component: <AnimatedHeading text="Welcome to My Portfolio" /> },
    {
      id: 2,
      component: (
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A place where creativity meets code.
        </motion.p>
      ),
    },
    { id: 3, component: <StaggeredList />},
    { id: 4, component: <DraggableBox /> },
    { id: 5, component: <AnimatedSpinner /> },
    { id: 6, component: <CardFlip /> },
    { id: 7, component: <PulsatingBox />},
    { id: 8, component: <BouncingAnimation />},
    { id: 9,component: <ShapeMorph /> },
    { id: 10,component: (
      <motion.div
        className="px-4 py-2 bg-gray-200 text-black rounded shadow"
        whileHover={{ scale: 1.5 }}
      >
        Hover Me
      </motion.div>
    ), 
    },
    { id: 11, component: <RippleButton /> },
    { id: 12, component: <AnimatedButton text="Click Me" />},
    { id: 13, component: <WigglingText text='framer motion is so cool' /> },
    { id: 14, component: <ExpandingHexagon /> },
    { id: 15, component: <WavyText /> },
    { id: 16, component: <RotatingCube /> },
    { id: 17, component: <ElasticBall /> },
    { id: 18, component: <BlinkingLights /> },
  ];

  return (
    <div 
    className="min-h-screen p-10 bg-gradient-to-bl from-blue-800 via-violet-800 to-pink-700 text-white">
       {/* Custom Cursor */}
       <motion.div
  className="fixed w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50"
  style={{
    top: `${cursorPosition.y - 12}px`, // Center the cursor vertically
    left: `${cursorPosition.x - 12}px`, // Center the cursor horizontally
  }}
  animate={{
    scale: isMoving ? 1.5 : 1, // Pulsating animation when moving
    opacity: isMoving ? 1 : 0.5, // Smooth fade-out when not moving
  }}
  transition={{
    duration: 0.5, // Smooth transition for both scale and opacity
    ease: "easeInOut", // Smooth easing function
  }}
/>
       <Link href="/" className="absolute text-blue-400">
    <motion.div 
    animate={{rotate:360}} transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}>
        Back
      </motion.div>
      </Link>
      <h1 className="text-3xl font-bold text-center mb-6">
        Interactive Components
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map(({ id, component }) => (
          <div
            key={id}
            className="p-6 bg-gray-800 rounded-lg shadow-lg flex justify-center items-center"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}
