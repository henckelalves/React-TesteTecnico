import React from "react";

function Header(props) {
  return (
    <div className="header-footer">
      <div className="float-left logo">
        <a href={props.urlBase}>
          <img src={props.logoSrc} alt="logo" />
        </a>
      </div>
      <div>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Header;
