import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import styles from './Card.module.css'

export type CardProps = {
    img: string,
    title: string,
    author: string
}

export default function Card(props : CardProps) {
    return (
        <div className={styles.card}>
            <img src={props.img} />
            <div className={styles.card_body}>
                <h2>{props.title}</h2>
                <p>Explanation: The only reason behind the fact that it uses className over class is that the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript, so we have to use className instead of class attribute</p>
                <h5>{props.author}</h5>
            </div>
        </div>
    )
}