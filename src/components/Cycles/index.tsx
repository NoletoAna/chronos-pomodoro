import styles from './styles.module.css';

export default function Cycles() {
    return (
        <div className={styles.cycles}>
            <span>Ciclos</span>
            <div className={styles.cyleDots}>
                <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyleDot} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    );
}