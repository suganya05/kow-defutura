import React from "react";
import styles from "./Service.module.scss";

const ServiceTrends: React.FC = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className="mx pad">
        <div className={styles.serviceHead}>
          <h1>Trends.</h1>
          <p>
            As the market is crowded and competitive to make us unique, after a
            lot of research
          </p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTrends;
