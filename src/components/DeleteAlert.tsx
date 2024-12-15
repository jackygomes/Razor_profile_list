import React, { FC } from "react";
import styles from "./DeleteAlert.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../actions";

const DeleteAlert: FC = () => {
  const { deleteModal, selectedIndex, profiles } = useSelector(
    (state) => state.profileList
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteProfile(selectedIndex));
  };

  return (
    <div
      id="profileDelCfm"
      className={classNames({
        [styles.profile_del]: true,
        [styles.alert]: true,
        flex: true,
        [styles.show]: deleteModal,
      })}
    >
      <div className={styles.title}>delete eq</div>
      <div className={`${styles.body_text} t-center`}>
        {profiles[selectedIndex].name}
      </div>
      <div className={styles.thx_btn} onClick={() => handleClick()}>
        delete
      </div>
    </div>
  );
};

export default DeleteAlert;
