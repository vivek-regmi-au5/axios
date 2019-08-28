import React from "react";
import "./myStyles.css";

const User = props => {
  return (
    <div className="user-card">
      <p className="name">
        <span className="sname">Name: </span>
        {props.pers.name}
      </p>
      <input type="text"></input>
      <p className="username">
        <span className="susername">username: </span>
        {props.pers.username}{" "}
      </p>
      <p>Email: {props.pers.email}</p>
    </div>
  );
};

export default User;
