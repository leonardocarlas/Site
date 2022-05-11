import Image from 'next/image';
import styles from './Language.module.scss'; 
import utilStyles from '../../styles/utils.module.scss';
import { useState } from 'react';

export type languageProps = {
    language : string,
    image    : string
}; 



export default function Language( props : languageProps ) {

    const [isBackside, setIsBackside] = useState(false);

    function handleClick() {
       setIsBackside(!isBackside);
       console.log(isBackside);
    }


    return (
        <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                  
                    <div className={styles.leftContainer}>
                        <Image
                            src={props.image}
                            height={30}
                            width={30}
                        />
                    </div>
                
                    <p className={utilStyles.headingMd}>{props.language}</p>
                </div>
                <div className={styles.flipcardback}>
                    <p>Hola pendejo</p>
                </div>
            </div>
        </div>
    );
}



