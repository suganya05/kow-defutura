import React from "react";
import styles from "./ServicesCase.module.scss";
import { DemoServicesCase } from "./ServicesCase.Array";
import Image from "next/image";

const ServiceCaseStudy: React.FC = () => {
  return (
    <div className={styles.serviceCaseContainer}>
      <div className="mx pad">
        <div className={styles.serviceCaseContent}>
          <h2>Case Study.</h2>
          <p>
            As the market is crowded and competitive to make us unique, after a
            lot of research
          </p>
        </div>
        <div className={styles.cardsServices}>
          {DemoServicesCase.map((f, i) => {
            return (
              <div key={i} className={styles.cards}>
                <div className={styles.fileImg}>
                  <Image src={f.image} layout="fill" />
                </div>
                <div>
                  <h4>{f.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCaseStudy;
