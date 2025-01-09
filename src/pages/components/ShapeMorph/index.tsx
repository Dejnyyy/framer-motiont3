import { motion } from "framer-motion";
import { useState } from "react";

const ShapeMorph = () => {
  const [isCircle, setIsCircle] = useState(false);

  return (
    <div className="flex items-center justify-center  bg-gray-800">
      <motion.div
        onClick={() => setIsCircle(!isCircle)}
        className="flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          width: isCircle ? 100 : 150,
          height: isCircle ? 100 : 150,
          borderRadius: isCircle ? "50%" : "10px",
        }}
        animate={{
          borderRadius: isCircle ? "50%" : "10px",
          width: isCircle ? 100 : 150,
          height: isCircle ? 100 : 150,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.span
          animate={{
            scale: isCircle ? 1.2 : 1,
            rotate: isCircle ? 45 : 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-white font-bold"
        >
          {isCircle ? "Circle" : "Box"}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ShapeMorph;
