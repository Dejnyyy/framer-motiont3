import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";
import Image from "next/image";

// Define types for firework particles
type Firework = {
  x: number;
  y: number;
  id: number;
};

const particlesArray = Array.from({ length: 15 }); // For fireworks and hearts

export default function Home() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-blue-800 via-violet-800 to-pink-700 text-white relative overflow-hidden"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50"
        style={{
          top: `${cursorPosition.y - 12}px`, // Center the cursor vertically
          left: `${cursorPosition.x - 12}px`, // Center the cursor horizontally
        }}
        animate={{
          scale: [1, 1.5, 1], // Pulsating animation
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Heading */}
      <AnimatedHeading text="Welcome to My Portfolio" />

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A place where creativity meets code.
      </motion.p>

      {/* Sliding Projects Link */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="mt-8 px-6 py-3 border border-white text-white font-bold rounded-md shadow-md cursor-pointer transition-all"
      >
        <Link href={"/projects"} passHref>
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }} // Slide animation for the text
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {isHovered ? "to projects ->" : "Projects"}
          </motion.span>
        </Link>
      </motion.div>

      {/* Image with Heart Particles */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{
          scale: 1.1,
        }}
        className="absolute bottom-0 left-0 flex items-center justify-center"
      >
        <Link href={"https://dejny.eu"} target="_blank">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={"/dejny.png"}
              alt={"Dejny"}
              width={200}
              height={200}
              className="w-48 h-64 md:w-2/3 md:h-2/3"
            />
          </motion.div>

          {/* Heart Particles */}
          {particlesArray.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-5 h-5 text-red-500"
              initial={{
                opacity: 0,
                x: 100,
                y: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [1, 0],
                scale: [0.5, 1],
                x: Math.random() * 200 - 100,
                y: Math.random() * -200 - 100,
              }}
              transition={{
                duration: 2.5,
                delay: Math.random() * 1.5,
                repeat: Infinity,
              }}
            >&#10084;</motion.div>
          ))}
        </Link>
      </motion.div>

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
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [1, 0],
                scale: [1, 0.5],
                x: Math.cos((index / particlesArray.length) * 2 * Math.PI) * 100,
                y: Math.sin((index / particlesArray.length) * 2 * Math.PI) * 100,
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
