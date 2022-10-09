import { useState } from "react";
import Input from "../../ui/Input/Input";
import styles from "./Price.module.scss";

const Price = () => {
  const [value, setValue] = useState(3000000);
  const min = 1000000;
  const max = 6000000;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((value - 1000000) * 100) / 5000000}% 100%`,
    };
  };

  return (
    <div className={styles.price}>
      <p className={styles.p}>Стоимость автомобиля</p>
      <Input
        value={value}
        getBackgroundSize={getBackgroundSize}
        setValue={setValue}
        max={max}
        min={min}
        type='number'
        isChangeble>
        <p className={styles.inputInside}>₽</p>
      </Input>
    </div>
  );
};

export default Price;
