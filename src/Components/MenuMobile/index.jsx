import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
function MenuMobile() {
  const [show, setShow] = useState(false);
  const [onclick, setOnclick] = useState(false);
  const closeMenu = () => setOnclick(false);
  return (
    <div className="nav-mobile">
      <div className="nav-mobile-fixed">
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="list-menu text-[15px] font-bold"
          to={"Home"}
          onClick={() => closeMenu}
        >
          <img
            alt=""
            className="w-[40px] h-[40px] rounded-3xl"
            src={require("../../image/logo/logo.png")}
          />
        </Link>
        {show ? (
          <div
            className="items-center border-[1px] rounded h-[35px] w-[45px]  pb-2"
            onClick={() => setShow(!show)}
          >
            <AiOutlineClose
              size={30}
              color="#515050"
              className=" m-auto mt-[2px] p-1 "
            />
          </div>
        ) : (
          <div
            className="items-center border-[1px] rounded h-[35px] w-[45px]  pb-2"
            onClick={() => setShow(!show)}
          >
            <AiOutlineMenu
              size={30}
              color="#515050"
              className=" m-auto mt-[2px] p-1 "
            />
          </div>
        )}
      </div>
      {show ? (
        <div className="nav-mobile-wrap">
          <div>
            <div className="mb-2">
              <li className="mobile-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="list-menu w-full text-[14px] font-bold"
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
                  className="list-menu w-full  text-[14px] font-bold"
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
                  className="list-menu w-full  text-[14px] font-bold"
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
                  className="list-menu w-full  text-[14px] font-bold"
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
                  className="list-menu w-full  text-[14px] font-bold"
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
