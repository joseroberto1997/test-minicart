import styles from "./Button.module.css";

export function Button() {
  return (
    <div className={styles.content}>
      <button type="button" className={styles.button}>Finalizar compra</button>
    </div>
  );
}
