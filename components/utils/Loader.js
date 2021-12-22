import styles from "../../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img className="w-64 h-64" src="/loading.svg" alt="" />
    </div>
  );
}
