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



export default function Header() {

    let router = useRouter();
    let t = Util.getLocale(router);


    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return (
        <div className={ isDarkmode ?  styles.headerContainerDark : styles.headerContainerLight }>
            <nav className="navbar navbar-expand-lg">
                <Link href={`/`}>
                    <a className='inline-flex items-center lg:ml-5'>
                        <Image
                            src={logoPic}
                            width={70}
                            height={70}
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
                <div className={`collapse navbar-collapse ${styles.end}`} id="navbarSupportedContent">
                    <HeaderChild title={t.header.services} code={2} page={PathPage.SERVICES}></HeaderChild>
                    <HeaderChild title={t.header.blog} code={1} page={PathPage.BLOG}></HeaderChild>
                    <HeaderChild title={t.header.languages} code={0} page={PathPage.TRANSLATIONS}></HeaderChild>
                    <div className={'mr-5 my-3 sm:my-20'}>
                        <Button label={t.header.buttonContactMe} callback={() => {return router.push('/contact')}}></Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

