import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <>
    <div>Boat Bar</div>
    <ul>
      <li>
        <a href="#">Home</a>{" "}
      </li>
      <li>
        <a href="#">About</a>{" "}
      </li>
      <li>
        <a href="#">Contact</a>{" "}
      </li>
    </ul>
    <CartWidget />
  </>
);
