import { motion } from "framer-motion";

const PulsatingBox = () => {
  return (
    <motion.div
      className="w-32 h-32 rounded-lg shadow-lg"
      style={{
        background: "linear-gradient(to right, #3b82f6, #a855f7)", // Default gradient
      }}
      animate={{
        boxShadow: [
          "0 0 30px #a855f7",
          "0 0 50px #3b82f6",
          "0 0 30px #a855f7",
        ],
        rotate: [0, 1440], // Spins continuously
      }}
      whileHover={{
        
        rotate: [0,-1440], // Stops spinning on hover
        background: "linear-gradient(45deg, #f3ec78, #af4261)",
        boxShadow: [
            "0 0 30px #f3ec78",
            "0 0 50px #af4261",
            "0 0 30px #f3ec78",
          ],
      }}
      transition={{
        boxShadow: {
          duration: 1,
          repeat: Infinity,
        },
        rotate: {
          duration: 3, // Completes one full spin every 3 seconds
          repeat: Infinity,
          ease: "linear", // Ensures smooth spinning
        },
        background: {
          duration: 0.5, // Smooth transition to the new gradient
        },
      }}
    />
  );
};

export default PulsatingBox;
