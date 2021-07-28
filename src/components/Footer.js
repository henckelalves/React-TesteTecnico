import React from "react";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="Logo-Padrão">
        <img src={props.logoSrc} alt="logo" />
      </div>
      <div>Desenvolvido por Henckel</div>
    </div>
  );
}

export default Footer;
