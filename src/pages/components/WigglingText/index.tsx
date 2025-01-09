import { motion } from "framer-motion";

const WigglingText = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="text-xl font-bold text-gray-200"
      whileHover={{
        rotate: [0, 5, -5, 5, -5, 0],
        scale: 1.5,
      }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
};

export default WigglingText;
