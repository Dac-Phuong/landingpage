import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiOutlineSetting,
  AiOutlineShake,
  AiFillRobot,
  AiFillDollarCircle,
  AiOutlineBgColors,
} from "react-icons/ai";
import { FaStar, FaGlobe, FaChromecast } from "react-icons/fa";
import { BsBuildingGear, BsFillShieldLockFill } from "react-icons/bs";
import products from "../../data/Security/product.json";
import "./style.css";
import { NextArrow, PrevArrow } from "../../Components/NextSlider";
import { Link } from "react-scroll";

function Securitydevices() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="Security-container" id="Security">
      <div className="main-top-heading">
        <div className="main-top-title ">
          <h2>THIẾT BỊ AN NING</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap">
          <div className="main-top-right">
            <div className="w-2/4">
              <div>
                <h3 className="mb-[10px]">Ưu Điểm Vượt Trội</h3>
                <div className="right-heading mt-[10px]">
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <FaStar
                        color="#084CCC"
                        className="text-[24px] mr-[5px]"
                      />
                    </div>
                    <p>Chất lượng sản phẩm tốt</p>
                  </div>
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <AiOutlineSetting
                        color="#084CCC"
                        className="text-[24px] mr-[5px]"
                      />
                    </div>
                    <p>Hệ thống camera lắp đặt vô cùng dễ dàng</p>
                  </div>
                </div>
                <div className="right-heading mt-[10px]">
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <FaChromecast
                        color="#084CCC"
                        className="text-[24px] mr-[3px]"
                      />
                    </div>
                    <p>Camera còn có hỗ trợ dịch vụ DDNS</p>
                  </div>
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <FaGlobe
                        color="#084CCC"
                        className="text-[24px] mr-[3px]"
                      />
                    </div>
                    <p>Dễ dàng truy cập web camera của bạn qua Internet</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3>Tính Năng Chính</h3>
                <div className="main-top-item">
                  <div className="right-heading mt-[10px]">
                    <div className="w-full">
                      <div className="right-heading-1">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <AiFillDollarCircle
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Tiết kiệm điện năng</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <AiOutlineBgColors
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Đa chức năng</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <AiOutlineShake
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Kết nối thông minh</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <AiFillRobot
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Bảo vệ an toàn</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <BsBuildingGear
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Khả năng hoạt động ổn định</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <BsFillShieldLockFill
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p> Bảo đảm an toàn cho ngôi nhà</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#084CCC]">
                          <AiFillDollarCircle
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Chống ngược sáng rất tốt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-btn">
                <a className="social-btn-text" href="https://chat.zalo.me/">
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
          <div className="main-wrap-left ">
            <Link to={"Home"} className="cursor-pointer">
              <img
                className="main__row-banner"
                alt=""
                src={require("../../image/banner/thiet-bi-an-ning.png")}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-[20px] mb-[30px]">
        <div className="main-heading relative">
          <h2 className="main-heading-col leading-loose">
            Các sản phẩm nổi bật
          </h2>
        </div>
      </div>
      <div className="Security-wrap">
        {products.map((item) => {
          return (
            <div key={item.id} className="Security-wrap-col">
              <div className="Security-wrap-slider">
                <Slider {...settings} className="group">
                  {item.image.map((image, index) => {
                    return (
                      <img
                        key={index}
                        className="object-cover w-full"
                        alt=""
                        src={image}
                      />
                    );
                  })}
                </Slider>
              </div>
              <div className="Security-wrap-description mt-[10px] pl-[15px] pr-[15px]">
                <div className="relative">
                  <h2 className="Security-wrap-heading">Thông số kỹ thuật</h2>
                </div>
                <div className="Security-wrap-col-info">
                  <div className="Security-specifications">
                    {item.specifications.map((list, index) => {
                      return (
                        <ul key={index} className="Security-wrap-item">
                          <li>{list}</li>
                        </ul>
                      );
                    })}
                  </div>
                  <div className="Security-specifications">
                    {item.description.map((item, index) => {
                      return (
                        <ul key={index} className="Security-item">
                          <li className="Security-item-list">{item}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
                <div className="Security-social ">
                  <a
                    className="Security-social-btn-text"
                    href="https://www.facebook.com/CAMERAHAIDANGTN"
                  >
                    Liên hệ ngay
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Securitydevices;
