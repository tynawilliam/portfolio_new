import styles from "../styles/Cube.module.css";

const Cube = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.cube} ${styles.animate}`}>
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.faceContent}></div>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.faceContent}></div>
        </div>
        <div className={`${styles.face} ${styles.right}`}>
          <div className={styles.faceContent}></div>
        </div>
        <div className={`${styles.face} ${styles.left}`}>
          <div className={styles.faceContent}></div>
        </div>
        <div className={`${styles.face} ${styles.top}`}>
          <div className={styles.faceContent}></div>
        </div>
        <div className={`${styles.face} ${styles.bottom}`}>
          <div className={styles.faceContent}></div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
