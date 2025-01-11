import Link from "next/link";
import { useState, useEffect ,useRef} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
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


// Define types for firework particles
type Firework = {
  x: number;
  y: number;
  id: number;
};

const particlesArray = Array.from({ length: 15 }); // For fireworks and hearts

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const [fireworks, setFireworks] = useState<Firework[]>([]);


  const [showImage, setShowImage] = useState(false); // State to toggle between ball and image
  const { scrollY, scrollYProgress } = useScroll(); // Hook for scroll position and progress

  // Transform scrollYProgress to x and y values dynamically
  const x = useTransform(scrollYProgress, [0, 0.2,0.3, 0.4, 0.5, 0.7,0.8, 0.9], [0, -200,-200,-1200, -1200, -700,-700, -400]);
  const y = useTransform(scrollY, (value) => value / 3);

  useEffect(() => {
    
    // Toggle the image based on progress
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setShowImage(progress > 0.8);
    });

    return () => {
      // Clean up the subscription
      unsubscribe();
    };
  }, [scrollYProgress]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newFirework = { x, y, id: Date.now() };

    setFireworks((prev) => [...prev, newFirework]);

    // Remove the firework after animation
    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
    }, 1000); // Match animation duration
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setIsMoving(true);

      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      inactivityTimer.current = setTimeout(() => {
        setIsMoving(false);
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, []);
  const components: Array<{ id: number; component: JSX.Element }>= [
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
    onClick={handleClick}
    className="min-h-screen p-10 bg-gradient-to-bl from-blue-800 via-violet-800 to-pink-700 text-white">
       {/* Custom Cursor */}
       <motion.div
          className="fixed w-4 h-4 bg-yellow-500 rounded-full pointer-events-none z-50"
          style={{
            top: `${cursorPosition.y - 8}px`, // Center the cursor vertically
            left: `${cursorPosition.x - 8}px`, // Center the cursor horizontally
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
    whileHover={{
      rotate: [0, 5, -5, 5, -5, 0],
      scale: 2.5,
    }}
    transition={{ duration: 0.5 }}>
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
    {/* Scrolling Section */}
    <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Explore More Features</h2>
        {/* Conditional Rendering for Ball or Image */}
        {!showImage ? (
  <motion.div
    className="fixed w-10 h-10 bg-gradient-to-tr from-pink-600 via-purple-500 to-blue-600 rounded-full"
    style={{
      top: "20px", // Ensure consistent top positioning
      right: "12px",
      x: x, // Dynamically bind x value
      y: y, // Dynamically bind y value
    }}
    animate={{rotate:360}}
    transition={{
      type: "spring",
      stiffness: 50,
      repeat: Infinity,
      duration: 1,
      delay: 0,
      damping: 10,
    }}
  />
) : (
  <motion.img
    src="/dejny.png"
    alt="Dynamic Image"
    className="fixed w-20 h-20 top-4 right-12 rounded-full"
    style={{
      x: x, // Dynamically bind x value
      y: y, // Dynamically bind y value
    }}
    animate={{rotate:-360}}
    transition={{
      type: "spring",
      stiffness: 50,
      repeat: Infinity,
      duration: 2,
      delay: 0,
      damping: 12,
    }}
   
  />
)}


        {[...Array<number>(5)].map((_, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-700 rounded-lg shadow-lg mb-6 text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold"> {index + 1}</h3>
            <p className="mt-2">This is just a showcase of scroll animation.</p>
          </motion.div>
        ))}
        <div className="h-screen"></div>
      </div>
        {/* Render Fireworks */}
        {fireworks.map((fw) => (
        <motion.div
          key={fw.id}
          className="absolute"
          style={{
            top: fw.y-3,
            left: fw.x-3,
          }}
          >
         {particlesArray.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 rounded-full"
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                backgroundColor: "#ff00ff", // Start with purple
              }}
              animate={{
                opacity: [1, 1],
                scale: [1, 0.5],
                x:
                  Math.cos((index / particlesArray.length) * 2 * Math.PI) * 100,
                y:
                  Math.sin((index / particlesArray.length) * 2 * Math.PI) * 100,
                backgroundColor: ["#ff00ff", "#FFC0CB", "#ffff00"], // Purple to cyan to yellow
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
