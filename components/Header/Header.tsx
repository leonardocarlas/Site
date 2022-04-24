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
            <nav className='flex items-center flex-wrap place-content-between'>
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

                <button className='inline-flex lg:hidden ml-auto nav-toggler'>
                        <Image
                            src={menuPic}
                            width={20}
                            height={20}
                        />
                </button>

                <div className='hidden top-nav lg:inline-flex lg:flex-row lg:w-auto' id='dropdown'>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto flex flex-col'>
                        
                        <HeaderChild title={'Languages'} code={0} page={'languages'}></HeaderChild>
                        <HeaderChild title={'Blog'} code={1} page={'blog'}></HeaderChild>
                        <HeaderChild title={'Services'} code={2} page={'services'}></HeaderChild>
                        <Button label={'Contact me!'}></Button>
                    </div>
                </div>

            </nav>
        </div>

    )
}