import styles from "./MonthPay.module.scss";

const MonthPay = () => {
  return (
    <div className={styles.monthPay}>
      <p className={styles.p}>Ежемесячный платеж от</p>
      <p className={styles.price}>114 455 ₽</p>
    </div>
  );
};

export default MonthPay;
