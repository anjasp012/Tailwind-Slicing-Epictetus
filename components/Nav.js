import Dropdown from "./Dropdown";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className="md:flex space-y-4 md:space-y-0 md:items-center md:space-x-12 p-8 md:p-0 mx-5">
      <NavItem />
      <Dropdown />
    </ul>
  );
}
