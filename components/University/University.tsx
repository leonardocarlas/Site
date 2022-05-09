import Image from 'next/image';
import styles from './University.module.scss'; 
import utilStyles from '../../styles/utils.module.scss';

export type universityProps = {
    name : string,
    period : string,
    program : string,
    image : string
}

export default function University( props : universityProps ) {
    return (
        <>
            <div className={styles.universityContainer}>
                <div className={styles.leftContainer}>
                    <Image
                        src={props.image}
                        height={120}
                        width={120}
                    />
                </div>
                <div className={styles.rightContainer}>
                    <p className={utilStyles.headingMd}>{props.name}</p>
                    <p>{props.program}</p>
                    <p className={utilStyles.lightText}>{props.period}</p>
                </div>
            </div>
        </>
    );
}