import React from "react";
import Image from "next/image";

import styles from "./Partners.module.scss";
import dewallstreetLogo from "public/images/dewallstreet.png";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className="mx pad">
        <div className={styles.partners_wrapper}>
          <h2>Our Partners</h2>
          <div className={styles.slider}>
            <div className={styles.slider_wrapper}>
              <Image src="/images/dewallstreet.png" alt="" layout="fixed" width={200} height={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
