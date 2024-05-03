import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CssEditor from "@/components/CssEditor";
import HtmlEditor from "@/components/HtmlEditor";

import "react-tabs/style/react-tabs.css";
import styles from "./style.module.scss";

type CodeEditorProps = {
  setHtml: (html: string) => void;
};

export default function CodeEditor({ setHtml }: CodeEditorProps) {
  return (
    <Tabs className={styles.tab}>
      <TabList>
        <Tab>HTML</Tab>
        <Tab>CSS</Tab>
      </TabList>
      <TabPanel>
        <HtmlEditor setHtml={setHtml} />
      </TabPanel>
      <TabPanel>
        <CssEditor />
      </TabPanel>
    </Tabs>
  );
}
