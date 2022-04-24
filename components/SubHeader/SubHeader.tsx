import styles from './SubHeader.module.scss'
import Image from 'next/image'
import { Constants } from '../../constants/constants'
import Link from 'next/link'
import logoPic from '../../public/svg/paper-plane-outline.svg'
import menuPic from '../../public/svg/hamburger-menu.svg'
import HeaderChild from '../HeaderChild/HeaderChild'
import Button from '../Button/Button'
import sunPic from '../../public/svg/sun.svg'



export default function SubHeader() {


    return (
        <div className={styles.subheadercontainer}>
                <p>EN</p>
                <p>IT</p>
                <p>ES</p>
                <p>PT</p>
                <p>FR</p>
                <p>DE</p>
                <Image 
                    src={sunPic}
                    className={styles.darkLightImage}
                    width={20}
                    height={20}
                    alt={'Dark / light icon'}
                />
        </div>
    )
}