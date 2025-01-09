import { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="relative w-64 h-40 bg-gray-200 rounded-lg cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute w-full h-full bg-blue-500 rounded-lg"
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        transition={{ duration: 0.6 }}
      >
        Front
      </motion.div>
      <motion.div
        className="absolute w-full h-full bg-green-500 rounded-lg"
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
        }}
        transition={{ duration: 0.6 }}
      >
        Back
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
