"use client";

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CssEditor from "@/components/CssEditor";
import HtmlEditor from "@/components/HtmlEditor";
import ResultViewer from "@/components/ResultViewer";

import "./custom.css";
import "react-tabs/style/react-tabs.css";
import styles from "./page.module.scss";

export default function Home() {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.editor}>
          <Tabs>
            <TabList>
              <Tab>HTML</Tab>
              <Tab>CSS</Tab>
            </TabList>
            <TabPanel className={styles.panel}>
              <HtmlEditor html={html} setHtml={setHtml} />
            </TabPanel>
            <TabPanel>
              <CssEditor css={css} setCss={setCss} />
            </TabPanel>
          </Tabs>
        </section>
        <section className={styles.result}>
          <ResultViewer html={html} css={css} />
        </section>
      </main>
    </div>
  );
}
