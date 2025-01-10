import { AnimatePresence, motion } from "framer-motion";
import type { AppType } from "next/app";
import type { NextRouter } from "next/router";
import type { NextComponentType } from "next"; // Import NextComponentType

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps,
  router,
}: {
  Component: NextComponentType;
  pageProps: Record<string, unknown>; // Replace any with Record<string, unknown>
  router: NextRouter;
}) => {
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
