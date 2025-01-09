import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
      className="w-32 h-32 bg-blue-500 rounded"
      whileDrag={{ scale: 1.2 }}
      
    ><p className="text-center justify-center mt-12">drag me</p></motion.div>
  );
};

export default DraggableBox;
