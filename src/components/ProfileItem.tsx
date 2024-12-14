import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ProfileItem.module.css";

interface Proptypes {
  item: {
    name: string;
    icon: string;
    isDefault: boolean;
  };
}

const ProfileItem: FC<Proptypes> = (props: Proptypes) => {
  const { name, icon, isDefault } = props.item;
  return (
    <div
      className={classNames({
        [styles.profile_item]: true,
        [styles[icon]]: true,
        [styles.active]: isDefault,
      })}
    >
      {name}
    </div>
  );
};

export default ProfileItem;
