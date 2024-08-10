import React from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import UserAvatar from "./Avatar";

const HeadNav = () => {
  return (
    <div className="  h-24 flex items-center border-b-2 px-4 space-x-8 ">
      <Title />
      <SearchBar />
      <Notifications />
      <UserAvatar />
    </div>
  );
};

export default HeadNav;
