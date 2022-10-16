import React, { useState } from "react";
import styles from "./Service.module.scss";
import Image from "next/image";
import { DemoServiceTrends } from "./ServiceTrends.Array";
import Button from "../Button";

const ServiceTrends: React.FC = () => {
  const [toggle, setToggle] = useState(DemoServiceTrends[0]);
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
        <div className={styles.trendswrapper}>
          {DemoServiceTrends.map((f, i) => {
            return (
              <>
                <div
                  key={i}
                  className={
                    toggle === f ? "trendsContent active" : "trendsContent"
                  }
                  onClick={() => setToggle(f)}
                >
                  <p>{f.title}</p>
                  <div className="PastImg">
                    <Image src={f.image} layout="fill" />
                    <div className="dashPara">
                      <div className="Dash">
                        <h2>{f.name}</h2>
                      </div>
                      <div className="Dash">
                        <Button>Visit</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceTrends;
