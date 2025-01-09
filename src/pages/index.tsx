import { motion } from 'framer-motion';
import AnimatedHeading from './components/AnimatedHeading';
import AnimatedButton from './components/AnimatedButton';
import StaggeredList from './components/StaggeredList';
import DraggableBox from './components/DraggableBox';


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
        <AnimatedButton text="Click Me" />
        <StaggeredList />
        <DraggableBox />


      </motion.p>
      
      <motion.div
  className="p-4 bg-gray-200 rounded shadow"
  whileHover={{ scale: 1.05 }}
>
  Hover Me
</motion.div>

    </div>
  );
}
