import React from "react";
import titleCase from "./Helper";

function Post(props) {
  return (
    <div className="container card post-margin">
      <div key={props.id}>
        <h3 className="text-center">{titleCase(props.title)}</h3>
        <br />
        <article className="text-justify">{props.body}</article>
      </div>
    </div>
  );
}

export default Post;
