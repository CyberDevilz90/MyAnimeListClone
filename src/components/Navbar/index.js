import Link from "next/link";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="bg-gray-700">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row">
        <Link href="/" className="text-2xl font-bold text-white">
          My Anime List Clone
        </Link>
        <SearchInput />
      </div>
    </header>
  );
};

export default Navbar;
