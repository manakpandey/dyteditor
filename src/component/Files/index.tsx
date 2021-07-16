import React from "react";
import Css from "../../icons/css";
import Html from "../../icons/html";
import Js from "../../icons/js";
import "./index.scss";

interface IFiles {
  onChange: (f: "html" | "css" | "javascript") => void;
  active: "html" | "css" | "javascript";
}

export default function Files({ onChange, active }: IFiles) {
  return (
    <div className={"de-files_container"}>
      <div
        className={`de-file ${active === "html" ? "active" : ""}`}
        onClick={() => onChange("html")}
      >
        <Html />
        index.html
      </div>
      <div
        className={`de-file ${active === "css" ? "active" : ""}`}
        onClick={() => onChange("css")}
      >
        <Css />
        index.css
      </div>
      <div
        className={`de-file ${active === "javascript" ? "active" : ""}`}
        onClick={() => onChange("javascript")}
      >
        <Js />
        index.js
      </div>
    </div>
  );
}
