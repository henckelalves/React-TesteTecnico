import React from "react";

function Post(props) {
  return (
    // <div className="Post">
    <div>
      <div className="Posts">
        <div className="Post">
          <h2 className="Post-Title">{props.title}</h2>
          <article className="Post-Body">{props.body}</article>
        </div>
      </div>
    </div>
  );
}

export default Post;
