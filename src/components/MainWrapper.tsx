import React, { FC } from "react";
import styles from "./MainWrapper.module.css";

import ThxDrawer from "./ThxDrawer";
import ThxWindow from "./ThxWindow";
import DeleteAlert from "./DeleteAlert";

const MainWrapper: FC = () => {
  return (
    <div className={styles.main_container}>
      <div className={`${styles.thx_wrapper} flex`}>
        <ThxDrawer />
        <ThxWindow />
        <DeleteAlert />
      </div>
    </div>
  );
};

export default MainWrapper;
