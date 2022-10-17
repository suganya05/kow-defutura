import React from "react";
import styles from "../Footer/Footer.module.scss";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="mx">
        <div className={styles.footerWrapper}>
          <div className={styles.footerContainerOne}>
            <div className={styles.footerOne}>
              <div className={styles.footerLogo}>
                <Image
                  src={"/logo/defutura.svg"}
                  alt=""
                  width={135}
                  height={65}
                  layout={"fixed"}
                  objectFit="contain"
                />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar East Tambaram, Selaiyur Post,
                  Tamil Nadu - 600 059, South India
                </p>
              </div>
              <div className={styles.footerInfo}>
                <h5>For sales & support related to audits,</h5>
                <div className={styles.mailContainer}>
                  <Image
                    src={"/icons/mail.svg"}
                    alt=""
                    width={30}
                    height={20}
                    layout="fixed"
                  />
                  <p>connect@dewallstreet.capital</p>
                </div>
                <div className={styles.vectorContainer}>
                  <Image
                    src={"/icons/call.svg"}
                    alt=""
                    width={30}
                    height={20}
                    layout="fixed"
                  />
                  <p>+91 44356 72539</p>
                </div>
              </div>
            </div>
            <div className={styles.footerTwo}>
              <div className={styles.accessContainer}>
                <h4>ACCESS.</h4>
                <div className={styles.accessInfo}>
                  <a href="">Home</a>
                  <a href="">Plans</a>
                  <a href="">Services</a>
                </div>
              </div>
              <div className={styles.kitContainer}>
                <h4>KITS.</h4>
                <div className={styles.kitInfo}>
                  <a href="">Media kit</a>
                  <a href="">Investor kit</a>
                  <a href="">Partner Kit</a>
                </div>
              </div>
              <div className={styles.relationContainer}>
                <h4>RELATIONS.</h4>
                <div className={styles.relationInfo}>
                  <a href="">Clients</a>
                  <a href="">Investors</a>
                  <a href="">Partners</a>
                </div>
              </div>
            </div>
            <div className={styles.footerThree}>
              <div className={styles.disclaimer}>
                <p>
                  <span>DISCLAIMER :</span> * The legally in corporated firm
                  “Dewallstreet Private Limited”, under Mnistry of Corporate
                  Affairs (MCA), Registrar of Companies (RoC), Chennai, South
                  India which specializes in consultancy services for
                  legal,finances and technological security and compliance
                  aspects is the only legal entity, as of now which is under
                  multiple pivotizations into separate legal entitities of the
                  conglomerate, de industries and the parent trust as zero
                  community foundation.
                </p>
              </div>
              <div className={styles.terms}>
                <h6>Terms</h6>
                <h6>Policies</h6>
                <h6>Connect</h6>
              </div>
            </div>
          </div>
          <div className={styles.footerContainerTwo}>
            <p>Copyright © 2022 De Industries ® All rights reserved</p>
          </div>
        </div>
        <div className={styles.footerContainerThree}>
          <p>Powered by</p>
          <div className={styles.end}>
            <Image
              src={"/logo/de.svg"}
              width={100}
              height={30}
              layout={"fixed"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
