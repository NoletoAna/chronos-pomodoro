import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="" className={styles.linkFooter}>Entenda a Técnica Pomodoro 📚</a>
            <a href="" className={styles.linkFooter}>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
        </footer>
    );
}