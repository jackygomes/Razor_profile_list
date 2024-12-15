import React, { FC, useEffect } from "react";
import styles from "./ThxDrawer.module.css";
import ProfileItem from "./ProfileItem";
import ToolBar from "./ToolBar";
import { useSelector } from "react-redux";

const ThxDrawer: FC = () => {
  const { profiles, selectedIndex } = useSelector((state) => state.profileList);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  return (
    <div className={styles.thx_drawer}>
      <div className={styles.main_title}>Profile List</div>
      <div className={`${styles.drawer_select} flex`}>
        <div className={styles.profile_list_wrap} key={profiles}>
          {profiles.map((item, index) => {
            return (
              <ProfileItem
                item={item}
                active={index === selectedIndex}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <ToolBar />
      </div>
    </div>
  );
};

export default ThxDrawer;
