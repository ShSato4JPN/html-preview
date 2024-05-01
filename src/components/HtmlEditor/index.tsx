"use client";

import styles from "./style.module.scss";

type HtmlEditorProps = {
  setHtml: (html: string) => void;
};

export default function HtmlEditor({ setHtml }: HtmlEditorProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setHtml(event.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.htmlEditor}>
        <textarea className={styles.textArea} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
}
