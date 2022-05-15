import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import styles from './Card.module.scss'
import Image from 'next/image';

export type CardProps = {
    img: string,
    title: string,
    link: string
    alt: string
}

export default function Card(props : CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    priority
                    src={props.img}
                    height={150}
                    width={200}
                    alt={props.alt}
                />
            </div>
            <p>{props.title}</p>
            <a href={props.link} target="_blank">View website</a>
        </div>
    )
}

