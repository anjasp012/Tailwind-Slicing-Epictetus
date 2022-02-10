import NewsInfo from "./NewsInfo";

export default function Header() {
  return (
    <article className="container mx-auto px-24 pt-3 -z-40">
      <div className="flex -mx-4">
        <div className="w-8/12 px-4">
          <img src="section1.png" className="rounded-xl" alt="" />
        </div>
        <div className="w-4/12 px-4">
          <NewsInfo
            categories="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            descriptionWidth="w-10/12"
            profileAuthor="Ellipse 1.png"
            nameAuthor="Leslie Alexander"
            profesionAuthor="UI designer"
          />
        </div>
      </div>
    </article>
  );
}
