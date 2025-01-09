import Link from "next/link";
import { motion } from 'framer-motion';
import AnimatedHeading from './components/AnimatedHeading';
import AnimatedButton from './components/AnimatedButton';
import StaggeredList from './components/StaggeredList';
import DraggableBox from './components/DraggableBox';
import AnimatedSpinner from './components/AnimatedSpinner';
import CardFlip from './components/CardFlip';
import BouncingAnimation from './components/BouncingAnimation';
import WigglingText from './components/WigglingText';
import PulsatingBox from './components/PulsatingGlowingBox';
import ShapeMorph from './components/ShapeMorph';

export default function Home() {
  const components = [
    { id: 1, component: <AnimatedHeading text="Welcome to My Portfolio" /> },
    {
      id: 2,
      component: (
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A place where creativity meets code.
        </motion.p>
      ),
    },
    { id: 3, component: <AnimatedButton text="Click Me" /> },
    { id: 4, component: <DraggableBox /> },
    { id: 5, component: <AnimatedSpinner /> },
    { id: 6, component: <CardFlip /> },
    { id: 7, component: <BouncingAnimation /> },
    { id: 8, component: <StaggeredList /> },
    {
      id: 9,
      component: (
        <motion.div
          className="p-4 bg-gray-200 text-black rounded shadow"
          whileHover={{ scale: 1.5 }}
        >
          Hover Me
        </motion.div>
      ),
    },
    { id: 10, component: <ShapeMorph /> },
    { id: 11, component: <WigglingText text='framer motion is so cool' /> },
    { id: 12, component: <PulsatingBox /> },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <Link href="/" className="text-blue-400">
        Back
      </Link>
      <h1 className="text-3xl font-bold text-center mb-6">
        Interactive Components
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map(({ id, component }) => (
          <div
            key={id}
            className="p-6 bg-gray-800 rounded-lg shadow-lg flex justify-center items-center"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}
