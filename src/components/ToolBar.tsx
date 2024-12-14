import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ToolBar.module.css";

const ToolBar: FC = () => {
  return (
    <div className={`${styles.toolbar} flex`}>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.add]: true,
        })}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.edit]: true,
        })}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.delete]: true,
        })}
      ></div>

      <div
        className={classNames({
          [styles.icon]: true,
          [styles.down]: true,
        })}
      ></div>
      <div
        className={classNames({
          [styles.icon]: true,
          [styles.up]: true,
          [styles.disabled]: true,
        })}
      ></div>
    </div>
  );
};

export default ToolBar;
