import Head from "next/head";
import { useState } from "react";
import CardNews from "../components/CardNews";
import HeaderSection from "../components/HeaderSection";
import Layout from "../components/Layout";
import PostsAPI from "./api/PostsAPI.json";

export default function Posts() {
  const [newest, setNewest] = useState(PostsAPI);

  return (
    <Layout>
      <Head>
        <title>UI Design &mdash; Epictetus </title>
      </Head>
      <HeaderSection>UI Design</HeaderSection>
      <article className="pt-10 mt-1 -z-40">
        {!newest.length ? (
          <div className="text-center">
            <h2 className="text-[64px]">No result 😥</h2>
            <p className="text-xl w-full md:w-6/12 mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-[30px] gap-y-[60px]">
            {newest.map((news, id) => (
              <div key={id} className="group">
                <CardNews {...news} />
              </div>
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
}
