import Image from 'next/image';
import styles from './Language.module.scss'; 
import utilStyles from '../../styles/utils.module.scss';

export type languageProps = {
    language : string,
    image    : string
}; 

export default function Language( props : languageProps ) {
    return (
        <>
        <div className={styles.languageContainer}>
            <div className={styles.leftContainer}>
                <Image
                    src={props.image}
                    height={30}
                    width={30}
                />
            </div>
            <p className={utilStyles.headingMd}>{props.language}</p>
        </div>
        </>
    );
}