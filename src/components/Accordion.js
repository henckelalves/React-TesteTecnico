import React, { useState, useRef } from "react";

import "../App.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">{props.title}</p>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-content"
        >
          <div className="accordion-text">{props.children}</div>
        </div>
      </button>
    </div>
  );
}

export default Accordion;
