import React from "react";

function Post(props) {
  return (
    // <div className="Post">
    <div class="Posts">
      <div class="Post">
        <h2 class="Post-Title">{props.title}</h2>
        <article class="Post-Body">{props.body}</article>
      </div>
    </div>
  );
}

export default Post;
