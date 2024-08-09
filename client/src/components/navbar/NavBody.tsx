import NavElement from "./navElement";
import { navElements } from "../../data/navElements";
const NavBody = () => {
  return (
    <div>
      {navElements.map((ele, i) => {
        return (
          <NavElement title={ele.title} Icon={ele.icon} url={ele.url} key={i} />
        );
      })}
    </div>
  );
};

export default NavBody;
