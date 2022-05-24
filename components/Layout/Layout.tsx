import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import { Constants } from '../../constants/constants';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import Footer from '../Footer/Footer';

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout( props : LayoutProps ) {
    
  return (
      <div>
        <Head>
          <title>{Constants.SITETITLE}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header></Header>
        <SubHeader></SubHeader>
        <main>{props.children}</main>
        <Footer></Footer>
      </div>
    )
  }