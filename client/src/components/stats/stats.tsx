import React from "react";
import Stat from "./stat";
import { stats } from "../../data/stats";

const Stats = () => {
  return (
    <div className="flex items-center w-full my-3 justify-center space-x-3 px-4">
      {stats.map((ele, i) => {
        return (
          <Stat title={ele.title} Icon={ele.icon} data={ele.data} key={i} />
        );
      })}
    </div>
  );
};

export default Stats;
