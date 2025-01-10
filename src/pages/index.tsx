import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";
import Image from "next/image";

const particles = Array.from({ length: 15 }); // Create 15 particles

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedHeading text="Welcome to My Portfolio" />

      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A place where creativity meets code.
      </motion.p>

      {/* Sliding Projects Link with Scaling and Glow */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
        }}
        className="mt-8 px-6 py-3 border border-white text-white font-bold rounded-md shadow-md cursor-pointer transition-all"
      >
        <Link href={"/projects"} passHref>
          <motion.span
            whileHover={{
              x: 5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            Projects
          </motion.span>
        </Link>
      </motion.div>

      {/* Animated Image with Particle Effect */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.5)",
        }}
        className="absolute bottom-0 left-0 flex items-center justify-center"
      >
        <Link href={"https://dejny.eu"} target="_blank">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={"/dejny.png"}
              alt={"Dejny"}
              width={200}
              height={200}
              className="" // Circular image
            />
          </motion.div>

          {/* Rotating Halo */}
          <motion.div
            className="absolute w-[200px] h-[200px] rounded-full border-4 border-blue-500"
            animate={{
              rotate: 360, // Rotate continuously
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Heart Particles */}
          {particles.map((_, index) => (
            <motion.span
              key={index}
              className="absolute text-red-500 text-lg" // Heart styling
              initial={{
                opacity: 1,
                scale: 0.5,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [1, 0], // Fades out
                scale: [1, 0.5], // Shrinks
                x: Math.random() * 200 - 100, // Random horizontal movement
                y: Math.random() * 200 - 100, // Random vertical movement
              }}
              transition={{
                duration: 2,
                delay: index * 0.2, // Stagger particle animation
                repeat: Infinity,
              }}
            >
              ❤️ {/* Heart emoji */}
            </motion.span>
          ))}
        </Link>
      </motion.div>
    </div>
  );
}
