import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <motion.div
      animate={{
        x: [0, 30, 0, -30, 0], // Moves right, center, left, center
        y: [0, -30, 0, 30, 0], // Moves up, center, down, center
      }
    }
      transition={{
        repeat: Infinity,
        duration: 2, // Complete one bounce cycle in 2 seconds
        ease: "easeInOut", // Smooth bouncing effect
      }}
      className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full"
    />
  );
};

export default BouncingBall;
