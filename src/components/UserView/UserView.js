import UserForm from "../Users/UserForm";
import UserList from "../Users/UserList";
import styles from "./UserView.module.css";
import { useState } from "react";

const UserView = () => {
  //use state to track if a new user has been added to the array
  const [users, setUsers] = useState([
    { username: "Mishal Zulfiqar", age: 23 },
  ]);

  //after we get a new user data from below(userform)
  const getNewUserData = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
  };

  return (
    <div className={styles["user-view"]}>
      <UserForm onSubmitting={getNewUserData} />
      <UserList userlist={users} />
    </div>
  );
};
export default UserView;
