import { motion } from "framer-motion";

const PulsatingBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
      animate={{
        boxShadow: [
          "0 0 30px rgba(59, 130, 246, 0.5)",
          "0 0 50px rgba(168, 85, 247, 0.7)",
          "0 0 30px rgba(59, 130, 246, 0.5)",
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    />
  );
};

export default PulsatingBox;
