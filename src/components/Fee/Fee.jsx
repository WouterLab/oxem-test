import { useState } from "react";
import Input from "../../ui/Input/Input";
import styles from "./Fee.module.scss";

const Fee = ({
  price,
  fee,
  setFee,
  disabled,
  firstFee,
  setFirstFee,
  setHideCalculate,
  hideCalculate,
}) => {
  const min = 10;
  const max = 60;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((fee - 10) * 100) / 50}% 100%`,
    };
  };
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className={styles.fee}>
      <p className={styles.p}>Первоначальный взнос</p>
      <Input
        value={fee}
        getBackgroundSize={getBackgroundSize}
        setValue={setFee}
        max={max}
        min={min}
        price={price}
        disabled={disabled}
        leasing
        firstFee={firstFee}
        setFirstFee={setFirstFee}
        fee={fee}
        onFocus={onFocus}
        onBlur={onBlur}
        setHideCalculate={setHideCalculate}>
        <p
          className={`${styles.rouble} ${disabled && styles.disabled} ${
            focused && styles.hidden
          } ${hideCalculate && styles.hidden}`}>
          ₽
        </p>
        <input
          className={styles.inputInside}
          type='text'
          readOnly
          disabled={disabled}
          value={`${fee}%`}
        />
      </Input>
    </div>
  );
};

export default Fee;
