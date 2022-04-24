import styles from './Header.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/paper-plane-outline.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import langPic from '../../public/svg/language.svg'
import Script from 'next/script'
import HeaderChild from '../HeaderChild/HeaderChild'
import Button from '../Button/Button'



export default function Header() {


    return (
    <div className={styles.headercontainer}>
        <nav className="flex items-center justify-between flex-wrap z-10 ">
            <div className="flex items-center flex-shrink-0">
                <Link href={`/`}>
                    <a className='inline-flex items-center'>
                        <Image
                            src={logoPic}
                            width={50}
                            height={50}
                            className={styles.logo} />
                        <span className={styles.logoname}>{Constants.NAME}</span>
                    </a>
                </Link>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center">
                        <Image
                            src={menuPic}
                            width={20}
                            height={20}
                        />
                </button>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block lg:pt-0" id="nav-content">
                <div className=" lg:flex justify-end flex-1 items-center">
                        <HeaderChild title={'Languages'} code={0} page={'languages'}></HeaderChild>
                        <HeaderChild title={'Blog'} code={1} page={'blog'}></HeaderChild>
                        <HeaderChild title={'Services'} code={2} page={'services'}></HeaderChild>
                        <Button label={'Contact me!'}></Button>
                </div>
            </div>
        </nav>


        <div className="container">

        </div>

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