import { Constants } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import Image from 'next/image';

import styles from './Section1.module.scss'
import utilStyles from '../../styles/utils.module.scss';



export default function Section1() {



    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={isDarkmode ? styles.firstContainer : styles.firstContainer}>
            <p className={utilStyles.heading2Xl}>My name is Leonardo Carlassare.<br></br>I'm a Software Engineer.</p>
            <p className={utilStyles.headingLg}>I like to code, to work on startups and to learn new things every day.</p>
            <div className={styles.imageContainer}>
                <Image
                    priority
                    src="/images/leo.jpg"
                    height={400}
                    width={300}
                    className={styles.profilePic}
                    alt={Constants.NAME}
                ></Image>
            </div>
        </div>
    );
    

}

