import styles from "./MonthPay.module.scss";

const MonthPay = ({ monthPay, hideCalculate }) => {
  return (
    <div className={styles.monthPay}>
      <p className={styles.p}>Ежемесячный платеж от</p>
      {!hideCalculate && <p className={styles.price}>{monthPay} ₽</p>}
      {hideCalculate && <p className={styles.price}>. . .</p>}
    </div>
  );
};

export default MonthPay;
