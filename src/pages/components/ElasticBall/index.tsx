import { motion } from "framer-motion";

const ElasticBall = () => {
  return (
    <motion.div
      className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
      animate={{
        y: [0, -100, 0], // Bounces up and down
        scaleX: [1, 1.2, 1], // Stretches horizontally
        scaleY: [1, 0.8, 1], // Squashes vertically
      }}
      transition={{
        duration: 1, // One bounce cycle in 1 second
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default ElasticBall;
