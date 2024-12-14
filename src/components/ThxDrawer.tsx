import React, { FC } from "react";
import styles from "./ThxDrawer.module.css";
import ProfileItem from "./ProfileItem";
import ToolBar from "./ToolBar";

const ThxDrawer: FC = () => {
  const defaultProfiles = [
    {
      name: "Default",
      icon: "default",
      isDefault: false,
    },
    {
      name: "Game",
      icon: "game",
      isDefault: true,
    },
    {
      name: "Movie",
      icon: "movie",
      isDefault: false,
    },
    {
      name: "Music",
      icon: "music",
      isDefault: false,
    },
  ];

  return (
    <div className={styles.thx_drawer}>
      <div className={styles.main_title}>Profile List</div>
      <div className={`${styles.drawer_select} flex`}>
        <div className="Profile_List_Wrap">
          {defaultProfiles.map((item, index) => {
            return <ProfileItem item={item} />;
          })}
        </div>
        <ToolBar />
      </div>
    </div>
  );
};

export default ThxDrawer;
