"use client";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeLink, setActiveLink] = useState("");
  let menuRef = useRef();

  useEffect(() => {
    document.body.className = theme;

    const current_mode = localStorage.getItem("mode");
    setTheme(current_mode);

    const navbarHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", navbarHandler);

    return () => {
      document.removeEventListener("mousedown", navbarHandler);
    };
  }, [theme]);
  return (
    <>
      <div className="container-fluid navbar_fluid">
        <div className="container">
          <nav className="navbar " ref={menuRef}>
            <ul className={open ? "active" : "inactive"}>
              <li>
                <Link
                  href={`/`}
                  className={
                    activeLink === "Home" ? "active link_item" : "link_item"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`/bride&groom`}
                  className={
                    activeLink === "Bride & Groom"
                      ? "active link_item"
                      : "link_item"
                  }
                >
                  Bride & Groom
                </Link>
              </li>
              <li>
                <Link
                  href={`/location`}
                  className={
                    activeLink === "Location" ? "active link_item" : "link_item"
                  }
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href={`/attire`}
                  className={
                    activeLink === "Attire" ? "active link_item" : "link_item"
                  }
                >
                  Attire
                </Link>
              </li>
              <li>
                <Link
                  href={`invitation`}
                  className={
                    activeLink === "Wedding Invitation"
                      ? "active link_item"
                      : "link_item"
                  }
                >
                  Wedding Invitation
                </Link>
              </li>
            </ul>
            <div className="hamburger_menu" onClick={() => setOpen(!open)}>
              {open ? (
                <IoCloseSharp className="fa_icon close" />
              ) : (
                <FaBars className="fa_icon" />
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
