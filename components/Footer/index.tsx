import React from "react";
import styles from "../Footer/Footer.module.scss";
import Image from "next/image";
import Mail from "../../public/icons/mail.svg";
import Call from "../../public/icons/call.svg";
import DeIndustries from "../../public/logo/de.svg";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className="mx">
        <div className={styles.footer_container_one}>
          <div className={styles.footer_one}>
            <div className={styles.footer_logo}>
              <Image
                src={"/logo/defutura.png"}
                alt=""
                width={135}
                height={65}
                layout={"fixed"}
                objectFit="contain"
              />
              <p>
                #1, VOC Street, Mahalaxmi Nagar East Tambaram, Selaiyur Post, Tamil Nadu - 600 059,
                South India
              </p>
            </div>
            <div className={styles.footer_info}>
              <h5>For sales & support related to audits,</h5>
              <div className={styles.mail_container}>
                <Image src={Mail} alt="" width={30} height={20} layout="fixed" />
                <p>connect@dewallstreet.capital</p>
              </div>
              <div className={styles.vector_container}>
                <Image src={Call} alt="" width={30} height={20} layout="fixed" />
                <p>+91 44356 72539</p>
              </div>
            </div>
          </div>
          <div className={styles.footer_two}>
            <div className={styles.access_container}>
              <h4>ACCESS.</h4>
              <div className={styles.access_info}>
                <a href="">Home</a>
                <a href="">Plans</a>
                <a href="">Services</a>
              </div>
            </div>
            <div className={styles.kit_container}>
              <h4>KITS.</h4>
              <div className={styles.kit_info}>
                <a href="">Media kit</a>
                <a href="">Investor kit</a>
                <a href="">Partner Kit</a>
              </div>
            </div>
            <div className={styles.relation_container}>
              <h4>RELATIONS.</h4>
              <div className={styles.relation_info}>
                <a href="">Clients</a>
                <a href="">Investors</a>
                <a href="">Partners</a>
              </div>
            </div>
          </div>
          <div className={styles.footer_three}>
            <div className={styles.disclaimer}>
              <p>
                <span>DISCLAIMER</span> : * The legally in corporated firm “Dewallstreet Private
                Limited”, under Mnistry of Corporate Affairs (MCA), Registrar of Companies (RoC),
                Chennai, South India which specializes in consultancy services for legal,finances
                and technological security and compliance aspects is the only legal entity, as of
                now which is under multiple pivotizations into separate legal entitities of the
                conglomerate, de industries and the parent trust as zero community foundation.
              </p>
            </div>
            <div className={styles.terms}>
              <h6>Terms</h6>
              <h6>Policies</h6>
              <h6>Connect</h6>
            </div>
          </div>
        </div>
        <div className={styles.footer_container_two}>
          <p>Copyright © 2022 De Industries ® All rights reserved</p>
        </div>
        <div className={styles.footer_container_three}>
          <p>Powered by</p>
          <div className={styles.end}>
            <Image src={DeIndustries} width={30} height={20} layout={"fixed"} />
            <p>INDUSTRIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
