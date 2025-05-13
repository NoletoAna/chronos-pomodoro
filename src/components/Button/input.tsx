import { ReactNode } from 'react';
import styles from './styles.module.css';
import { CirclePlay } from 'lucide-react';

type ButtonProps = {
    label?: ReactNode;
    id: string;
    icon?:ReactNode;
} & React.ComponentProps<'button'>;

export default function Button({ }: ButtonProps) {
    return (
        <>
            <button className={styles.button}>
                <CirclePlay className=''/>
            </button>
        </>
    );
}