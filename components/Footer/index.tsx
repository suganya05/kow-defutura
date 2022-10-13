import React from "react";

import styles from "./Footer.module.scss";
import Defutura from "public/logo/defutura.svg";
import Mail from "public/icons/mail.svg";
import Call from "public/icons/call.svg";
import DeIndustries from "public/logo/poweredByLogo.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className="mx pad">
          <div className={styles.footerFirst}>
            <div className={styles.footerBorder}>
              <div>
                <Defutura />
                <div className={styles.footerPara}>
                  <p>
                    #1, VOC Street, Mahalaxmi Nagar East Tambaram, Selaiyur Post, TamilNadu - 600
                    059, South India
                  </p>
                </div>
              </div>
            </div>

            <div className="contact">
              <h5>For sales & support related to audits,</h5>
              <div className="Icon">
                <Mail />
                <a href="/">connect@dewallstreet.capital</a>
              </div>
              <div className="Icons">
                <Call />
                <a href="/">+914435672539</a>
              </div>
            </div>
          </div>

          <div className={styles.footerSecond}>
            <div>
              <h5>ACCESS.</h5>
              <div className="home">
                <a href="/">Home</a>
                <a href="/">Plans</a>
                <a href="/">Services</a>
              </div>
            </div>
            <div>
              <h5>KITS.</h5>
              <div className="home">
                <a href="/">Media kit</a>
                <a href="/">Investor kit</a>
                <a href="/">Partner kit</a>
              </div>
            </div>
            <div>
              <h5>RELATIONS.</h5>
              <div className="home">
                <a href="/">Clients</a>
                <a href="/">Investors</a>
                <a href="/">Partners</a>
              </div>
            </div>
          </div>

          <div className={styles.footerThird}>
            <div>
              <p>
                <span>DISCLAIMER</span> : * The legally in corporated firm “Dewallstreet Private
                Limited”, under Mnistry of Corporate Affairs (MCA), Registrar of Companies (RoC),
                Chennai, South India which specializes in consultancy services for legal,finances
                and technological security and compliance aspects is the only legal entity, as of
                now which is under multiple pivotizations into separate legal entitities of the
                conglomerate, de industries and the parent trust as zero community foundation.
              </p>
            </div>
            <div className={styles.connect}>
              <a href="/">Terms</a>
              <a href="/">Policies</a>
              <a href="/">Connect</a>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>Copyright © 2022 De Industries ® All rights reserved</p>
        </div>
        <div className={styles.footerEnd}>
          <p>Powered by</p>
          <DeIndustries />
        </div>
      </div>
    </div>
  );
};

export default Footer;
