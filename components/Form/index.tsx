import React from "react";
import styles from "./Form.module.scss";
import User from "../../public/icons/user.svg";
import Mail from "../../public/icons/mail.svg";
import Home from "../../public/icons/home.svg";
import India from "../../public/icons/india.svg";
import Phone from "../../public/icons/phone.svg";
import Button from "components/Button";

function Form() {
  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.formContent}>
          <p>Name</p>
          <div className={styles.formName}>
            <div className={styles.firstName}>
              <User />
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.firstName}>
              <User />
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          <div className={styles.mailContent}>
            <p>Mail</p>

            <div className={styles.mail}>
              <Mail />
              <input type="mail" placeholder="ibrahimsyed716@gmail.com" />
            </div>
          </div>

          <div className={styles.mailContent}>
            <p>Company (Optional)</p>

            <div className={styles.mail}>
              <Home />
              <input type="text" placeholder="Dewallstreet Pvt Ltd." />
            </div>
          </div>

          <div className={styles.countryContent}>
            <div className={styles.selectOptionContent}>
              <p>Country</p>

              <div className={styles.selectOption}>
                <India />
                <select>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option>
                </select>
              </div>
            </div>
            <div className={styles.phoneContent}>
              <p>Phone</p>
              <div className={styles.phone}>
                <Phone />
                <input type="number" placeholder="+91 12345 67890" />
              </div>
            </div>
          </div>
          <div className={styles.messageContent}>
            <p>Message</p>
            <textarea placeholder="Message"></textarea>
          </div>
          <div className={styles.checkboxContent}>
            <div>
              <input type="checkbox" />
            </div>
            <div className={styles.accept}>
              <p>Accept</p>
            </div>
          </div>
          <div className={styles.btn}>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
