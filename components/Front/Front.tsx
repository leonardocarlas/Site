import { Constants } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import Image from 'next/image';

import styles from './Front.module.scss'
import utilStyles from '../../styles/utils.module.scss';
import { useRouter } from "next/router";
import { Util } from "../../utils/util";
import arrowDown from '../../public/svg/down-arrow.svg';


export default function Front() {

    let router = useRouter();
    let t = Util.getLocale(router);

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={isDarkmode ? styles.firstContainerDark : styles.firstContainerLight}>
            <div className={'lg:mx-[400px]'}>
                <p className={`${utilStyles.heading2Xl} ${styles.coloredName}`}>{t.section1.title}</p>
                <p className={utilStyles.headingLg}>{t.section1.subtitle}</p>
            </div>
            <div className={'flex flex-wrap flex-row justify-center mb-4 md:mb-32 lg:mb-48'}>
                <Image src={arrowDown} height={20} width={20}></Image>
            </div>
        </div>
    );
    

}

