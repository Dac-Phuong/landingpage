import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import { Link } from "react-scroll";
function MenuMobile() {
  const [show, setShow] = useState(false);
  const [onclick, setOnclick] = useState(false);
  const closeMenu = () => setOnclick(false);
  return (
    <div className="nav-mobile">
      <div className="nav-mobile-fixed ">
        <h4 className="text-base font-bold text-[#515050]">
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="list-menu text-[15px] font-bold"
            to={"Home"}
            onClick={() => [closeMenu, setShow(false)]}
          >
          Trang Chủ
          </Link>
        </h4>
        <img
          alt=""
          className="w-[40px] h-[40px] rounded-3xl"
          src={require("../../image/logo/logo.png")}
        />
        <div
          className=" h-full items-center pt-3 pb-2"
          onClick={() => setShow(true)}
        >
          <AiOutlineMenu
            size={27}
            color="#515050"
            className="border-2 p-[3px]"
          />
        </div>
      </div>
      {show ? (
        <div className="Overlay">
          <div className="nav-mobile-wrap">
            <div
              className="absolute right-2 items-center pt-2 pb-2"
              onClick={() => setShow(false)}
            >
              <AiOutlineClose size={25} color="#515050" />
            </div>
            <div className="pt-4">
              <li className="mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="list-menu text-[15px] font-bold"
                  to={"Home"}
                  onClick={() => [closeMenu, setShow(false)]}
                >
                  Trang Chủ
                </Link>
              </li>
              <li className=" mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="list-menu text-[15px] font-bold"
                  to={"Smart"}
                  onClick={() => [closeMenu, setShow(false)]}
                >
                  Thiết Bị Thông Minh
                </Link>
              </li>
              <li className=" mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="list-menu text-[15px] font-bold"
                  to={"Security"}
                  onClick={() => [closeMenu, setShow(false)]}
                >
                  Thiết Bị An Ninh
                </Link>
              </li>
              <li className=" mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="list-menu text-[15px] font-bold"
                  to={"Office"}
                  onClick={() => [closeMenu, setShow(false)]}
                >
                  Thiết Bị Văn Phòng
                </Link>
              </li>
              <li className=" mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="list-menu text-[15px] font-bold"
                  to={"About"}
                  onClick={() => [closeMenu, setShow(false)]}
                >
                  Giới Thiệu
                </Link>
              </li>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default MenuMobile;
