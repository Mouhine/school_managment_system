import React from "react";
import { RxAvatar } from "react-icons/rx";

const Avatar = () => {
  return (
    <div className="flex items-center space-x-1 ">
      <RxAvatar size={40} />
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-bold">Mohammed </span>
        <span>Admin</span>
      </div>
    </div>
  );
};

export default Avatar;
