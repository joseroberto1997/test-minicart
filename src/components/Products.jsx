
import styles from "./Products.module.css";

export function Products({ products }) {
    

  return (
      <div className={styles.productWrapper}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.product}>
              <div className={styles.productImg}>
                <img src={product.imageUrl} alt="" />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.title}>{product.name}</p>
                <div className={styles.prices}>
                  <span className={styles.listPrice}>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    }).format(parseFloat(product.listPrice / 100).toFixed(2))}
                  </span>
                  <span className={styles.bestPrice}>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    }).format(parseFloat(product.price / 100).toFixed(2))}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

  );
}
