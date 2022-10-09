import Input from "../../ui/Input/Input";
import styles from "./Leasing.module.scss";

const Leasing = ({ leasing, setLeasing, disabled, setHideCalculate }) => {
  const min = 1;
  const max = 60;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((leasing - 1) * 100) / 59}% 100%`,
    };
  };
  return (
    <div className={styles.leasing}>
      <p className={styles.p}>Срок лизинга</p>
      <Input
        value={leasing}
        getBackgroundSize={getBackgroundSize}
        setValue={setLeasing}
        max={max}
        min={min}
        disabled={disabled}
        setHideCalculate={setHideCalculate}>
        <p className={`${styles.inputInside} ${disabled && styles.disabled}`}>
          мес.
        </p>
      </Input>
    </div>
  );
};

export default Leasing;
