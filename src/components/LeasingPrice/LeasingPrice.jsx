import styles from "./LeasingPrice.module.scss";

const LeasingPrice = () => {
  return (
    <div className={styles.leasingPrice}>
      <p className={styles.p}>Сумма договора лизинга</p>
      <p className={styles.price}>4 467 313 ₽</p>
    </div>
  );
};

export default LeasingPrice;
