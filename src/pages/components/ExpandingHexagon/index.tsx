import { motion } from "framer-motion";

const ExpandingHexagon = () => {
  return (
    <motion.div
      className="relative w-32 h-32"
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "linear-gradient(to right, #3b82f6, #a855f7)",
      }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    />
  );
};

export default ExpandingHexagon;
