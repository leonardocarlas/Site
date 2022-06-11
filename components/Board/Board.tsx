import styles from './Board.module.scss';
import Image from 'next/image';
import frontedPic from '../../public/svg/frontend.svg';
import dbPic from '../../public/svg/db.svg';
import devopsPic from '../../public/svg/operations.svg';
import codePic from '../../public/svg/code.svg';
import utilStyles from '../../styles/utils.module.scss';
import { useRouter } from 'next/router';
import { Util } from '../../utils/util';

export default function Board () {

    let router = useRouter();
    let t = Util.getLocale(router);

    return (
        <>
        <div className={styles.boardContainer} data-testid='board'>
            <div className={styles.board}>
                <div className={styles.up}>
                    <div className={styles.card}>
                        <p className={utilStyles.headingMd}>{t.board.frontend}</p>
                        <div>
                            <Image
                                src={frontedPic}
                                height={50}
                                width={50}
                            />
                        </div>
                        <p>Next.js, React, Angular,
                            CSS, Scss, Sass,
                            Typescript, Javascript, Flutter, Dart
                        </p>
                    </div>
                    <div className={styles.card}>
                        <p className={utilStyles.headingMd}>{t.board.backend}</p>
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
                    <div className={styles.card}>
                        <p className={utilStyles.headingMd}>{t.board.devops}</p>
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
                <div className={`${styles.card} ${styles.noborder}`} >
                    <p className={utilStyles.headingMd}>{t.board.otherProgrammingLanguages}</p>
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