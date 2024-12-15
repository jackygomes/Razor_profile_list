import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ToolBar.module.css";
import { addProfile, deleteModal, editProfile, moveProfile } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const ToolBar: FC = () => {
  const dispatch = useDispatch();
  const { selectedIndex, profiles } = useSelector((state) => state.profileList);

  const disabledDirection = () => {
    if (selectedIndex === 0) {
      return -1; // Disabling movement of up direction
    }
    if (selectedIndex === profiles.length - 1) {
      return 1; // Disabling movement of down direction
    }
  };

  const handleMove = (direction) => {
    dispatch(moveProfile(selectedIndex, direction));
  };
  const test = true;

  return (
    <div className={`${styles.toolbar} flex`}>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.add]: true,
        })}
        onClick={() => dispatch(addProfile())}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.edit]: true,
          [styles.show]: !profiles[selectedIndex].isDefault,
        })}
        onClick={() => dispatch(editProfile(selectedIndex, test))}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.delete]: true,
          [styles.show]: !profiles[selectedIndex].isDefault,
        })}
        onClick={() => dispatch(deleteModal(true))}
      ></div>

      <div
        className={classNames({
          [styles.icon]: true,
          [styles.down]: true,
          [styles.disabled]: disabledDirection() === 1,
        })}
        onClick={() => handleMove(1)}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.up]: true,
          [styles.disabled]: disabledDirection() === -1,
        })}
        onClick={() => handleMove(-1)}
      ></div>
    </div>
  );
};

export default ToolBar;
