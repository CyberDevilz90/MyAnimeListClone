import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => {
  return (
    <div className="grid grid-cols-2 gap-2 px-4 md:grid-cols-5 sm:grid-cols-3">
    {api.data.map((anime) => {
      return (
        <Link href={`/${anime.mal_id}`} className="cursor-pointer" key={anime.mal_id}>
          <Image
          src={anime.images.webp.image_url}
          alt=".."
          width={350}
          height={350}
          className="object-cover w-full max-h-64 "
          />
          <h3 className="p-4 text-sm font-bold text-white md:text-md">{anime.title}</h3>
      </Link>
      )
    })}
      </div>
  );
};

export default AnimeList;
