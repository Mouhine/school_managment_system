import React from "react";
import { IoSchoolOutline } from "react-icons/io5";

const NavHeader = () => {
  return (
    <div className="h-28 flex items-center space-x-3  pl-10 pt-2 text-gray-50 ">
      <div>
        <IoSchoolOutline size={40} />
      </div>
      <h1 className="font-bold tracking-wide text-lg">HEADSTART</h1>
    </div>
  );
};

export default NavHeader;
