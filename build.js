const fs = require('fs-extra');
const path = require('path');
const packageInfo = require('./package.json');

const srcStyle = path.join(__dirname, './src/github-custom.css');
const srcScript = path.join(__dirname, './src/github-custom.js');
const distScript = path.join(__dirname, './user-script/github-custom.user.js');

const customStyles = () => fs.readFileSync(srcStyle);
const customScripts = () => fs.readFileSync(srcScript);

const userScript = () => `
// ==UserScript==
// @name         ${packageInfo.name}
// @namespace    ${packageInfo.name}
// @description  ${packageInfo.description}
// @version      ${packageInfo.version}
// @author       ${packageInfo.author}
// @homepage     ${packageInfo.homepage}
// @license      ${packageInfo.license}

// @include      https://github.com/*
// @run-at       document-start

// @grant        GM_addStyle
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js

// @noframes
// @connect      *
// ==/UserScript==

(function () {
  const styles = \`${customStyles()}\`;
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(styles);
  } else {
    let styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(styles));
    (document.querySelector('head') || document.documentElement).appendChild(styleNode);
  }
  ${customScripts()}
})();
`;

fs.outputFile(distScript, userScript());

if (process.argv.includes('-d')) {
  fs.watch( path.join(__dirname, './src'), (event, filename) => {
    if (filename && event === 'change') {
      const filePath = path.join(__dirname, './src', filename);
      console.log(`[${Date.now()}] ${filePath} updated`);
      fs.outputFile(distScript, userScript());
    }
  });
}
