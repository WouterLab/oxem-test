import styles from "./LeasingPrice.module.scss";

const LeasingPrice = ({ leasingPrice, hideCalculate }) => {
  return (
    <div className={styles.leasingPrice}>
      <p className={styles.p}>Сумма договора лизинга</p>
      {!hideCalculate && <p className={styles.price}>{leasingPrice} ₽</p>}
      {hideCalculate && <p className={styles.price}>. . .</p>}
    </div>
  );
};

export default LeasingPrice;
