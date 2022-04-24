import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import { Constants } from '../../constants/constants';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';


export default function Layout(
  {
    children,
    home
  } : {
    children: React.ReactNode
    home?: boolean
  }
  ) {
    return (
      <div>
        <Head>
          <title>{Constants.SITETITLE}</title>
        </Head>
        <Header></Header>
        <SubHeader></SubHeader>


        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={Constants.NAME}
              />
              <h1 className={utilStyles.heading2Xl}>{Constants.NAME}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={Constants.NAME}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{Constants.NAME}</a>
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    )
  }