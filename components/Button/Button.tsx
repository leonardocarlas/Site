import styles from './Button.module.scss'

type MyFunctionType = () => {};

export type ButtonProps = {
    label: string,
    callback : MyFunctionType;
    variant? : 'sm' | 'big' | 'submit'
}

export default function Button(props : ButtonProps) {


    return (
        <>
            <button className={styles.button} onClick={props.callback}>
                <span>{props.label}</span>
            </button>
        </>
    );
}