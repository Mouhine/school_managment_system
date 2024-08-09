import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center flex-1 w-[600px] relative rounded-md border ">
        <IoSearch size={20} className="absolute left-3 " />
        <input
          type="text"
          placeholder="Search"
          className=" pl-10 rounded-md px-2 py-2 w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
