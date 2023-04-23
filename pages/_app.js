import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Store from "@/utils/store";
import "../utils/all.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abdullah Ayman</title>
      </Head>
      <Store>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Store>
    </>
  );
}
