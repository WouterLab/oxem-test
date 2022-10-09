import { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({
  value,
  getBackgroundSize,
  setValue,
  max,
  min,
  children,
  type,
  isChangeble,
}) => {
  const [timer, setTimer] = useState(null);

  const handleValue = (e) => {
    isChangeble && setValue(e.target.value);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      const newValue = Math.max(min, Math.min(max, Number(e.target.value)));
      setValue(newValue);
    }, 700);
    setTimer(newTimer);
  };
  return (
    <div className={styles.input}>
      <input
        className={styles.inputNum}
        type={type}
        value={value}
        min={min}
        max={max}
        onChange={handleValue}
      />
      <input
        className={styles.inputRange}
        min={min}
        value={value}
        max={max}
        type='range'
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
      />
      {children}
    </div>
  );
};

export default Input;
