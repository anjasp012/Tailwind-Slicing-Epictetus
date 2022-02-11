import { useState } from "react";
import CardNews from "./CardNews";
import Container from "./Container";
import PostAPI from "../pages/api/PostsAPI.json";

export default function NewsSection() {
  const [newest, setNews] = useState(PostAPI);

  return (
    <article className="pt-10 mt-1 -z-40">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-[30px] gap-y-[60px]">
        {newest.map((news, id) => (
          <div key={id} className="group">
            <CardNews {...news} />
          </div>
        ))}
      </div>
    </article>
  );
}
