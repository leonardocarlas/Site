import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import { Constants } from '../../constants/constants';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import { useRouter } from 'next/router';
import resources from '../../public/locales/i18n';



export default function Layout( {children,home,services} : { children: React.ReactNode,home?: boolean,services?: boolean}) {
    
  let router = useRouter();
  let t;
  if(router.locale === 'en')
    t = resources.enPage;
   /* 
    ? resources.enPage
    : router.locale === 'it'
    ? resources.itPage
    : router.locale === 'de'
    ? resources.dePage
    : router.locale === 'es'
    ? resources.esPage
    : router.locale === 'fr'
    ? resources.frPage
    : router.locale === 'pt'
    resources.ptPage;
  */
  return (
      <div>
        <Head>
          <title>{Constants.SITETITLE}</title>
        </Head>
        <Header></Header>
        <SubHeader></SubHeader>
        
        <ul>
          {router.locales?.map(
            (locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                <a>
                  {locale}
                </a>
              </Link>
              </li>
            )
          )}
        </ul>

        <a>{t?.intro}</a>

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