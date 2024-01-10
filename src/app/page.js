import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/top/anime?limit=10`);
  const topAnime = await response.json();

  return (
    <div>
    <section>
      <Header title="Popular" linkHref="/popular" linkTitle="See All"/>
      <AnimeList api={topAnime} />
    </section>
    </div>
  );
};

export default Page;
