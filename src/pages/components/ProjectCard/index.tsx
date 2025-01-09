import { motion } from 'framer-motion';

const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div
      className="p-6 bg-gray-700 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
