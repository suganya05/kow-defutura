import React from "react";
import Image from "next/image";
import Phone from "../public/icons/phone.svg";
import Mail from "../public/icons/mail.svg";
import Map from "../public/icons/map-pin.svg";
import Twitter from "../public/icons/twitter.svg";
import Instagram from "../public/icons/instagram.svg";
import Telegram from "../public/icons/telegram.svg";
import Discord from "../public/icons/discord.svg";
import SendingEmail from "../public/images/sendingEmails_Monochromatic.png";
import Form from "../components/Form";

import styles from "../styles/Contactus.module.scss";

function ContactUs() {
  return (
    <>
      <div className={styles.contactusContainer}>
        <div className="mx pad">
          <div className={styles.contactContent}>
            <div className={styles.quote}>
              <div className={styles.quotePara}>
                <h2>Get a quote</h2>
                <p>
                  Fill up the form our Team will get back to you within 24 hours
                </p>
              </div>

              <div className={styles.phone}>
                <div>
                  <Phone />
                </div>
                <div>
                  <p>+91 44356 72536 / +91 44356 72536</p>
                </div>
              </div>

              <div className={styles.mail}>
                <div>
                  <Mail />
                </div>
                <div>
                  <p>+91 44356 72536 / +91 44356 72536</p>
                </div>
              </div>

              <div className={styles.mail}>
                <div>
                  <Map />
                </div>
                <div>
                  <p>+91 44356 72536 / +91 44356 72536</p>
                </div>
              </div>

              <div className={styles.socialMedia}>
                <Twitter />
                <Instagram />
                <Telegram />
                <Discord />
              </div>

              <div className={styles.sendingImg}>
                <Image src={SendingEmail} alt="" />
              </div>
            </div>

            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
