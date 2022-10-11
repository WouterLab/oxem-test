import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Fee from "./components/Fee/Fee";
import Leasing from "./components/Leasing/Leasing";
import LeasingPrice from "./components/LeasingPrice/LeasingPrice";
import MonthPay from "./components/MonthPay/MonthPay";
import Price from "./components/Price/Price";
import Title from "./components/Title/Title";
import Button from "./ui/Button/Button";

function App() {
  const [price, setPrice] = useState(3000000);
  const [fee, setFee] = useState(10);
  const [leasing, setLeasing] = useState(30);
  const [monthPay, setMonthPay] = useState(0);
  const [leasingPrice, setLeasingPrice] = useState(0);
  const [firstFee, setFirstFee] = useState(300000);
  const [isRequstSuccess, setRequstSuccess] = useState(false);
  const [isRequstSended, setRequstSended] = useState(false);
  const [hideCalculate, setHideCalculate] = useState(false);

  useEffect(() => {
    if (fee > 60 || Number(firstFee) > 36000000) {
      setFee(60);
    } else if (fee < 10 || Number(firstFee) < 100000) {
      setFee(10);
    } else if (firstFee === '' || isNaN(fee) || firstFee == null) {
      setFee(10);
      setFirstFee(Math.round((price / 100) * fee));
    } else {
      setFee(Math.round(firstFee / (price / 100)));
    }
  }, [firstFee]);

  useEffect(() => {
    setFirstFee(Math.round((price / 100) * fee));
  }, [price, fee]);

  useEffect(() => {
    const count = firstFee + leasing * monthPay;
    setLeasingPrice(count);
  }, [firstFee, leasing, monthPay]);

  useEffect(() => {
    const count =
      (price - firstFee) *
      ((0.035 * Math.pow(1 + 0.035, leasing)) /
        (Math.pow(1 + 0.035, leasing) - 1));
    setMonthPay(Math.round(count));
  }, [price, leasing, firstFee]);

  const sendRequest = async () => {
    setRequstSended(true);
    const data = {
      car_cost: price,
      initial_payment: firstFee,
      initial_payment_percent: fee,
      lease_term: leasing,
      total_sum: leasingPrice,
      monthly_payment_from: monthPay,
    };
    let res = await fetch("https://hookb.in/03yozzqwapt3Mkp3KWl0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(data),
    });
    let result = await res.json();
    if (result.success) {
      // это искусственная задержка для наглядности
      setTimeout(() => {
        setRequstSuccess(true);
        setRequstSended(false);
      }, 1500);
    }
  };

  return (
    <div className={styles.App}>
      <Title>Рассчитайте стоимость автомобиля в лизинг</Title>
      <div className={styles.values}>
        <Price
          price={price}
          setPrice={setPrice}
          disabled={isRequstSended}
          setHideCalculate={setHideCalculate}
        />
        <Fee
          fee={fee}
          setFee={setFee}
          price={price}
          disabled={isRequstSended}
          firstFee={firstFee}
          setFirstFee={setFirstFee}
          hideCalculate={hideCalculate}
          setHideCalculate={setHideCalculate}
        />
        <Leasing
          leasing={leasing}
          setLeasing={setLeasing}
          disabled={isRequstSended}
          setHideCalculate={setHideCalculate}
        />
      </div>
      <div className={styles.counted}>
        <LeasingPrice
          leasingPrice={leasingPrice}
          hideCalculate={hideCalculate}
        />
        <MonthPay monthPay={monthPay} hideCalculate={hideCalculate} />
        <Button
          sendRequest={sendRequest}
          isRequstSuccess={isRequstSuccess}
          isRequstSended={isRequstSended}
        />
      </div>
    </div>
  );
}

export default App;
