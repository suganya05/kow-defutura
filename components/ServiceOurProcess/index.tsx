import React, { useState } from "react";
import styles from "./ServiceProcess.module.scss";
import { BlockchainServicesProcess } from "./ServiceProcess.Array";
import Popup from "./Popup";

export interface IProvide {
  title: string;
  image: string;
  description: string;
  number: string;
}

const ServicesOurProcess: React.FC = () => {
  const [popup, setpopup] = useState<IProvide>(BlockchainServicesProcess[0]);

  return (
    <div className={styles.servicesProcessContainer}>
      <div className="mx pad">
        <div className={styles.servicesContent}>
          <h2>Our Process.</h2>
          <p>
            As the market is crowded and competitive to make us unique, after a
            lot of research
          </p>
        </div>
        <div className={styles.gridInfo}>
          <div className={styles.processContent}>
            {BlockchainServicesProcess.map((f, i) => {
              return (
                <div
                  key={i}
                  className={popup === f ? "process active" : "process"}
                  onClick={() => setpopup(f)}
                >
                  <div className="borderContent">
                    <div>
                      <h1>{f.number}</h1>
                    </div>
                  </div>
                  <div>
                    <h5>{f.title}</h5>
                    {/* <p>{f.description}</p> */}
                  </div>
                </div>
              );
            })}
          </div>

          {popup && <Popup {...popup} />}
        </div>
      </div>
    </div>
  );
};

export default ServicesOurProcess;
