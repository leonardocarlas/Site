import Image from 'next/image';
import styles from './University.module.scss'; 
import utilStyles from '../../styles/utils.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export type universityProps = {
    name : string,
    period : string,
    program : string,
    image : string
    link : string
}

export default function University( props : universityProps ) {

    const [isBackside, setIsBackside] = useState(false);

    function handleClick() {
       setIsBackside(!isBackside);
    }
    
    return (
        <>
            <div className={styles.universityContainer} onClick={handleClick}>
                {
                    isBackside ? 
                    <Link href={props.link}><a className={styles.linkText}>{props.link}</a></Link>
                    : 
                    <>
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
                    </>
                }
                
            </div>
        </>
    );
}