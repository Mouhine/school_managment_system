import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

const NavElement = ({
  title,
  Icon,
  url,
}: {
  title: string;
  Icon: IconType;
  url: string;
}) => {
  return (
    <Link
      to={`${url}`}
      className=" flex space-x-3  text-amber-50 items-center pl-10 py-6 ounded-lg border-none   "
    >
      <Icon size={20} />
      <h2 className=" ">{title}</h2>
    </Link>
  );
};

export default NavElement;
