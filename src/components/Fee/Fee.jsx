import { useState } from "react";
import Input from "../../ui/Input/Input";
import styles from "./Fee.module.scss";

const Fee = () => {
  const [value, setValue] = useState(10);
  const min = 10;
  const max = 60;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((value - 10) * 100) / 50}% 100%`,
    };
  };
  return (
    <div className={styles.fee}>
      <p className={styles.p}>Первоначальный взнос</p>
      <Input
        value={value}
        getBackgroundSize={getBackgroundSize}
        setValue={setValue}
        max={max}
        min={min}
        type='text'>
        <input className={styles.inputInside} type='text' value={`${value}%`} />
      </Input>
    </div>
  );
};

export default Fee;
