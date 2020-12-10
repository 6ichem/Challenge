import React from "react";
import styles from "./Ad.module.css";

export const Ad = ({ src }) => {
  return (
    <img src={src} alt="sponsorship" className={`${styles.sponsorImage}`} />
  );
};
