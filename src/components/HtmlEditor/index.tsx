"use client";

import { useRef } from "react";

import styles from "./style.module.scss";

type HtmlEditorProps = {
  html: string;
  setHtml: (html: string) => void;
};

export default function HtmlEditor({ html, setHtml }: HtmlEditorProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyUp = () => {
    setHtml(textAreaRef.current?.value || "");
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textArea}
        onKeyUp={handleKeyUp}
        ref={textAreaRef}
      >
        {html}
      </textarea>
    </div>
  );
}
