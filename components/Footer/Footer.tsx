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
import { Constants } from '../../constants/constants';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';

export default function Footer () {

  const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
  let router = useRouter();
  let t = Util.getLocale(router);
  
  return (
    <div className={isDarkmode ? styles.footerContainerDark : styles.footerContainerLight} data-testid="container">
        <div className={'p-2'}>
          <Image
              src={logoPic}
              width={80}
              height={80}
              className={styles.logo}
              alt={'Logo Image Leonardo Carlassare'}
          />
        </div>
        <p className={utilStyles.headingMd}>{t.footer.websiteStack}</p>
        <p className={utilStyles.headingMd}>{Constants.MAIL} </p>
        <p className={utilStyles.headingMd}> {Constants.WEBSITEURL} </p>
        <p className={utilStyles.headingMd}>{t.footer.rights}</p>
        {/* <span><Link href={`/`}><a className={utilStyles.headingMd}>{Constants.PRIVACY} </a></Link><Link href={`/`}><a className={utilStyles.headingMd}> {Constants.COOKIE} </a></Link></span> */}
        <div className={styles.imageContainer}>
            <Link href={'https://github.com/leonardocarlas'}><a><Image width={55} height={55} src={isDarkmode ? githubPicWhite : githubPic} alt={'Github profile'} /></a></Link>
            <Link href={'https://www.linkedin.com/in/leonardo-carlassare-03aa491b5/'}><a><Image width={70} height={70} src={isDarkmode ? linkedinPicWhite : linkedinPic} alt={'Linkedin Profile'}/></a></Link>
        </div>
    </div>
  );

}