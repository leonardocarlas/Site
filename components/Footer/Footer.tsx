import styles from './Footer.module.scss';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Image from 'next/image'
import Link from 'next/link';

import logoPic from '../../public/svg/logo.svg'
import githubPic from '../../public/svg/github.svg';
import githubPicWhite from '../../public/svg/white/github-white.svg';
import linkedinPic from '../../public/svg/linkedin.svg';
import linkedinPicWhite from '../../public/svg/white/linkedin-white.svg';
import utilStyles from '../../styles/utils.module.scss';

export default function Footer () {


  const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
  
  return (
    <div className={isDarkmode ? styles.footerContainerDark : styles.footerContainerLight}>
        <div className={'p-2'}>
          <Image
              src={logoPic}
              width={80}
              height={80}
              className={styles.logo}
              alt={'Logo Image Leonardo Carlassare'}
          />
        </div>
        <p className={utilStyles.headingMd} >This website has been developed with blood and pain alongside Next.js and Tailwind</p>
        <p className={utilStyles.headingMd}>info@leonardocarlassare.com</p>
        <p className={utilStyles.headingMd}>www.leonardocarlassare.com</p>
        <p className={utilStyles.headingMd}>All rights reserved, 2022</p>
        <span><Link href={`/`}><a className={utilStyles.headingMd}>Privacy</a></Link><Link href={`/`}><a className={utilStyles.headingMd}>Cookie</a></Link></span>
        <div className={styles.imageContainer}>
            <Link href={'https://github.com/leonardocarlas'}><a><Image width={67} height={67} src={isDarkmode ? githubPicWhite : githubPic} alt={'Github profile'} /></a></Link>
            <Link href={'https://www.linkedin.com/in/leonardo-carlassare-03aa491b5/'}><a><Image width={80} height={80} src={isDarkmode ? linkedinPicWhite : linkedinPic} alt={'Linkedin Profile'}/></a></Link>
        </div>
    </div>
  );

}