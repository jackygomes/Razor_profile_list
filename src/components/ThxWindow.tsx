import React, { FC } from "react";
import styles from "./ThxWindow.module.css";

const ThxWindow: FC = () => {
  return (
    <div className={styles.thx_window}>
      <div className={`${styles.sub_title} flex`}>
        <h1 id="eqTitle" className="eq-title">
          Default
        </h1>
      </div>
    </div>
  );
};

export default ThxWindow;
