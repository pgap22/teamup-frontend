import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../../Logo/Logo";
import DropDownNav from "./Components/DropDown";

const DropDownButton = ({ showDropDown, toggleDropDown }) => {
  return (
    showDropDown && (
      <div
        className="cursor-pointer"
        onClick={() => {
          toggleDropDown(true);
        }}
      >
        <GiHamburgerMenu size={40} color="white" />
      </div>
    )
  );
};

const Nav = ({ RightAsideContent, RightAsideButton, RightAsideTitulo }) => {
  const [dropDown, toggleDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showDropDown = RightAsideContent && true;

  return (
    <nav className="flex items-center justify-between w-full px-5 md:hidden max-h-20 h-28 bg-primary">
      <div className="flex gap-5">
        <Logo width={168} />
        <DropDownButton
          toggleDropDown={toggleDropDown}
          showDropDown={showDropDown}
        />
      </div>
      {/* <UserConfig /> */}

      <AnimatePresence>
        {dropDown && (
          <DropDownNav
            dropdownRef={dropdownRef}
            RightAsideContent={RightAsideContent}
            RightAsideButton={RightAsideButton}
            RightAsideTitulo={RightAsideTitulo}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
