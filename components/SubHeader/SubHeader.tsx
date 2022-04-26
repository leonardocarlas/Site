import styles from './SubHeader.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/paper-plane-outline.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import HeaderChild from '../HeaderChild/HeaderChild'
import Button from '../Button/Button'
import sunPic from '../../public/svg/sun.svg'
import { useRouter } from 'next/router'
import { useState } from 'react'



export default function SubHeader() {

    const router = useRouter();
    const [darkmode, setDarkmode] = useState(false);

    const handleChangeDarkmode = () => {
        if (darkmode)
            setDarkmode(false);
        else
            setDarkmode(true);
    }

    const handleChangeLanguage = (language : string) => {
        router.push(router.asPath, router.asPath, { locale: language });
    }

    return (
       
        <div className={styles.subheadercontainer}>
            <button 
                className={styles.sunContainer} 
                onClick={handleChangeDarkmode}
            >
                <Image 
                    src={sunPic}
                    width={20}
                    height={20}
                    alt={'Dark / Light icon'}
                />
            </button>
            <button onClick={() => handleChangeLanguage('en')}>EN</button>
            <button onClick={() => handleChangeLanguage('it')}>IT</button>
            <button onClick={() => handleChangeLanguage('es')}>ES</button>
            <button onClick={() => handleChangeLanguage('pt')}>PT</button>
            <button onClick={() => handleChangeLanguage('fr')}>FR</button>
            <button onClick={() => handleChangeLanguage('de')}>DE</button>
        </div>
     
    )
}