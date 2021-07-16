import React from "react";
import "./index.scss";
import Editor from "../component/Editor";
import Files from "../component/Files";
import { useState } from "react";

function App() {
  const [file, setFile] = useState<"html" | "css" | "javascript">("html");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className={"de-dyteditor"}>
      <div className={"de-ide"}>
        <Files
          active={file}
          onChange={(f: "html" | "css" | "javascript") => {
            setFile(f);
          }}
        />
        <Editor language={file} />
      </div>
      <div className={"de-preview"}></div>
    </div>
  );
}

export default App;
