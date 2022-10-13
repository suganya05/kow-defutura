import React from "react";
import Link from "next/link";

import styles from "./Hero.module.scss";
import Button from "components/Button";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className="mx pad">
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_wrapper_content}>
            <h1>When you embrace change, you can make a world of difference</h1>
            <p className="mt-16">When you embrace change, you can make a world of difference</p>
            <div className="mt-32">
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
