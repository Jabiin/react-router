import { Outlet, Link } from "react-router-dom";
import Services from "../components/Services";
function Contact() {
  return (
    <>
      <div className="flex justify-between ">
        <h1 className="bold ">GREENFOID</h1>
        <ul className="flex gap-8 pr-40 ">
          <li className="cursor-pointer">
            <Link to={`/`}> Home </Link>
          </li>
          <li className="cursor-pointer"> contact</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>
      <div>
        <Services />
      </div>
    </>
  );
}

export default Contact;
