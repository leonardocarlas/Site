import styles from './SubHeader.module.scss'
import Image from 'next/image'
import sunPic from '../../public/svg/sun.svg'
import { useRouter } from 'next/router'

import { toggleDarkmode } from '../../redux/slices/darkmodeSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'


// Define a type for the slice state
interface DarkmodeState {
    isDarkmode: boolean;
}

export default function SubHeader() {

    const router = useRouter();

    // The `state` arg is correctly typed as `RootState` already
    const isDarkmode = useAppSelector((state) => state.darkmode);
    const dispatch = useAppDispatch();

    const handleChangeLanguage = (language : string) => {
        router.push(router.asPath, router.asPath, { locale: language });
    }


    return (
       
        <div className={ isDarkmode ?  styles.subheadercontainer : styles.class2 }>
            <button 
                className={styles.sunContainer}
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


