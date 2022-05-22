import styles from './Service.module.scss'
import Image from 'next/image';

export type ServiceProps = {
    img: string,
    title: string
    alt: string
}

export default function Service(props : ServiceProps) {
    return (
        <div className={styles.card}>
            <p>{props.title}</p>
            <div className={styles.imageContainer}>
                <Image
                    priority
                    src={props.img}
                    height={120}
                    width={200}
                    alt={props.alt}
                />
            </div>   
        </div>
    )
}