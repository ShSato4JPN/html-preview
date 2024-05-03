"use client";

import { useState } from "react";

import CodeEditor from "@/components/CodeEditor";
import ResultViewer from "@/components/ResultViewer";

import "react-tabs/style/react-tabs.css";
import styles from "./page.module.scss";

export default function Home() {
  const [html, setHtml] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.editor}>
          <CodeEditor setHtml={setHtml} />
        </section>
        <section className={styles.result}>
          <ResultViewer html={html} />
        </section>
      </main>
    </div>
  );
}
