import { motion } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3"];

const StaggeredList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="p-4 bg-gray-100 rounded shadow"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
