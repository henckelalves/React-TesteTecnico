import React from "react";

function Header(props) {
  return (
    <div className="Header">
      <div className="Logo-Padrão">
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
