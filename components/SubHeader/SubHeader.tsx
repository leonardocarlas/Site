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



export default function SubHeader() {

    let router = useRouter();
    let greeting = 
        router.locale === 'en'
        ? 'Hello'
        : router.locale === 'it'
        ? 'Ciao'
        : router.locale === 'de'
        ? 'Halo'
        : '';
    const changeLanguage = (language : string) => {

        router.push(router.asPath, language)
    }

    return (
        <div className={styles.subheadercontainer}>
            <div>
                <Image 
                    src={sunPic}
                    width={20}
                    height={20}
                    alt={'Dark / Light icon'}
                />
            </div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('it')}>IT</button>
            <button>ES</button>
            <button>PT</button>
            <button>FR</button>
            <a>{greeting}</a>
            <button onClick={() => changeLanguage('de')}>DE</button>
                
        </div>
    )
}