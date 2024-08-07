import { Link } from "react-router-dom";
import Logo from "../assets/BITH-Logo.svg";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <nav
        className="py-[8px] px-12"
        style={{ borderBottom: "0.5px solid #C5C5C5" }}
      >
        <div className="flex justify-between flex-wrap">
          {/* <div className="flex gap-2 items-center"> */}
          <Link to={"/"} className="flex items-center">
            <img src={Logo} height={32} alt="" />
          </Link>
          <MenuIcon className="mt-1 cursor-pointer" onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Link className="nav-item" onClick={handleClose} to={"/about-us"}>
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="nav-item" onClick={handleClose} to={"/services"}>
                Services
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className="nav-item"
                onClick={handleClose}
                to={"/portfolio"}
              >
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="nav-item" onClick={handleClose} to={"/team"}>
                Team
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="nav-item" onClick={handleClose} to={"/articles"}>
                Articles
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className="nav-item"
                onClick={handleClose}
                to={"/contact-us"}
              >
                Contact Us
              </Link>
            </MenuItem>
            <MenuItem>
              <Button
                label={"Get Free Strategy Call"}
                labelClassName={"text-[14px]"}
              />
            </MenuItem>
          </Menu>
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
              <Link className="nav-item" to={"/contact-us"}>
                Contact Us
              </Link>
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
