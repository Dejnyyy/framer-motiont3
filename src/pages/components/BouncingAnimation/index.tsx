import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0], // Moves up, then down
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.6,
      }}
      className="w-12 h-12 bg-red-500 rounded-full"
    />
  );
};

export default BouncingBall;
