import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.user}>
      {props.username} ({props.age} years old)
    </div>
  );
};
export default User;
