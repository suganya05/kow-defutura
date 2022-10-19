import React from "react";
import styles from "./Hero.module.scss";
import Button from "components/Button";
import Image from "next/image";
import MaskGroup from "../../public/images/maskGroup.png";
import { IData } from "constant/constant";

const ServiceHero: React.FC<{ hero: IData["data"]["hero"] }> = ({ hero }) => {
  return (
    <div className={styles.heroContainer}>
      <div className="mx pad">
        <div className={styles.content}>
          <div className={styles.blockChainWrapper}>
            <h1 className="text-primary-gradient">{hero.heading1}</h1>
            <h2 className="text-primary-gradient">{hero.heading2}</h2>
            <div className={styles.mediaMask}>
              <Image src={MaskGroup} alt="" />
            </div>
            <p>{hero.description}</p>
            <Button>Contact Us</Button>
          </div>
          <div className={styles.maskGroup}>
            <Image src={MaskGroup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
