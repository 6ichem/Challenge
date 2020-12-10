import React from "react";
import { useGridItem } from "./GridItem.logic";
import styles from "./GridItem.module.css";

export const GridItem = (props) => {
  const {
    models: { dollars, face, formattedDate, id, size },
  } = useGridItem(props);

  return (
    <div className={styles.item}>
      <div className={styles.faceContainer}>
        <span className={styles.face} style={{ fontSize: size }}>
          {face}
        </span>
      </div>

      <p>id: {id}</p>
      <p>price: {dollars}</p>
      <p>date: {formattedDate}</p>
    </div>
  );
};
