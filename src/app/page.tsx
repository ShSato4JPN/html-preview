"use client";

import { useState } from "react";

import HtmlEditor from "@/components/HtmlEditor";
import ResultViewer from "@/components/ResultViewer";

import styles from "./page.module.scss";

export default function Home() {
  const [html, setHtml] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <HtmlEditor setHtml={setHtml} />
        <ResultViewer html={html} />
      </main>
    </div>
  );
}
