import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Header.module.scss";
import Logo from "public/logo/defutura-logo.svg";

const Sidebar: React.FC<{ sidebar: boolean; handleClose: () => void; navLinks: JSX.Element }> = ({
  sidebar,
  handleClose,
  navLinks,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {sidebar && (
        <motion.div
          className={styles.sidebar_backdrop}
          onClick={handleClose}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            className={styles.sidebar}
            onClick={(e) => e.stopPropagation()}
            animate={{ left: 0, transitionDelay: "-200ms" }}
            exit={{ left: -300 }}
            initial={{ left: -300 }}
          >
            <div className={styles.logo}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className={styles.sidebar_controls}>{navLinks}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
