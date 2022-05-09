import styles from './Board.module.scss';
import Image from 'next/image';
import frontedPic from '../../public/svg/frontend.svg';
import dbPic from '../../public/svg/db.svg';
import devopsPic from '../../public/svg/devops.svg';
import codePic from '../../public/svg/code.svg';
import utilStyles from '../../styles/utils.module.scss';

export default function Board () {

    return (
        <>
        <div className={styles.boardContainer}>
            <div className={styles.board}>
                <div className={styles.up}>
                    <div className={styles.one}>
                        <p className={utilStyles.headingMd}>Frontend Skills</p>
                        <div>
                            <Image
                                src={frontedPic}
                                height={50}
                                width={50}
                            />
                        </div>
                        <p>Next.js, React, Angular,
                            UX/UI design, <br></br> CSS, Scss, Sass,
                            Typescript, Javascript, Flutter, Dart
                        </p>
                    </div>
                    <div className={styles.two}>
                    <p className={utilStyles.headingMd}>Backend Skills</p>
                        <div>
                            <Image
                                src={dbPic}
                                height={50}
                                width={50}
                            />
                        </div>
                        <p>Nest.js, Php, Nodejs, <br></br>
                           MySQL, PostgreSQL, SQL, Mongodb
                        </p>
                    </div>
                    <div className={styles.three}>
                        <p className={utilStyles.headingMd}>DevOps Skills</p>
                        <div>
                            <Image
                                src={devopsPic}
                                height={50}
                                width={50}
                            />
                        </div>
                        <p>GitHub Actions, Git, Jira</p>
                    </div>
                </div>
                <div className={styles.down}>
                    <p className={utilStyles.headingMd}>Other programming languages</p>
                    <div>
                        <Image
                            src={codePic}
                            height={50}
                            width={50}
                        />
                    </div>
                    <p>Python, Java, C, C++</p>
                </div>
            </div>
        </div>
        </>
    );

}