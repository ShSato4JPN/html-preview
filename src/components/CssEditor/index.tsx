"use client";

import { useRef } from "react";

import styles from "./style.module.scss";

type CssEditorProps = {
  css: string;
  setCss: (css: string) => void;
};

export default function CssEditor({ css, setCss }: CssEditorProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyUp = () => {
    setCss(textAreaRef.current?.value || "");
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textArea}
        onKeyUp={handleKeyUp}
        ref={textAreaRef}
      >
        {css}
      </textarea>
    </div>
  );
}
