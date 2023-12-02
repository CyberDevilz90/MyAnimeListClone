import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {

  const {keyword} = params
  const decode = decodeURIComponent(keyword)
  const response = await fetch(`${process.env.BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <div>
    <section>
      <Header title={`Search for : ${decode}`} />
      <AnimeList api={searchAnime} />
    </section>
    </div>
  );
};

export default Page;
