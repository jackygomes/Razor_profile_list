import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./ProfileItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { renameProfile, selectProfile } from "../actions";

interface Proptypes {
  item: {
    name: string;
    icon: string;
    isDefault: boolean;
    isEdit: boolean;
  };
  index: number;
  active: boolean;
}

const ProfileItem: FC<Proptypes> = (props: Proptypes) => {
  const { name, icon, isEdit } = props.item;
  const { active, index } = props;
  const [profileName, setProfileName] = useState(name);
  const dispatch = useDispatch();
  const { selectedIndex } = useSelector((state) => state.profileList);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (newSelectedIndex, prevSelected) => {
    dispatch(selectProfile(newSelectedIndex, prevSelected));
  };

  useEffect(() => {
    if (isEdit) {
      if (ref.current) ref.current.focus();
    }
  }, [isEdit]);

  return (
    <div
      className={classNames({
        [styles.profile_item]: true,
        [styles[icon]]: true,
        [styles.active]: active,
      })}
      onClick={() => handleClick(index, selectedIndex)}
    >
      {name}
      <input
        ref={ref}
        className={classNames({
          [styles.profile_item]: true,
          [styles.show]: isEdit,
        })}
        defaultValue={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        maxLength={25}
        onBlur={(e) => {
          dispatch(renameProfile(selectedIndex, profileName));
        }}
      />
    </div>
  );
};

export default ProfileItem;
