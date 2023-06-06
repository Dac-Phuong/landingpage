import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuMobile from "../MenuMobile";
import "./style.css";

const Header = () => {
  const [onclick, setOnclick] = useState(false);
  const [fixed, setFix] = useState(false);
  const closeMenu = () => setOnclick(false);
  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <header className="header " id="Home">
      <div className={fixed ? "header-main fixed" : "header-main"}>
        <div className="header-container">
          <div className="nav-list justify-between">
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to={"Home"}
              onClick={closeMenu}
            >
              <img
                src={require("../../image/logo/logo.png")}
                className="attachment-50x50 size-50x50 wp-post-image"
                alt=""
                decoding="async"
                loading="lazy"
              />
            </Link>
            <div className="nav-bar">
              <ul className="nav-item">
                <li className="nav-item-list">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="list-menu text-[15px] font-medium "
                    to={"Home"}
                    onClick={closeMenu}
                  >
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="list-menu text-[15px] font-medium"
                    to={"Smart"}
                    onClick={closeMenu}
                  >
                    Thiết Bị Thông Minh
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="list-menu text-[15px] font-medium"
                    to={"Security"}
                    onClick={closeMenu}
                  >
                    Thiết Bị An Ninh
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="list-menu text-[15px] font-medium"
                    to={"Office"}
                    onClick={closeMenu}
                  >
                    Thiết Bị Văn Phòng
                  </Link>
                </li>
                <li className="nav-item-list">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="list-menu text-[15px] font-medium"
                    to={"About"}
                    onClick={closeMenu}
                  >
                    Giới Thiệu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-hotline">
              <a href="tel:+84818212282">Hotline: 0818.212.282</a>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile/>
    </header>
  );
};
export default Header;
