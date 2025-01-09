import { motion } from 'framer-motion';
import AnimatedHeading from './components/AnimatedHeading';
import AnimatedButton from './components/AnimatedButton';
import StaggeredList from './components/StaggeredList';
import DraggableBox from './components/DraggableBox';
import AnimatedSpinner from './components/AnimatedSpinner';
import CardFlip from './components/CardFlip';
import BouncingAnimation from './components/BouncingAnimation';


import Link from "next/link"


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
        
        <Link href={"/projects"}>Projects</Link>

      
    </div>
  );
}
