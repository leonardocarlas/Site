import styles from './SubHeader.module.scss'
import Image from 'next/image'
import sunPic from '../../public/svg/sun.svg'
import { useRouter } from 'next/router'

import { toggleDarkmode } from '../../redux/slices/darkmodeSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { useEffect } from 'react'


export default function SubHeader() {

    const router = useRouter();

    // The `state` arg is correctly typed as `RootState` already
    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    const dispatch = useAppDispatch();

    const handleChangeLanguage = (language : string) => {
        router.push(router.asPath, router.asPath, { locale: language });
    }

    useEffect (
        () => {
        //changing color of body with darkmode in useEffect
        document.body.style.backgroundColor = isDarkmode ? "#292c35" : "#fff";
      }, [isDarkmode]);


    return (
       
        <div className={ isDarkmode ?  styles.subheaderContainerDark : styles.subheaderContainerLight }
        >
            <button 
                className={styles.iconContainer}
                onClick={
                    () => {
                        dispatch(toggleDarkmode());
                        console.log(isDarkmode);
                    }
                }
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


