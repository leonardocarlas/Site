import { Constants } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import Image from 'next/image';

import styles from './Section1.module.scss'
import utilStyles from '../../styles/utils.module.scss';



export default function Section1() {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={isDarkmode ? styles.firstContainerDark : styles.firstContainerLight}>
            <p className={utilStyles.heading2Xl}>My name is <span className ={styles.coloredName}>Leonardo Carlassare</span> and I'm a Software Engineer.</p>
            <p className={utilStyles.headingLg}>I like to code, to work on startups and to learn new things every day.</p>
        </div>
    );
    

}

