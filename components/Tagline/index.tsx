import React from "react";
import styles from "styles/Home.module.scss";

const Tagline = () => {
  return (
    <div className={styles.tagline}>
      <div className="mx pad">
        <div className={styles.tagline_wrapper}>
          <div>
            <h3>Make a change for</h3>
            <p className="text-primary-gradient">BETTER FUTURE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
