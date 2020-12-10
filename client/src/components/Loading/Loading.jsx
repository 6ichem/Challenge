import React from "react";
import { useLoading } from "./Loading.logic";
import styles from "./Loading.module.css";

export const Loading = () => {
  const {
    models: { loadingRef },
  } = useLoading();

  return <div className={styles.loading} ref={loadingRef} id="_1337__Typed" />;
};
