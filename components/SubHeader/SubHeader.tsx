import styles from './SubHeader.module.scss'
import Image from 'next/image'
import sunPic from '../../public/svg/sun.svg'
import moonPic from  '../../public/svg/moon.svg'
import { useRouter } from 'next/router'


import { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'


export default function SubHeader() {

    // The `state` arg is correctly typed as `RootState` already
    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    const router = useRouter();

    const handleChangeLanguage = (language : string) => {
        router.push(router.asPath, router.asPath, { locale: language });
    }


    return (
       
        <div className={ isDarkmode ?  styles.subheaderContainerDark : styles.subheaderContainerLight }>
            <button onClick={() => handleChangeLanguage('en')}>EN</button>
            <button onClick={() => handleChangeLanguage('it')}>IT</button>
            <button onClick={() => handleChangeLanguage('es')}>ES</button>
            <button onClick={() => handleChangeLanguage('pt')}>PT</button>
            <button onClick={() => handleChangeLanguage('fr')}>FR</button>
            <button onClick={() => handleChangeLanguage('de')}>DE</button>
        </div>

        
     
    )
}


