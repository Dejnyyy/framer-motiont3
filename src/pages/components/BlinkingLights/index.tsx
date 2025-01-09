import { motion } from "framer-motion";

const BlinkingLights = () => {
  const dots = [0, 1, 2]; // Array for three dots

  return (
    <div className="flex justify-center space-x-4">
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="w-4 h-4 bg-red-500 rounded-full"
          animate={{
            opacity: [0, 1, 0], // Blinks on and off
          }}
          transition={{
            duration: 0.6, // Each blink lasts 0.6 seconds
            repeat: Infinity,
            delay: dot * 0.2, // Stagger the blinking effect
          }}
        />
      ))}
    </div>
  );
};

export default BlinkingLights;
