import styles from "./Button.module.scss";

const Button = ({ sendRequest, isRequstSended, isRequstSuccess }) => {
  return (
    <button className={styles.button} onClick={sendRequest}>
      {!isRequstSended && !isRequstSuccess && (
        <p className={styles.btnText}>Оставить заявку</p>
      )}
      {isRequstSended && !isRequstSuccess && (
        <div className={styles.loadingSpinner}></div>
      )}
      {!isRequstSended && isRequstSuccess && (
        <p className={styles.btnText}>Заявка оформлена</p>
      )}
      {isRequstSended && isRequstSuccess && (
        <div className={styles.loadingSpinner}></div>
      )}
    </button>
  );
};

export default Button;
