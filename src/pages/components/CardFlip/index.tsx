import { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="relative w-64 h-40 bg-gray-800 rounded-lg cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute w-full h-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
        animate={{
          rotateY: flipped ? 180 : 0, // Rotate to 180 degrees if flipped
        }}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        Front
      </motion.div>
      <motion.div
        className="absolute w-full h-full bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
        animate={{
          rotateY: flipped ? 0 : -180, // Rotate back to 0 degrees if flipped
        }}
        initial={{ rotateY: -180 }}
        transition={{ duration: 0.6 }}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        Back
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
