import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";

const Navbar = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      icon: <BsCart4 />,
      path: "/cart",
    },
  ];
  return (
    <>
      <nav className="flex justify-between items-center px-7 md:px-10 h-[60px] md:h-20 bg-teal-500">
        <p className="text-white italic text-[22px] font-bold">eShop</p>
        <div className=" justify-end gap-3 items-center md:flex hidden">
          {routes.map((val, index) => {
            return (
              <Link
                key={index}
                className={` font-semibold px-3 py-1 rounded-[4px] ${
                  val.path === pathname
                    ? "bg-white text-teal-500"
                    : "text-white"
                }`}
                to={val.path}
              >
                {val.name} {val.icon && <span>{val.icon}</span>}
              </Link>
            );
          })}
        </div>
        <FaBars
          className="md:hidden block text-white text-[22px]"
          onClick={() => setVisible(true)}
        />
      </nav>
      <Drawer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Navbar;
