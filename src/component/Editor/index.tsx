import React from "react";
import { useState } from "react";
import { ReactElement } from "react";
import Prism from "prismjs";
import { useEffect } from "react";
import "./prism.css";
import "./index.scss";

interface IEditor {
  language: "html" | "javascript" | "css";
}

export default function Editor({ language }: IEditor): ReactElement {
  const [text, setText] = useState("");
  const [taHeight, setTaHeight] = useState(0);
  const ref = React.createRef<HTMLTextAreaElement>();

  useEffect(() => {
    Prism.highlightAll();
  }, [language, text]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (ref.current?.scrollHeight) setTaHeight(ref.current?.scrollHeight);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.selectionStart);
    if (e.key === "Tab") {
      const startPos = e.currentTarget.selectionStart;
      const v =
        text.substring(0, startPos) +
        "    " +
        text.substring(startPos, text.length);
      e.preventDefault();
      setText(v);
    }
  };

  useEffect(() => {}, [text]);

  return (
    <div className={"de-editor"}>
      <textarea
        ref={ref}
        className={"de-editor_code text"}
        spellCheck={false}
        value={text}
        style={{ height: taHeight }}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <pre
        className={"de-editor_code highlight line-numbers"}
        style={{ height: taHeight }}
      >
        <code className={`de-editor_codeblock language-${language}`}>
          {text}
        </code>
      </pre>
    </div>
  );
}
