import { motion } from 'framer-motion';
import AnimatedHeading from './components/AnimatedHeading';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <AnimatedHeading text="Welcome to My Portfolio" />
      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A place where creativity meets code.
      </motion.p>
    </div>
  );
}
