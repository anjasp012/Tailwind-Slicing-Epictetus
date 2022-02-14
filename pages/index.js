import Head from "next/head";
import FeaturedNews from "../components/FeaturedNews";
import Layout from "../components/Layout";
import NewsSection from "../components/NewsSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Epictetus</title>
        </Head>
        <FeaturedNews />
        <NewsSection />
      </Layout>
    </>
  );
}
