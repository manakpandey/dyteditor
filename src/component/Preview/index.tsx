import React from "react";
import "./index.scss";
interface IPreview {
  html: string;
  css: string;
  js: string;
}

export default function Preview({ html, css, js }: IPreview) {
  let combined = html;

  if (css) {
    const csind = combined.indexOf("<html>");
    combined =
      combined.substring(0, csind + 6) +
      "<style>" +
      css +
      "</style>" +
      combined.substring(csind + 7);
  }

  if (js) {
    const jsind = combined.lastIndexOf("</html>");
    combined =
      combined.substring(0, jsind) +
      `<script>${js}</script>` +
      combined.substring(jsind);
  }

  if (!combined) {
    return (
      <div className="de-greeting">
        <div className="de-heading">Preview_</div>
        <div className="de-sub_heading">
          Edit the files and view updates here.
        </div>
      </div>
    );
  }
  return (
    <iframe
      style={{
        width: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        border: "None",
      }}
      srcDoc={combined}
      title={"Live Preview"}
    />
  );
}
