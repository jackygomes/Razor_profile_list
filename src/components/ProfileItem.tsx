import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ProfileItem.module.css";
import { useDispatch } from "react-redux";
import { selectProfile } from "../actions";

interface Proptypes {
  item: {
    name: string;
    icon: string;
    isDefault: boolean;
  };
  index: number;
  active: boolean;
}

const ProfileItem: FC<Proptypes> = (props: Proptypes) => {
  const { name, icon } = props.item;
  const { active, index } = props;

  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(selectProfile(index));
  };

  return (
    <div
      className={classNames({
        [styles.profile_item]: true,
        [styles[icon]]: true,
        [styles.active]: active,
      })}
      onClick={() => handleClick(index)}
    >
      {name}
    </div>
  );
};

export default ProfileItem;
