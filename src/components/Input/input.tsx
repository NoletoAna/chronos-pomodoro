import { ReactNode } from 'react';
import styles from './styles.module.css';

type InputProps = {
    label?: ReactNode;
    id: string;
} & React.ComponentProps<'input'>;

export default function Input({ label, type, id, ...rest }: InputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} className={styles.input}{...rest} placeholder='Digite Algo...' />
        </>
    );
}