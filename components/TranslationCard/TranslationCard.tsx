import styles from './TranslationCard.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export type TranslationCardProps = {
    image : string,
    language : string,
    word : string,
    phrase : string
}


export default function TranslationCard(props : TranslationCardProps) {

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.titleContainer}>
                  <div className={styles.imageContainer}><Image src={props.image} height={30} width={30}/></div>
                  <p className={utilStyles.headingMd}>{props.language}</p>
                </div>
                <div className={styles.bodyContainer}>
                    <p className={utilStyles.headingMd}>{props.word}</p>
                    <p className={`${utilStyles.headingMd} text-center mb-10`}>{props.phrase}</p>
                </div>
            </div>
        </>
    );
}