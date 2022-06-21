import React from "react";
import styles from "./UserList.module.css";
import User from "./User";
import Card from "../UI/Card"

const UserList = (props) => {
  return (
    <Card>
      {props.userlist.map((user) => (
        <User username={user.username} age={user.age} key={Math.random()} />
      ))}
    </Card>
  );
};

export default UserList;
