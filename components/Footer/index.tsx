import React from "react";
import styles from "./Footer.module.scss";
import Defutura from "public/logo/defutura.svg";
import Mail from "public/icons/mail.svg";
import Call from "public/icons/call.svg";
import DeIndustries from "public/logo/poweredByLogo.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className="mx">
        <div className={styles.footer}>
          <div className={styles.gridInfo}>
            <div className={styles.firstContent}>
              <div>
                <Image src={Defutura} width={100} height={100} />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar East Tambaram, Selaiyur Post,
                  Tamil Nadu - 600 059, South India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
