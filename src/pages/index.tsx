import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <AnimatedHeading text="Welcome to My Portfolio" />

      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A place where creativity meets code.
      </motion.p>

      {/* Sliding Projects Link with Scaling and Glow */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Slide to the center
        transition={{
          duration: 1, // Slide duration
          delay: 1.5, // Delayed to load as the last element
          ease: "easeInOut", // Smooth slide
        }}
        whileHover={{
          scale: 1.1, // Slightly enlarges on hover
          boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)", // Glowing blue effect
        }}
        onHoverStart={() => setIsHovered(true)} // Detect hover
        onHoverEnd={() => setIsHovered(false)} // Detect hover end
        className="mt-8 px-6 py-3 border border-white text-white font-bold rounded-md shadow-md cursor-pointer transition-all"
        style={{
          transition: "all 0.3s ease-in-out", // Ensures smooth hover effect for non-motion properties
        }}
      >
        <Link href={"/projects"} passHref>
          <motion.span
            initial={{ opacity: 1, x: 0 }} // Default state
            animate={{
              opacity: 1,
              x: isHovered ? 5 : 0, // Slight horizontal motion on hover
            }}
            transition={{
              duration: 0.3, // Smooth transition duration
              ease: "easeInOut",
            }}
          >
            {isHovered ? "to projects ->" : "Projects"}
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
