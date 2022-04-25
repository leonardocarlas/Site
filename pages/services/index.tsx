import { Head } from "next/document";
import Layout from "../../components/Layout/Layout";
import { Constants } from "../../constants/constants";



export default function Services() {
    return (
      <Layout services>
        <Head>
          <title>Services | {Constants.SITETITLE}</title>
        </Head>
      </Layout>
    )
  }