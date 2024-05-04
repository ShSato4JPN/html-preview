"use client";

import styles from "./style.module.scss";

type ResultViewerProps = {
  html: string;
  css: string;
};

export default function ResultViewer({ html, css }: ResultViewerProps) {
  const baseHtml = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className={styles.wrapper}>
      <iframe className={styles.iframe} srcDoc={baseHtml} />
    </div>
  );
}
