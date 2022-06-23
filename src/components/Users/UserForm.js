import React from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";

const UserForm = (props) => {
  const [error, setError] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //On submitting the user form (when the add user button is clicked)
  const newUserEntry = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length !== 0 && enteredAge >= 0) {
      const user = {
        username: enteredUsername,
        age: enteredAge,
      };
      props.onSubmitting(user);
      ageInputRef.current.value = 0;
      nameInputRef.current.value = "";
    }
    if (enteredUsername.trim().length === 0) {
      errorInstance("Username missing", "Please enter a valid username!");
    }
    if (enteredAge < 0) {
      errorInstance("Incorrect Age", "Age must be greater than 0!");
    }
  };

  const errorInstance = (errTitle, errMessage) => {
    setError(true);
    setErrorTitle(errTitle);
    setErrorMessage(errMessage);
  };

  const errorHandler = () => {
    setError(false);
  };

  //jsx form
  return (
    <>
      {error ? (
        <ErrorModal
          title={errorTitle}
          message={errorMessage}
          onConfirm={errorHandler}
        ></ErrorModal>
      ) : (
        ""
      )}

      <Card>
        <form onSubmit={newUserEntry}>
          <div className={styles["user-form__inputs"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={nameInputRef} />
          </div>

          <div className={styles["user-form__inputs"]}>
            <label htmlFor="Age">Age (Years)</label>
            <input type="number" id="Age" ref={ageInputRef} />
          </div>

          <div className={styles["user-form__button"]}>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
