import React from "react";

function Comment(props) {
  return (
    <div>
      <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">{props.name}</div>
          <div className="UserInfo-Email">{props.email}</div>
        </div>
        <div className="Comment-text">{props.body}</div>
      </div>
    </div>
  );
}

export default Comment;
