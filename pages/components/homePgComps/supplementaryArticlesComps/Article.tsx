import React from "react";
import { supplementaryArticlesInterface } from "../../../../interface/home.interface";

interface ArticleInterface {
  article: supplementaryArticlesInterface;
  index: number;
}

export default function Article(props: ArticleInterface) {
  const { article, index } = props ?? {};
  const { title, body } = article ?? {};

  const evenIndex = index % 2 === 0 ? true : false;

  return (
    <article
      className={`  bg-white  text-black	flex flex-col min-w-[50%] font-bd-retrocentric p-8 space-y-2 ${
        evenIndex
          ? ` self-start rounded-r-lg mr-32`
          : `self-end rounded-l-lg ml-32`
      }`}
    >
      <section className="flex flex-row min-w-full">
        <section className="flex flex-row min-w-full justify-between">
          <section className="flex flex-col uppercase space-y-2">
            <h2>{title}</h2>
          </section>
        </section>
      </section>
      <section className="space-y-2  min-w-full">
        <article className="flex flex-col space-x-2">
          <p className="font-tektur">{body}</p>
        </article>
      </section>
    </article>
  );
}
