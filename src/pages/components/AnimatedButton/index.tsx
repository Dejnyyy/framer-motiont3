import { motion } from "framer-motion";

const AnimatedButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "pink" }}
      whileTap={{ scale: 0.9 }}
      className="px-4 py-2 rounded bg-blue-500 text-white font-bold"
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
