import styles from "./style.module.scss";

export default function CssEditor() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cssEditor}>
        <textarea className={styles.textarea} />
      </div>
    </div>
  );
}
