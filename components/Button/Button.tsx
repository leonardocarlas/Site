import { type } from 'os'
import styles from './Button.module.scss'


export type ButtonProps = {
    label: string,
    variant? : 'sm' | 'big' | 'submit'
}

export default function Button(props : ButtonProps) {


    return (
        <>
            <button className={styles.button}>
                <span>{props.label}</span>
            </button>
        </>
    );
}