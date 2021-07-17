const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  addBabelPlugins([
    "prismjs",
    {
      languages: ["javascript", "css", "html"],
      theme: "okaidia",
      css: true,
    },
  ])
);
