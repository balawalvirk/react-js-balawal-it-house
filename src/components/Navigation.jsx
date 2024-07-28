import { Link } from "react-router-dom";
import Logo from "../assets/BITH-Logo.svg";
import Button from "./Button";

function Navigation() {
  return (
    <header>
      <nav
        className="py-[8px] px-12"
        style={{ borderBottom: "0.5px solid #C5C5C5" }}
      >
        <div className="flex justify-between flex-wrap">
          {/* <div className="flex gap-2 items-center"> */}
          <img src={Logo} height={32} alt="" />
          <ul className="items-center gap-[2.5rem] hidden lg:flex">
            <li>
              <Link className="nav-item" to={"/about-us"}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-item" to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-item" to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-item" to={"/team"}>
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-item" to={"/articles"}>
                Articles
              </Link>
            </li>
            <li>
              <a className="nav-item">Contact Us</a>
            </li>
            <li>
              <Button
                label={"Get Free Strategy Call"}
                labelClassName={"text-[14px]"}
              />
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Navigation;