import React from "react";
import { useState } from "react";
import { ReactElement } from "react";
import Prism from "prismjs";
import { useEffect } from "react";
// import "./prism.css";
import "./index.scss";

interface IEditor {
  language: "html" | "javascript" | "css";
  text: string;
  onChange: (c: string) => void;
}

export default function Editor({
  language,
  text,
  onChange,
}: IEditor): ReactElement {
  const [taHeight, setTaHeight] = useState(0);
  const ref = React.createRef<HTMLTextAreaElement>();

  useEffect(() => {
    Prism.highlightAll();
  }, [language, text]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    if (ref.current?.scrollHeight) setTaHeight(ref.current?.scrollHeight);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      const startPos = e.currentTarget.selectionStart;
      const v =
        text.substring(0, startPos) +
        "    " +
        text.substring(startPos, text.length);
      e.preventDefault();
      onChange(v);
    }
  };

  return (
    <div className={"de-editor_wrapper"}>
      <div className={"de-editor"}>
        <textarea
          data-gramm_editor="false"
          ref={ref}
          className={"de-editor_code text"}
          spellCheck={false}
          value={text}
          style={{ height: taHeight }}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <pre
          className={"de-editor_code highlight"}
          style={{ height: taHeight }}
        >
          <code className={`de-editor_codeblock language-${language}`}>
            {text}
          </code>
        </pre>
      </div>
    </div>
  );
}
