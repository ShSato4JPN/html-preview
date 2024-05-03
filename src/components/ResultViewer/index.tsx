"use client";

import styles from "./style.module.scss";

type ResultViewerProps = {
  html: string;
};

export default function ResultViewer({ html }: ResultViewerProps) {
  const baseHtml = `
    <html>
      <head>
        <link rel="stylesheet" href="${process.env.NEXT_PUBLIC_HOST}/style.css">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className={styles.wrapper}>
      <div className={styles.resultViewer}>
        <iframe className={styles.iframe} srcDoc={baseHtml} />
      </div>
    </div>
  );
}
