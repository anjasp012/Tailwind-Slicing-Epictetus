import Head from "next/head";
import Layout from "../components/Layout";
import NewsAuthor from "../components/NewsAuthor";
import NewsInfo from "../components/NewsInfo";
import NewsTitle from "../components/NewsTitle";

export default function NewsDetail() {
  return (
    <Layout>
      <Head>
        <title>NewsDetail &mdash; Epictetus </title>
      </Head>
      <div className="flex flex-col items-center md:w-6/12 w-full mx-auto">
        <NewsTitle
          categories="UI Design"
          date="July 2, 2021"
          title="Understanding color theory: the color wheel and finding complementary colors"
          href="#"
          center
        />
        <NewsAuthor
          profileAuthor="Author-2.png"
          nameAuthor="Leslie Alexander"
          profesionAuthor="UI Designer"
        />
      </div>
      <div className="md:w-10/12 w-full mx-auto pt-8 pb-16 mb-1.5">
        <img src="bigNews.png" className="w-full rounded" alt="" />
      </div>
      <div className="md:w-8/12 w-full mx-auto">
        <p className="text-xl pb-4">
          Male sixth sea it a. Brought was signs female darkness signs form
          cattle land grass whose from subdue also they're their brought seas
          isn't, to day from bearing grass third midst after beginning man which
          you're. Dry, gathering beginning given made them evening.
        </p>
        <p className="pb-6">
          Lights dry. Thing, likeness, forth shall replenish upon abundantly our
          green. Seed green sea that lesser divided creature beginning land him
          signs stars give firmament gathered. Wherein there their morning a he
          grass. Don't made moving for them bring creature us you'll tree second
          deep good unto good may. Us yielding.
        </p>
        <p className="">
          Have. Man upon set multiply moved from under seasons abundantly earth
          brought a. They're open moved years saw isn't morning darkness. Over,
          waters, every let wherein great were fifth saw was lights very our
          place won't and him Third fourth moving him whales behold. Beast
          second stars lights great was don't green give subdue his. Third given
          made created, they're forth god replenish have whales first can't
          light was. Herb you'll them beast kind divided. Were beginning fly air
          multiply god Yielding sea don't were forth.
        </p>
      </div>
    </Layout>
  );
}
