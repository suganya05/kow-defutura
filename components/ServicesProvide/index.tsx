import React from "react";
import styles from "./Services.module.scss";
import { DemoServicesProvide } from "./Services.Array";

const ServicesProvide: React.FC = () => {
  return (
    <div className={styles.serviceProvideContainer}>
      <div className="mx pad">
        <div className={styles.serviceProvideContent}>
          <div className={styles.servicePara}>
            <h2>Services we provide.</h2>
          </div>
          <div className={styles.marketContent}>
            {DemoServicesProvide.map((f, index) => {
              return (
                <div key={index} className={styles.market}>
                  <div className={styles.borderCircle}></div>
                  <div className={styles.metaImg}>
                    <img src={f.image} alt="" />
                  </div>
                  <h5>{f.title}</h5>
                  <p>{f.description}</p>
                  <div className={styles.marketImg}>
                    <img src={f.images} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProvide;
