import React from "react";
import styles from "./Hero.module.scss";
import Button from "components/Button";
import Image from "next/image";
import MaskGroup from "../../public/images/maskGroup.png";

const ServiceHero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className="mx pad">
        <div className={styles.content}>
          <div className={styles.blockChainWrapper}>
            <h1 className="text-primary-gradient">BLOCKCHAIN</h1>
            <h2 className="text-primary-gradient">SERVICES</h2>
            <div className={styles.mediaMask}>
              <Image src={MaskGroup} />
            </div>
            <p>When you embrace change, you can make a world of difference</p>
            <Button>Contact Us</Button>
          </div>
          <div className={styles.maskGroup}>
            <Image src={MaskGroup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
