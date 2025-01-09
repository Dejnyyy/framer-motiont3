import { motion } from "framer-motion";

const RotatingCube = () => {
  return (
    <motion.div
      className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
      style={{ perspective: "1000px" }} // Add 3D perspective
      animate={{
        rotateX: [0, 360], // Rotate on X-axis
        rotateY: [0, 360], // Rotate on Y-axis
      }}
      whileHover={{
        rotateX: 0, // Stops rotating on hover
        rotateY: 0,
      }}
      transition={{
        duration: 1, // Completes one full rotation in 3 seconds
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default RotatingCube;
