import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss';
import { Constants } from '../constants/constants';
import { useRouter } from 'next/router';
import {Util} from '../utils/util'
import { useAppSelector } from '../redux/hooks';
import Image from 'next/image';
import Button from '../components/Button/Button';
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
import cdcLOGO from '../public/svg/cdcLOGO.svg';
import ecobraciLOGO from '../public/svg/ecobraciLOGO.svg';
import TimelineSection from '../components/TimelineSection/TimelineSection';





export default function Home() {

  let router = useRouter();
  let t = Util.getLocale(router);

  const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

  return (

    <>
      <Head>
        <title>{Constants.SITETITLE}</title>
        
      </Head>

      <Section1></Section1>

      <div className={styles.layer1}></div>

      <div className={styles.secondContainer}>
        <p className={utilStyles.title}>{t.section2.title}</p>
        <br></br>
        <p className={utilStyles.subtitle}>{t.section2.subtitle}</p>
      </div>

      <div className={isDarkmode ? styles.workContainerDark : styles.workContainerLight}>
          <Board></Board>
          <p className={`${utilStyles.title} mt-20`} >{t.recentWorks.title}</p>
          <p className={utilStyles.subtitle}>{t.recentWorks.subtitle}</p>
          <div className={'flex flex-row flex-wrap justify-center p-10'}>
            <a rel="noopener noreferrer" target={'_blank'} href={'https://www.cdccostruzioniedili.it/'}  className={'mx-5'}><Image src={cdcLOGO} width={250} height={250}></Image></a>
            <a rel="noopener noreferrer" target={'_blank'} href={'https://www.ecobracigroup.it/'} className={'mx-5'}><Image src={ecobraciLOGO} width={250} height={250}></Image></a>
          </div>
        </div>

      <div className={styles.startupContainer}>
        <p className={`${utilStyles.title} `}>{t.projects.title}</p>
        <Startup img={collectionitePic} name={t.projects.startup} period={t.projects.period} link={'https://github.com/leonardocarlas/Collectionite-code'} isOnline={false} text={t.projects.description}></Startup>
        <p className={`${utilStyles.subtitle} `}>{t.projects.collaborations}</p>
        <Button label={t.projects.contactButton} callback={() => {return router.push('/contact')}}></Button>
      </div>

      <TimelineSection></TimelineSection>

      <div className={styles.fifthContainer}>
        <p className={`${utilStyles.title} text-white `}>{t.languageSection.title}</p>
        <div className={styles.row}>
          <Language language={t.languageSection.esFront} image={esPic} backText={Constants.ES_BACK} ></Language>
          <Language language={t.languageSection.itFront} image={itPic} backText={Constants.IT_BACK} ></Language>
          <Language language={t.languageSection.enFront} image={enPic} backText={Constants.EN_BACK} ></Language>
        </div>
        <div className={styles.row}>
          <Language language={t.languageSection.frFront} image={frPic} backText={Constants.FR_BACK} ></Language>
          <Language language={t.languageSection.ptFront} image={ptPic} backText={Constants.PT_BACK} ></Language>
        </div>
      </div>
    </>
    
  )
  
}
