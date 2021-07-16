import React from "react";
import "./index.scss";
import Editor from "../component/Editor";
import Files from "../component/Files";
import { useState } from "react";
import Preview from "../component/Preview";

function App() {
  const [file, setFile] = useState<"html" | "css" | "javascript">("html");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const editorOnChange = (c: string) => {
    switch (file) {
      case "javascript":
        setJs(c);
        break;
      case "html":
        setHtml(c);
        break;
      case "css":
        setCss(c);
        break;
    }
  };

  const editorCode = () => {
    switch (file) {
      case "javascript":
        return js;
      case "html":
        return html;
      case "css":
        return css;
    }
  };

  return (
    <div className={"de-dyteditor"}>
      <div className={"de-ide"}>
        <Files
          active={file}
          onChange={(f: "html" | "css" | "javascript") => {
            setFile(f);
          }}
        />
        <Editor language={file} text={editorCode()} onChange={editorOnChange} />
      </div>
      <div className={"de-preview"}>
        <Preview html={html} css={css} js={js} />
      </div>
    </div>
  );
}

export default App;
