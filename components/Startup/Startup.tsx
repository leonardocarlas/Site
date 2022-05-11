import Link from 'next/link';
import Image from 'next/image';
import styles from './Startup.module.scss';
import utilStyles from '../../styles/utils.module.scss'
import logoPic from '../../public/svg/logo.svg'
export type HeaderChildProps = {
    img        : string
    name       : string
    period     : string
    link       : string
    isOnline   : boolean
    text       : string
}

export default function Startup ( props : HeaderChildProps ) {

    return (
    <>
        <div className={styles.startupContainer}>

            <div className={styles.leftContainer}>
                <Image src={props.img} width={120} height={120}></Image>        
            </div>

            <div className={styles.rightContainer}>
                <p className={utilStyles.headingMd}>{props.name}</p>
                <p>{props.text}</p>
                <p className={styles.period}>{props.period}</p>
                <p> { props.isOnline ? <Link href={props.link}><a>{props.link}</a></Link> :  <p>No more online - <Link href={props.link}><a>view repo</a></Link></p> } </p>
            </div>
        </div>
    </>

    );
}

