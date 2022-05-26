import Service from '../../components/Service/Service';
import styles from './Services.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Image from 'next/image';
import Pic1 from '../../public/svg/db.svg';
import webPic from '../../public/svg/web.svg';
import apiPic from '../../public/svg/api.svg';
import smarthomePic from '../../public/svg/smart-home.svg';
import lanPic from '../../public/svg/lan.svg';
import cplexPic from '../../public/svg/cplex.svg';
import gearPic from '../../public/svg/gear.svg'; 
import gearPicWhite from '../../public/svg/white/gear-white.svg'; 
import Button from '../../components/Button/Button';
import router from 'next/router';
import { useAppSelector } from '../../redux/hooks';

export default function Services() {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    
    return (
        <>
            <div className={isDarkmode ? styles.sectionDark : styles.sectionLight}>
                <div className={styles.leftContainer}>
                    <p className={`${utilStyles.title} ${styles.title}`}>Services</p>
                    <p className={`${utilStyles.subtitle} ${styles.subtitle}`}> I am able to provide to privates and companies</p>
                </div>
                <div className={styles.imageContainer}>
                    {isDarkmode ? 
                      <Image
                            priority
                            src={gearPicWhite}
                            height={200}
                            width={200}
                            alt={'Image services'}
                        />  
                    : 
                        <Image
                            priority
                            src={gearPic}
                            height={200}
                            width={200}
                            alt={'Image services'}
                            />
                    }                    
                </div>  
            </div>
            
            <div className={styles.bannerBlue}>
                <div className={styles.container}>
                    <div className='flex flex-wrap flex-row justify-around px-20 '>
                        <Service img={webPic} title={'Website Development'} alt={''}></Service>
                        <Service img={apiPic} title={'API Development'} alt={''}></Service>
                        <Service img={smarthomePic} title={'Smart Home Configuration'} alt={''}></Service>
                    </div>
                    <div className='flex flex-wrap flex-row justify-around px-20'>
                        <Service img={lanPic} title={'Intranet Development'} alt={''}></Service>
                        <Service img={cplexPic} title={'Optimization Software'} alt={''}></Service>
                        <Service img={Pic1} title={'Data Analisys'} alt={''}></Service>
                    </div>
                    <div className='flex flex-row justify-center px-20 align-center px-20 sm:px-5 my-10'>
                        <div className='flex flex-wrap flex-col justify-center'>
                            <p className={`${utilStyles.subtitle} text-white my-10`}>Feel free to ask me anything</p>
                            <Button label={'Contact me!'} callback={() => {return router.push('/contact')}}></Button>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    );
}
