import React from "react";
import { IconType } from "react-icons";

const Stat = ({
  title,
  data,
  Icon,
}: {
  title: string;
  data: string | number;
  Icon: IconType;
}) => {
  return (
    <div className="flex items-center space-x-2 divide-x justify-center px-4 py-4 bg-statGreen text-white rounded flex-grow-o  ">
      <div>
        <Icon size={40} />
      </div>

      <hr />

      <div className="px-3 space-y-0">
        <h2>{title}</h2>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default Stat;
