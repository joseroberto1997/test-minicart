import styles from "./Summary.module.css";

export function Summary({ total }) {

  let hasFreeShipping = total >= 1000;

  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.totalContent}>
        <span className={styles.totalTitle}>Total</span>
        <span className={styles.total}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(total)}
        </span>
      </div>
      {hasFreeShipping ? (
        <div className={styles.freeShipping}>
          <p>Parabéns, sua compra tem frete grátis !</p>
        </div>
      ): null}
        
    </div>
  );
}
