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
  let header = useRef();

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

  useEffect(() => {
    document.addEventListener("scroll", function () {
      header.current.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <div className="container-fluid navbar_fluid sticky-top" ref={header}>
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
                  href={`#`}
                  className={
                    activeLink === "Location" ? "active link_item" : "link_item"
                  }
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={
                    activeLink === "Attire" ? "active link_item" : "link_item"
                  }
                >
                  Attire
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={
                    activeLink === "Wedding Timeline"
                      ? "active link_item"
                      : "link_item"
                  }
                >
                  Wedding Timeline
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={
                    activeLink === "FAQs" ? "active link_item" : "link_item"
                  }
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={
                    activeLink === "Accomodations"
                      ? "active link_item"
                      : "link_item"
                  }
                >
                  Accomodations
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
      {/* <div className="container">
        <div className="navigation">
          <FaBars className="fa_icon" />
          <ul>
            <li>Home</li>
            <li>Bride & Groom</li>
            <li>Location</li>
            <li>Attire</li>
            <li>Wedding Timeline</li>
            <li>FAQs</li>
            <li>Accomodations</li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Nav;