import utilStyles from '../../styles/utils.module.scss';
import University from '../University/University';
import styles from './TimelineSection.module.scss';
import paduaPic from '../../public/svg/padua.svg';
import coimbraPic from '../../public/svg/coimbra.svg';
import uclmPic from '../../public/svg/uclm.svg';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';

export default function TimelineSection() {

    const isDarkmode = useAppSelector((state) => state.darkmode.isDarkmode);
    let router = useRouter();
    let t = Util.getLocale(router);

    return(
        <div className={isDarkmode ? styles.fourthContainerDark : styles.fourthContainerLight}>
            <p className={`${utilStyles.title} ${isDarkmode ? styles.white : styles.black} pt-5`}>{t.studyCareer.title}</p>
            <div className='flex flex-row justify-center p-20 '>
                
                <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-fit">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={t.studyCareer.paduaMasterName} period={t.studyCareer.paduaMasterPeriod} program={t.studyCareer.paduaMasterProgram} image={paduaPic} link={'https://www.unipd.it/en/'}></University> 
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={t.studyCareer.coimbraErasmusName} period={t.studyCareer.coimbraErasmusPeriod} program={t.studyCareer.coimbraErasmusProgram} image={coimbraPic} link={'https://www.uc.pt/'} ></University>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={t.studyCareer.uclmErasmusName} period={t.studyCareer.uclmErasmusPeriod} program={t.studyCareer.uclmErasmusProgram} image={uclmPic} link={'https://www.uclm.es/'} ></University>
                    </li>         
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <University name={t.studyCareer.paduaBachelorName} period={t.studyCareer.paduaBachelorPeriod} program={t.studyCareer.paduaBachelorProgram} image={paduaPic} link={'https://www.unipd.it/en/'}></University>
                    </li>
                </ol>
            </div>
        </div>
    );
}
