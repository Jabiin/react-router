import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between ">
      <h1 className="bold ">GREENFOID</h1>
      <ul className="flex gap-8 pr-40 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">
          <Link to={`contact`}> contact </Link>
        </li>
        <Link to={`services`}> services </Link>
      </ul>
    </div>
  );
}

export default Navbar;
