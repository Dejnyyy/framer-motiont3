import { motion } from "framer-motion";
import { useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

const RippleButton = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]); // Explicitly define the type

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get button dimensions
    const x = e.clientX - rect.left; // Calculate X position of the click
    const y = e.clientY - rect.top; // Calculate Y position of the click

    const newRipple = { id: Date.now(), x, y }; // Create new ripple
    setRipples((prev) => [...prev, newRipple]); // Add new ripple to the state

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600); // Match animation duration
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.2 }} // Scale button on hover
      transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth hover effect
      className="relative w-32 h-12 bg-blue-500 text-white font-bold flex items-center justify-center rounded-md overflow-hidden cursor-pointer"
    >
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white rounded-full pointer-events-none"
          style={{
            top: ripple.y - 10, // Center ripple vertically
            left: ripple.x - 10, // Center ripple horizontally
            width: 20,
            height: 20,
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.6, // Match ripple duration
            ease: "easeOut",
          }}
        />
      ))}
      <span>Click Me</span>
    </motion.div>
  );
};

export default RippleButton;
