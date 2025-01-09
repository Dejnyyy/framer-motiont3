import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
    />
  );
};

export default Spinner;
