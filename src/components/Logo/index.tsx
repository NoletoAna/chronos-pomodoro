import styles from './styles.module.css';
import { Timer } from 'lucide-react';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href="">
                <Timer size={50} />
                <h1>Chronos</h1>
            </a>
        </div>
    );
}