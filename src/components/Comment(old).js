import React from "react";
import titleCase from "./Helper";

function Comment(props) {
  return (
    <div>
      {props.comment.map((prop) => (
        <div className="Comment">
          <div className="UserInfo">
            <b className="UserInfo-Name">{titleCase(prop.name)}</b>
            <br />
            <a href={"mailto:" + prop.email} className="UserInfo-Email">
              {prop.email}
            </a>
            <br />
            <br />
          </div>
          <div className="Comment-Text">{prop.body}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Comment;
