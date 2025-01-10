import { motion } from "framer-motion";

const BouncingBallWithTrace = () => {
  const traceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-gray-800">
      {/* The motion div for the main ball */}
      <motion.div
        animate={{
          x: [0, -50, 0, 50, 0, 0, 0, 0, 0], // Moves horizontally: left, center, right
          y: [0, 0, 0, 0, 0, -50, 0, 50, 0], // Moves vertically: up, center, down
        }}
        transition={{
          repeat: Infinity,
          duration: 4, // Total cycle time
          ease: "easeInOut",
        }}
        className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full"
      />

      {/* Trace effect: Additional balls with fading opacity */}
      {Array.from({ length: 5 }, (_, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, -50, 0, 50, 0, 0, 0, 0, 0], // Same as the main ball
            y: [0, 0, 0, 0, 0, -50, 0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: index * 0.1, // Slightly delayed for trace effect
          }}
          variants={traceVariants}
          initial="hidden"
          className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full filter blur-md"
          style={{ opacity: (1 - index * 0.2).toFixed(2) }} // Fades each trace more
        />
      ))}
    </div>
  );
};

export default BouncingBallWithTrace;
