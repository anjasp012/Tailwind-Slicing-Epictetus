import FeaturedNews from "../components/FeaturedNews";
import Layout from "../components/Layout";
import NewsSection from "../components/NewsSection";

export default function Home() {
  return (
    <>
      <Layout>
        <FeaturedNews />
        <NewsSection />
      </Layout>
    </>
  );
}
