import { AnimatePresence, motion } from "framer-motion";
import { AppType } from "next/app";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MyApp;
