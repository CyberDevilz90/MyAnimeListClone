import Link from "next/link";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          My Anime List Clone
        </Link>
        <SearchInput />
      </div>
    </header>
  );
};

export default Navbar;
