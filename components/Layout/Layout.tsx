import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import { Constants } from '../../constants/constants';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';



export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout( props : LayoutProps ) {
    


  return (
      <div>
        <Head>
          <title>{Constants.SITETITLE}</title>
        </Head>
        <Header></Header>
        <SubHeader></SubHeader>
        
        


        

        <main>{props.children}</main>

        
      </div>
    )
  }