import styles from './Button.module.scss'

type MyFunctionType = () => {};

export type ButtonProps = {
    label: string,
    callback? : MyFunctionType,
    variant? : 'sm' | 'big' | 'submit',
    type?: string,
    isWhite? : boolean,
    disabled?: boolean
}

export default function Button(props : ButtonProps) {


    return (
        <>
            
            <button className={props.isWhite ? styles.buttonWhite : styles.button } onClick={props.callback} disabled={props.disabled} data-testid="button">
                <span>{props.label}</span>
            </button>
        </>
    );
}