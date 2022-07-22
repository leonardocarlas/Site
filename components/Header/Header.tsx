import styles from './Header.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/logo.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import menuPicWhite from '../../public/svg/white/hamburger-menu-white.svg'
import HeaderChild from '../HeaderChild/HeaderChild'
import Button from '../Button/Button'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../redux/hooks'
import { Util } from '../../utils/util'
import { PathPage } from '../../constants/path-pages'
import { useEffect } from 'react'
import { NextPage } from 'next'
import { toggleDarkmode } from '../../redux/slices/darkmodeSlice'
import { useAppDispatch } from '../../redux/hooks'
import sunPic from '../../public/svg/sun.svg'
import moonPic from  '../../public/svg/moon.svg'






export default function Header2() {

    const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
        const isAndroid = () => Boolean(userAgent.match(/Android/i))
        const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
        const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
        const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
        const isSSR = () => Boolean(userAgent.match(/SSR/i))
        const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
        const isDesktop = () => Boolean(!isMobile() && !isSSR())
        return {
          isMobile,
          isDesktop,
          isAndroid,
          isIos,
          isSSR,
        }
      }

    const useMobileDetect = () => {
        useEffect(() => {}, [])
        const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
        return getMobileDetect(userAgent)
    }
    
    let router = useRouter();
    let t = Util.getLocale(router);
    let isLargeScreen : boolean = true;
    isLargeScreen = useMobileDetect().isMobile(); 


    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={ isDarkmode ?  styles.headerContainerDark : styles.headerContainerLight }>
            <nav className="navbar navbar-expand-lg">
                <Link href={`/`}>
                    <a className='inline-flex items-center lg:ml-5'>
                        <Image
                            src={logoPic}
                            width={50}
                            height={50}
                            className={styles.logo} />
                        <span className={styles.logoname}>{Constants.NAME}</span>
                    </a>
                </Link>
                <div className={styles.hamburgerMenuContainer} >
                    <button className={styles.hamburgerMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        { isDarkmode ?
                                <Image
                                    src={menuPicWhite}
                                    width={20}
                                    height={20}
                                    
                                />
                                :
                                <Image
                                    src={menuPic}
                                    width={20}
                                    height={20}
                                />
                        }
                    </button>
                </div>

                {/* Headers */}
                { isLargeScreen ?
                
                <div className={`collapse navbar-collapse ${styles.end}`} id="navbarSupportedContent">
                    {sunAndMoon(isDarkmode)}
                    <Link href={`/${PathPage.SERVICES}`}><a data-bs-toggle="collapse" data-bs-target={'#navbarSupportedContent'} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className={styles.headerLink}>{t.header.services}</a></Link>
                    <Link href={`/${PathPage.BLOG}`}><a data-bs-toggle="collapse" data-bs-target={'#navbarSupportedContent'} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className={styles.headerLink}>{t.header.blog}</a></Link>
                    <Link href={`/${PathPage.TRANSLATIONS}`}><a data-bs-toggle="collapse" data-bs-target={'#navbarSupportedContent'} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className={styles.headerLink}>{t.header.languages}</a></Link>
                    <div className={'my-3 sm:my-20'}>
                        <Button label={t.header.buttonContactMe} callback={() => {return router.push('/contact')}}></Button>
                    </div>
                </div>
                :
                <div className={`collapse navbar-collapse ${styles.end}`} id="navbarSupportedContent">
                    {sunAndMoon(isDarkmode)}
                    <button className={styles.headerLink} onClick={()=>{return router.push(`/${PathPage.SERVICES}`)}}>{t.header.services}</button>
                    <button className={styles.headerLink} onClick={()=>{return router.push(`/${PathPage.BLOG}`)}}>{t.header.blog}</button>
                    <button className={styles.headerLink} onClick={()=>{return router.push(`/${PathPage.TRANSLATIONS}`)}}>{t.header.languages}</button>
                    <div className={'my-3 mx-3'}>
                        <Button label={t.header.buttonContactMe} callback={() => {return router.push('/contact')}}></Button>
                    </div>
                </div>
                    
                }
                    
            </nav>
        </div>
    )
}

function sunAndMoon (isDarkmode : boolean) {

    const dispatch = useAppDispatch();

    return (
        <button 
        className={styles.iconContainer}
        onClick={
            () => {
                dispatch(toggleDarkmode());
            }
        }
    >
        {isDarkmode ? 
        <Image 
            src={sunPic}
            width={20}
            height={20}
            alt={'Sun icon'}
        /> : 
        <Image 
            src={moonPic}
            width={20}
            height={20}
            alt={'Moon icon'}
        />
        }
    </button>
    );
}

