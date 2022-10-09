import Input from "../../ui/Input/Input";
import styles from "./Price.module.scss";

const Price = ({ price, setPrice, disabled, setHideCalculate }) => {
  const min = 1000000;
  const max = 6000000;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((price - 1000000) * 100) / 5000000}% 100%`,
    };
  };

  return (
    <div className={styles.price}>
      <p className={styles.p}>Стоимость автомобиля</p>
      <Input
        value={price}
        getBackgroundSize={getBackgroundSize}
        setValue={setPrice}
        max={max}
        min={min}
        disabled={disabled}
        setHideCalculate={setHideCalculate}>
        <p className={`${styles.inputInside} ${disabled && styles.disabled}`}>
          ₽
        </p>
      </Input>
    </div>
  );
};

export default Price;
