import { motion } from "framer-motion";

const WavyText = () => {
  const letters = "Wavyyy".split("");

  return (
    <motion.div className="flex justify-center text-2xl font-bold text-white">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{
            y: -10, // Moves up
            color: "#f59e0b", // Changes color
          }}
          transition={{
            duration: 0.1,
             // Adds a wave effect
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WavyText;
