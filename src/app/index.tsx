import React from "react";
import "./index.scss";
import Editor from "../component/Editor";

function App() {
  return (
    <div className={"de-dyteditor"}>
      <Editor language="html" />
    </div>
  );
}

export default App;
