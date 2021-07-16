import React from "react";

interface IPreview {
  html: string;
  css: string;
  js: string;
}

export default function Preview({ html, css, js }: IPreview) {
  let combined = html;

  const csind = combined.indexOf("<html>");
  combined =
    combined.substring(0, csind + 6) +
    "<style>" +
    css +
    "</style>" +
    combined.substring(csind + 7);

  const jsind = combined.lastIndexOf("</html>");
  combined =
    combined.substring(0, jsind) +
    `<script>${js}</script>` +
    combined.substring(jsind);

  return (
    //   <div dangerouslySetInnerHTML={{ __html: html }} />
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
