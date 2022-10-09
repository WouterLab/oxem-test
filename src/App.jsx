import styles from "./App.module.scss";
import Fee from "./components/Fee/Fee";
import Leasing from "./components/Leasing/Leasing";
import LeasingPrice from "./components/LeasingPrice/LeasingPrice";
import MonthPay from "./components/MonthPay/MonthPay";
import Price from "./components/Price/Price";
import Title from "./components/Title/Title";
import Button from "./ui/Button/Button";

function App() {
  return (
    <div className={styles.App}>
      <Title>Рассчитайте стоимость автомобиля в лизинг</Title>
      <div className={styles.values}>
        <Price />
        <Fee />
        <Leasing />
      </div>
      <div className={styles.counted}>
        <LeasingPrice />
        <MonthPay />
        <Button />
      </div>
    </div>
  );
}

export default App;
