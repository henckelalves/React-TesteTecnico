import React from "react";
import titleCase from "./Helper";

function Comment(props) {
  return (
    <div>
      {props.comment.map((prop) => (
        <div className="container card">
          <div>
            <b className="float-left">{titleCase(prop.name)}</b>
            <br />
            <a className="float-left" href={"mailto:" + prop.email}>
              {prop.email}
            </a>
            <br />
            <br />
          </div>
          <div className="text-justify comment-pad">{prop.body}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Comment;
