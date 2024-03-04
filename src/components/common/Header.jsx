import LogoImg from "../../assets/common/medusa.png";
import { menulists } from "../../assets/data/data.js";
import { Badges, CustomLink, CustomNavLink } from "./CustomComponents.jsx";
import { IoHeart, IoSearchOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //closes menu if clicked outside of the menu button...
  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const isHomePage = location.pathname === "/";

  return (
    <div>
      <header
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 relative z-20 
            ${isScrolled ? "scrolled" : ""}`
            : `header px-12 py-3 relative z-20 
            ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"}
                lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}

        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <CustomNavLink href="/">
                <img src={LogoImg} alt="medusa" className="h-8"/>
              </CustomNavLink>
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                </li>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Login
              </CustomLink>
              <span
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {" "}
                /{" "}
              </span>
              <CustomLink
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Register
              </CustomLink>
            </div>
            <div className="icon flex items-center justify-center gap-6">
              <IoSearchOutline
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
                size={23}
              />
            </div>
            <div className="relative z-20">
              <IoHeart
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
                size={26}
              />
              <div className="absolute -top-2 -right-2">
                <Badges color="bg-primary-green">0</Badges>
              </div>
            </div>
            <div className="relative z-20">
              <CustomNavLink href="/shop">
              <FaOpencart
                className={`${
                  !isHomePage || isScrolled ? "text-primary" : "text-white"
                }`}
                size={26}
              />
              </CustomNavLink>
              <div className="absolute -top-2 -right-2">
                <Badges color="bg-primary-green">0</Badges>
              </div>
            </div>
            <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                {isOpen? <AiOutlineClose size={24}/> : <AiOutlineMenu/>}
            </button>
          </div>

          <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen? "open" : "closed"}`}>
            {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                </li>
              ))}
          </div>
        </nav>
      </header>
    </div>
  );
};
