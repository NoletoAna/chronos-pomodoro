import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';


export default function Menu() {
    return (
        <div className={styles.menu}>
            <a href="" className={styles.iconMenu}>
                <HouseIcon />
            </a>
            <a href="" className={styles.iconMenu}>
                <HistoryIcon />
            </a>
            <a href="" className={styles.iconMenu}>
                <SettingsIcon />
            </a>
            <a href="" className={styles.iconMenu}>
                <SunIcon />
            </a>
        </div>
    );
}