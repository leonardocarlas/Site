import utilStyles from '../../styles/utils.module.scss';
import University from '../University/University';
import styles from './TimelineSection.module.scss';
import paduaPic from '../../public/svg/padua.svg';
import coimbraPic from '../../public/svg/coimbra.svg';
import uclmPic from '../../public/svg/uclm.svg';
import { useAppSelector } from '../../redux/hooks';

export default function TimelineSection() {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);

    return(
        <div className={isDarkmode ? styles.fourthContainerDark : styles.fourthContainerLight}>
            <p className={`${utilStyles.title} ${isDarkmode ? styles.white : styles.black} pt-5`}>Study Career</p>
            <div className='flex flex-row justify-center p-20 '>
                
                <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-fit">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={'Università degli studi di Padova'} period={'October 2016 - September 2019'} program={'Computer Engineering - Bachelor degree'} image={paduaPic} link={'https://www.unipd.it/en/'}></University>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={'Universidad de Castilla La Mancha'} period={'January 2020 - July 2020'} program={'Erasmus+ for Studies'} image={uclmPic} link={'https://www.uclm.es/'} ></University>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={'Universidade de Coimbra'} period={'September 2021 - February 2022'} program={'Erasmus+ for Thesis'} image={coimbraPic} link={'https://www.uc.pt/'} ></University>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={'Università degli studi di Padova'} period={'October 2019 - April 2022'} program={'Computer Engineering - Master degree'} image={paduaPic} link={'https://www.unipd.it/en/'}></University> 
                    </li>
                </ol>
            </div>
        </div>
    );
}
