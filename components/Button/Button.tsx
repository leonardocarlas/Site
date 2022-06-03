import styles from './Button.module.scss'

type MyFunctionType = () => {};

export type ButtonProps = {
    label: string,
    callback? : MyFunctionType,
    variant? : 'sm' | 'big' | 'submit',
    type? : string
}

export default function Button(props : ButtonProps) {


    return (
        <>
            <button className={styles.button} onClick={props.callback} data-testid="button">
                <span>{props.label}</span>
            </button>
        </>
    );
}