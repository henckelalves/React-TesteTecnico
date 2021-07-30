import React from "react";
import titleCase from "./Helper";

function PostsList(props) {
  return (
    <div>
      <div onClick={props.handle} key={props.id}>
        <h5 className="text-center">{titleCase(props.title)}</h5>
      </div>
    </div>
  );
}

export default PostsList;
