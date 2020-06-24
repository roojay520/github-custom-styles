// ==UserScript==
// @name         github-custom-styles
// @namespace    github-custom-styles
// @description  github custom styles
// @version      1.0.0
// @author       roojay
// @homepage     https://github.com/roojay520/github-custom-styles
// @license      http://opensource.org/licenses/MIT

// @include      https://github.com/*
// @run-at       document-start

// @grant        GM_addStyle

// @noframes
// @connect      *
// ==/UserScript==

const customStyles = `
  :root {
    --bg-gray-light: #fafbfc;
    --max-width: 1012px;
    --border-radius: 4px;
    --border-color: #e1e4e8;
  }

  .container-xl {
    max-width: var(--max-width) !important;
  }

  .Box {
    border-radius: var(--border-radius);
  }

  .Box-row:last-of-type {
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  .Box-header {
    border-top-left-radius: var(--border-radius) !important;
    border-top-right-radius: var(--border-radius) !important;
  }

  .btn {
    border-radius: var(--border-radius);
  }

  .btn-with-count {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .social-count {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .pagehead {
    margin-bottom: 16px !important;

    box-shadow: inset 0 -1px 0 var(--border-color);
  }

  .pagehead > div:first-child {
    margin-right: auto;
    margin-left: auto;
    padding-left: 14px !important;
    max-width: var(--max-width);
  }

  .pagehead > nav > ul {
    margin: 0 auto;
    padding-left: 0 !important;
    width: 980px;
    max-width: var(--max-width);
  }

  .pagehead > nav > ul:focus {
    outline: none;
  }

  .repository-content > div.gutter-condensed > div.flex-shrink-0:first-child:not(.col-3):not(.col-md-3) {
    padding-right: 0 !important;
    padding-left: 0 !important;
    width: var(--max-width);
  }

  .repository-content > div.gutter-condensed .Box-header {
    border-color: var(--border-color);
    padding: 16px;

    background-color: #fafbfc;
  }

  .repository-content > div.gutter-condensed div.js-details-container.Details div.Box-row:not(:last-child) {
    box-shadow: inset 0 -1px 0 0 rgba(227, 233, 237, .5);
  }

  #readme > div.Box-header {
    color: #333;
    background: #fcfcfc !important;

    box-shadow: inset 0 -1px 0 var(--border-color);
  }

  .IssueLabel,
  .IssueLabel--big.lh-condensed {
    border-radius: 2px;
  }
`;

(function () {
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(customStyles);
  } else {
    let styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(customStyles));
    (document.querySelector('head') || document.documentElement).appendChild(styleNode);
  }
})();
