import styles from './Header.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/logo.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import menuPicWhite from '../../public/svg/white/hamburger-menu-white.svg'
import Script from 'next/script'
import HeaderChild from '../HeaderChild/HeaderChild'
import Button from '../Button/Button'
import router from 'next/router'
import { useAppSelector } from '../../redux/hooks'



export default function Header() {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
    <div className={ isDarkmode ?  styles.headerContainerDark : styles.headerContainerLight }>
        <nav className="flex items-center justify-between flex-wrap z-10 ">
            
            

            <div className="flex items-center flex-shrink-0">
                <Link href={`/`}>
                    <a className='inline-flex items-center'>
                        <Image
                            src={logoPic}
                            width={80}
                            height={80}
                            className={styles.logo} />
                        <span className={styles.logoname}>{Constants.NAME}</span>
                    </a>
                </Link>
            </div>

            <div className={styles.hamburgerMenuContainer} >
                <button id="nav-toggle" className={styles.hamburgerMenu}>
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

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block lg:pt-0" id="nav-content">
                <div className={styles.dropdownMenu}>
                        <HeaderChild title={'Services'} code={2} page={'services'}></HeaderChild>
                        <HeaderChild title={'Blog'} code={1} page={'blog'}></HeaderChild>
                        <HeaderChild title={'Languages'} code={0} page={'languages'}></HeaderChild>
                        <Button label={'Contact me!'} callback={() => {return router.push('/contact')}}></Button>
                </div>
            </div>
        </nav>



        <Script id="show-banner" strategy="lazyOnload">
            {`  //Javascript to toggle the menu
		        document.getElementById('nav-toggle').onclick = function(){
			        document.getElementById("nav-content").classList.toggle("hidden");
		        }
            `}
        </Script>

    </div>

    )
}