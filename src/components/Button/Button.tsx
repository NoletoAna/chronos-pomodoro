import { ReactNode } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
    icon: ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export default function Button({ icon, color = 'green', ...props }: ButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`}{...props}>
                {icon}
            </button>
        </>
    );
}