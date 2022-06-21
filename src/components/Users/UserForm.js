import React from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card"

const UserForm = (props) => {
  //On submitting the user form (when the add user button is clicked)
  const newUserEntry = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const age = event.target[1].value;
    if (username !== " " && age >= 0) {
      const user = {
        username,
        age,
      };
      props.onSubmitting(user);
    }
  };

  //jsx form
  return (
    <Card>
      <form onSubmit={newUserEntry}>
        <div className={styles["user-form__inputs"]}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" />
        </div>

        <div className={styles["user-form__inputs"]}>
          <label htmlFor="Age">Age (Years)</label>
          <input type="number" id="Age" min="0" />
        </div>

        <div className={styles["user-form__button"]}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
