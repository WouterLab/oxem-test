import { useState } from "react";
import Input from "../../ui/Input/Input";
import styles from "./Leasing.module.scss";

const Leasing = () => {
  const [value, setValue] = useState(30);
  const min = 10;
  const max = 60;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((value - 10) * 100) / 50}% 100%`,
    };
  };
  return (
    <div className={styles.leasing}>
      <p className={styles.p}>Стоимость автомобиля</p>
      <Input
        value={value}
        getBackgroundSize={getBackgroundSize}
        setValue={setValue}
        max={max}
        min={min}
        isChangeble
        type='number'>
        <p className={styles.inputInside}>мес.</p>
      </Input>
    </div>
  );
};

export default Leasing;
