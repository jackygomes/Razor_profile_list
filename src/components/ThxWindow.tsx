import React, { FC } from "react";
import styles from "./ThxWindow.module.css";
import { useSelector } from "react-redux";

const ThxWindow: FC = () => {
  const { selectedIndex, profiles } = useSelector((state) => state.profileList);

  return (
    <div className={styles.thx_window}>
      <div className={`${styles.sub_title} flex`}>
        <h1 id="eqTitle" className="eq-title">
          {profiles[selectedIndex].name}
        </h1>
      </div>
    </div>
  );
};

export default ThxWindow;
