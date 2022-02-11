import Container from "./Container";
import NewsInfo from "./NewsInfo";

export default function FeaturedNews() {
  return (
    <article className="pt-3 pb-10 border-b border-white/40 sm:pb-4 sm:border-none -z-40">
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full lg:w-8/12 sm:w-7/12 px-4">
          <img src="section1.png" className="rounded-xl" alt="" />
        </div>
        <div className="w-full lg:w-4/12 sm:w-5/12 px-4">
          <NewsInfo
            href="/NewsDetail"
            categories="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            descriptionWidth="lg:w-full xl:w-10/12"
            profileAuthor="Ellipse 1.png"
            nameAuthor="Leslie Alexander"
            profesionAuthor="UI designer"
          />
        </div>
      </div>
    </article>
  );
}
