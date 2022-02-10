import Dropdown from "./Dropdown";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="flex items-center space-x-12 mx-5">
      <NavItem />
      <Dropdown />
    </ul>
  );
}
