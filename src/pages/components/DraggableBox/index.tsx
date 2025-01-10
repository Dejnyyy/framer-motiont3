import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -100, left: -175, right: 175, bottom: 100 }}
      className="w-32 h-32 bg-gradient-to-r z-40 from-blue-500 via-purple-500 to-pink-500 rounded"
      whileDrag={{ scale: 1.2 }}
      
    ><p className="text-center justify-center mt-12">drag me</p></motion.div>
  );
};

export default DraggableBox;
