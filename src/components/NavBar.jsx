import { CartWidget } from "./CartWidget";
import { Brand } from "./Brand";
export const NavBar = () => (
  <>
    <Brand />
    <div className="flex w-full justify-around mt-10 gap-20 items-center">
      <ul className=" flex justify-between w-3/4">
        <li className="relative">
          <a className=" hover:border-b-2 hover:border-orange " href="#">
            Home
          </a>{" "}
        </li>
        <li>
          <a className=" hover:border-b-2 hover:border-orange " href="#">
            About
          </a>{" "}
        </li>
        <li>
          <a className=" hover:border-b-2 hover:border-orange " href="#">
            Contact
          </a>{" "}
        </li>
      </ul>
      <CartWidget />
    </div>
  </>
);
