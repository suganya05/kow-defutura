import React from "react";
import styles from "./ServiceWork.module.scss";
import Image from "next/image";
import Discover from "../../public/images/discover.png";
import KudoLogo from "../../public/images/kudosLogo.png";
import Download from "../../public/images/bx-download.svg";

const ServiceOurWork: React.FC = () => {
  return (
    <div className={styles.serviceOurWorkContainer}>
      <div className="mx pad">
        <div className={styles.heading}>
          <h2>Our Works.</h2>
          <p>
            As the market is crowded and competitive to make us unique, after a
            lot of research
          </p>
        </div>
        <div className={styles.serviceworkContent}>
          <div className={styles.discover}>
            <Image src={Discover} />
          </div>
          <div className={styles.kudoWrapper}>
            <div className={styles.kudoContent}>
              <div>
                <Image src={KudoLogo} />
              </div>
              <div>
                <h2>KUDOSZONE</h2>
              </div>
            </div>
            <div>
              <Download />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOurWork;
