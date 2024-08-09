import React from "react";
import NavHeader from "./NavHeader";
import NavBody from "./NavBody";

export default function LeftNavBar() {
  return (
    <nav className="h-screen bg-move w-1/6 ">
      <NavHeader />
      <NavBody />
    </nav>
  );
}
