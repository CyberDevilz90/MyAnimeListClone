"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchInput = () => {

    const router = useRouter()
    const searchReff = useRef()

    const handleSearch = (event) => {
      const keyword = searchReff.current.value
      if (!keyword) return
        event.preventDefault()
        router.push(`/search/${keyword}`)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.type === "click") {
        handleSearch(event)
      }
    }

  return (
    <div className="relative">
      <input placeholder="Cari Anime" className="w-full p-2 rounded" ref={searchReff} onKeyDown={handleKeyDown}/>
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
