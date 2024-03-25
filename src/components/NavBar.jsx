import { CartWidget } from "./CartWidget";
import { Brand } from "./Brand";

const NavBar = ({ items }) => (
  <>
    <Brand />
    <div className="flex w-full justify-around mt-10 gap-20 items-center">
      <ul className=" flex justify-between w-3/4 border-l-indigo-500">
        <li>
          <a className="hover:border-y hover:border-orange p-2" href="#">
            Home
          </a>{" "}
        </li>
        <li>
          <a className="hover:border-y hover:border-orange p-2" href="#">
            About
          </a>{" "}
        </li>
        <li>
          <a className="hover:border-y hover:border-orange p-2" href="#">
            Contact
          </a>{" "}
        </li>
      </ul>
      <CartWidget items={items} />
    </div>
  </>
);

export default NavBar;
