import { useState } from "react";
import CardNews from "./CardNews";

export default function NewsSection() {
  const [newest, setNews] = useState([
    {
      id: "1",
      thumbnail: "thumbnail-2.png",
      categories: "Internet",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      nameAuthor: "Jenny Wilson",
      profileAuthor: "author-2.png",
      profesionAuthor: "Product Designer",
    },
    {
      id: "2",
      thumbnail: "thumbnail-3.png",
      categories: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      nameAuthor: "Esther Howard",
      profileAuthor: "author-3.png",
      profesionAuthor: "Enterpreneur",
    },
    {
      id: "3",
      thumbnail: "thumbnail-4.png",
      categories: "Internet",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      description:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      nameAuthor: "Robert Fox",
      profileAuthor: "author-4.png",
      profesionAuthor: "Front-end Enginering",
    },
    {
      id: "4",
      thumbnail: "thumbnail-5.png",
      categories: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      nameAuthor: "Esther Howard",
      profileAuthor: "author-3.png",
      profesionAuthor: "Enterpreneur",
    },
    {
      id: "5",
      thumbnail: "thumbnail-6.png",
      categories: "Internet",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      description:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      nameAuthor: "Robert Fox",
      profileAuthor: "author-4.png",
      profesionAuthor: "Front-end Enginering",
    },
    {
      id: "6",
      thumbnail: "thumbnail-7.png",
      categories: "Internet",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      nameAuthor: "Jenny Wilson",
      profileAuthor: "author-2.png",
      profesionAuthor: "Product Designer",
    },
  ]);

  return (
    <article className="container mx-auto px-24 pt-14 pb-24 mt-1 -z-40">
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px]">
        {newest.map((news, id) => (
          <div key={id} className="group">
            <CardNews {...news} />
          </div>
        ))}
      </div>
    </article>
  );
}
