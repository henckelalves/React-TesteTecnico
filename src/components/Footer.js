import React from "react";

function Footer(props) {
  return (
    <div className="header-footer">
      <div className="logo float-left">
        <img src={props.logoSrc} alt="logo" />
      </div>
      <div>Desenvolvido por Henckel</div>
    </div>
  );
}

export default Footer;
