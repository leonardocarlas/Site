import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss';
import { Constants } from '../constants/constants';
import { getSortedPostsData } from '../utils/posts'
import { GetStaticProps } from 'next/types'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {Util} from '../utils/util'
import { useAppSelector } from '../redux/hooks';
import Image from 'next/image';
import Button from '../components/Button/Button';
import bookPic from '../public/svg/book.svg';
import bookPicWhite from '../public/svg/white/book-white.svg';
import languagePic from '../public/svg/language.svg';
import paduaPic from '../public/svg/padua.svg';
import uclmPic from '../public/svg/uclm.svg';
import coimbraPic from '../public/svg/coimbra.svg';
import languagePicWhite from '../public/svg/white/language-white.svg';
import Startup from '../components/Startup/Startup';
import collectionitePic from '../public/svg/collectionite.svg';
import esPic from '../public/svg/flags/es.svg';
import enPic from '../public/svg/flags/us.svg';
import itPic from '../public/svg/flags/it.svg';
import ptPic from '../public/svg/flags/pt.svg';
import frPic from '../public/svg/flags/fr.svg';
import Board from '../components/Board/Board';
import University from '../components/University/University';
import Language from '../components/Language/Language';

export default function Home() {

  let router = useRouter();
  let t = Util.getLocale(router);
  console.log(t);
  //<p>{t?.intro}</p>



  const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

  return (

    <>
      <Head>
        <title>{Constants.SITETITLE}</title>
      </Head>

      <div className={isDarkmode ? styles.firstContainerDark : styles.firstContainerLight}>
        <p className={utilStyles.heading2Xl}>My name is Leonardo Carlassare.<br></br>I'm a Software Engineer.</p>
        <p className={utilStyles.headingXl}>I like to code, to work on startups and to learn new things every day.</p>
        <div className={styles.imageContainer}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={200}
            width={200}
            alt={Constants.NAME}
          ></Image>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <p className={utilStyles.heading2Xl}>Hi! I'm Leonardo, nice to meet you</p>
        <br></br>
        <p className={utilStyles.headingMd}>A brief introduction: I graduated in 2022 in Computer Engineering MSc at the University of Padua. Currently I'm workin as a Frontend Developer for Sysdata S.p.A.</p>
      </div>

      <Board></Board>

      <div className={isDarkmode ? styles.thirdContainerDark : styles.thirdContainerLight}>
        <div className={styles.space}></div>
        <p className={utilStyles.headingXl} >My recent works</p>
        <br></br>
        <p className={utilStyles.headingMd}>I developed the website for the following companies.</p>
      </div>


      <div className={styles.startupContainer}>
        <p className={utilStyles.headingXl} >Startup Projects Timeline</p>
        <Startup img={collectionitePic} name={'Collectionite'} period={'July 2020 - May 2021'} link={'https://github.com/leonardocarlas/Collectionite'} isOnline={false} text={'Collectionite was a web application for european cards collectors that could track automatically card prices for them and it was also a social network for people with the same passion. W e began a collaboration with the german company CardMarket using their APIs for gathering datas. The startup failed in June 2021 due to bad management.'}></Startup>
        <p className={utilStyles.headingMd}>Do you want to collaborate or invest?<br></br> I would like to take a coffee with you.</p>
        <Button label='Contact me' callback={() => {return router.push('/contact')}}></Button>
      </div>

      <div className={isDarkmode ? styles.fourthContainerDark : styles.fourthContainerLight}>
        
        <div className={styles.imageStudyContainer}>
          { isDarkmode ? 
            <Image
            src={bookPicWhite}
            height={80}
            width={80}
            alt={'book icon'}
            ></Image>
            : <Image
            src={bookPic}
            height={20}
            width={20}
            alt={'book icon white'}
            ></Image>
          }
        </div>

        <University name={'Università degli studi di Padova'} period={'October 2016 - September 2019'} program={'Computer Engineering - Bachelor degree'} image={paduaPic}></University>
        <University name={'Universidad de Castilla La Mancha'} period={'January 2020 - July 2020'} program={'Erasmus+ for Studies'} image={uclmPic} ></University>
        <University name={'Universidade de Coimbra'} period={'September 2021 - February 2022'} program={'Erasmus+ for Thesis'} image={coimbraPic} ></University>
        <University name={'Università degli studi di Padova'} period={'October 2019 - April 2022'} program={'Computer Engineering - Master degree'} image={paduaPic}></University> 
          
        <div className={styles.imageStudyContainer}>
          { isDarkmode ? 
            <Image
            src={languagePicWhite}
            height={80}
            width={80}
            alt={'language icon'}
            ></Image>
            : <Image
            src={languagePic}
            height={20}
            width={20}
            alt={'language icon white'}
            ></Image>
          }
        </div>
        <Language language={'Reading - Speaking - Listening'} image={esPic} ></Language>
        <Language language={'Native Language'} image={itPic} ></Language>
        <Language language={'B2 Level'} image={enPic} ></Language>
        <Language language={'Loading ...'} image={frPic} ></Language>
        <Language language={'Reading - Speaking'} image={ptPic} ></Language>
        
      </div>
    </>
  )
  
}







