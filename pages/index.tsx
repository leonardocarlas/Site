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
import Section1 from '../components/Section1/Section1';

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

      <Section1></Section1>

      <div className={styles.layer1}></div>

      <div className={styles.secondContainer}>
        <p className={utilStyles.heading2Xl}>Hi! Nice to meet you.</p>
        <br></br>
        <p className={utilStyles.headingMd}>A brief self-introduction: I graduated in 2022 in Computer Engineering MSc at the University of Padua.<br></br> Currently I'm workin as a Frontend Developer for Sysdata S.p.A.</p>
      </div>

      <div className={isDarkmode ? styles.thirdContainerDark : styles.thirdContainerLight}>
        <div className={styles.space}></div>
        <p className={utilStyles.titleWhite} >My recent works</p>
        <br></br>
        <p className={utilStyles.headingMd}>I developed the website for the following companies.</p>
      </div>

      <div className={styles.startupContainer}>
        <p className={utilStyles.titleWhite} >Startup Projects Timeline</p>
        <Startup img={collectionitePic} name={'Collectionite'} period={'July 2020 - June 2021'} link={'https://github.com/leonardocarlas/Collectionite-code'} isOnline={false} text={'Collectionite was a web application for european cards collectioners that could track automatically cards prices for them and it was also a social network for people with the same passion. We began a collaboration with the german company CardMarket using their APIs for gathering datas. The development process ended in June 2021'}></Startup>
        <p className={utilStyles.headingMd}>Do you want to collaborate or invest?<br></br> I would like to take a coffee with you.</p>
        <Button label='Contact me' callback={() => {return router.push('/contact')}}></Button>
      </div>

      <div className={isDarkmode ? styles.fourthContainerDark : styles.fourthContainerLight}>
        
        <p className={utilStyles.titleWhite}>My Studies career</p>

        <University name={'Università degli studi di Padova'} period={'October 2016 - September 2019'} program={'Computer Engineering - Bachelor degree'} image={paduaPic} link={'https://www.unipd.it/en/'}></University>
        <University name={'Universidad de Castilla La Mancha'} period={'January 2020 - July 2020'} program={'Erasmus+ for Studies'} image={uclmPic} link={'https://www.uclm.es/'} ></University>
        <University name={'Universidade de Coimbra'} period={'September 2021 - February 2022'} program={'Erasmus+ for Thesis'} image={coimbraPic} link={'https://www.uc.pt/'} ></University>
        <University name={'Università degli studi di Padova'} period={'October 2019 - April 2022'} program={'Computer Engineering - Master degree'} image={paduaPic} link={'https://www.unipd.it/en/'}></University> 
          
      </div>

      <div className={isDarkmode ? styles.fifthContainerDark : styles.fifthContainerLight}>
        <p className={utilStyles.titleWhite}>Languages I'm trying to learn</p>
        <div className={styles.row}>
          <Language language={'Reading - Speaking - Listening'} image={esPic} backText={'Holaaaa, como estas?'} ></Language>
          <Language language={'Native Language'} image={itPic} backText={'Che sito noioso'} ></Language>
          <Language language={'B2 Level'} image={enPic} backText={'I have to thank Marine for improving my English level'} ></Language>
        </div>
        <div className={styles.row}>
          <Language language={'Loading ...'} image={frPic} backText={'J\'aime manger'} ></Language>
          <Language language={'Reading - Speaking'} image={ptPic} backText={'Tenho saudade do Coimbra'} ></Language>
        </div>
      </div>

    </>
    
  )
}







