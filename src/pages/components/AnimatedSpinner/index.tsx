import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <motion.div
      className="relative w-12 h-12 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
      <div className="absolute inset-[2px] bg-gray-800 rounded-full"></div>
      <div className="absolute inset-[6px] border-t-4 border-transparent rounded-full"></div>
    </motion.div>
  );
};

export default Spinner;
