import { motion } from 'framer-motion';

const AnimatedHeading = ({ text }: { text: string }) => {
  const words = text.split(' ');

  return (
    <motion.h1
      className="text-4xl font-bold"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;
