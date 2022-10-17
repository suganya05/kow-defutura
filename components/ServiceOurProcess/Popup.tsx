import React from "react";
import styles from "./ServiceProcess.module.scss";
import Image from "next/image";
import WrittingImg from "../../public/images/writeImg.png";
import { IProvide } from ".";
const Popup: React.FC<IProvide> = ({ description, image }) => {
  return (
    <>
      <div className={styles.ProcessContentTwo}>
        <div className={styles.writeImg}>
          <Image src={image} width={476} height={318} alt="" />
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Popup;
