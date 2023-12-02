import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 px-4">
    {api.data.map((anime) => {
      return (
        <Link href={`/${anime.mal_id}`} className="cursor-pointer" key={anime.mal_id}>
          <Image
          src={anime.images.jpg.image_url}
          alt=".."
          width={350}
          height={350}
          className="w-full max-h-64 object-cover "
          />
          <h3 className="font-bold p-4 md:text-md text-sm">{anime.title}</h3>
      </Link>
      )
    })}
      </div>
  );
};

export default AnimeList;
