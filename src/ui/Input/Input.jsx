import { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({
  value,
  getBackgroundSize,
  setValue,
  max,
  min,
  children,
  disabled,
  leasing,
  firstFee,
  setFirstFee,
  fee,
  setHideCalculate,
  onFocus,
  onBlur,
}) => {
  const [timer, setTimer] = useState(null);

  const handleValue = (e) => {
    setHideCalculate(true);
    if (leasing) {
      console.log(firstFee);
      setFirstFee(e.target.value);
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        const newValue = Math.max(100000, Math.min(3600000, e.target.value));
        setFirstFee(newValue);
        setHideCalculate(false);
      }, 1200);
      setTimer(newTimer);
    } else {
      setValue(e.target.value);
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        const newValue = Math.max(min, Math.min(max, e.target.value));
        setValue(newValue);
        setHideCalculate(false);
      }, 1200);
      setTimer(newTimer);
    }
  };
  return (
    <div className={styles.input}>
      <input
        className={styles.inputNum}
        type='number'
        value={leasing ? firstFee : value}
        min={min}
        max={max}
        disabled={disabled}
        onChange={handleValue}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <input
        className={styles.inputRange}
        min={min}
        value={value}
        max={max}
        type='range'
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
      />
      {children}
    </div>
  );
};

export default Input;
