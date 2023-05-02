import React from "react";
import "./style.css";
import { Link } from "react-scroll";
import data from "../../data/Officee/product.json";
import { GoPrimitiveDot } from "react-icons/go";
import { NextArrow, PrevArrow } from "../../Components/NextSlider";
import { Carousel } from "react-responsive-carousel";
function Officeequipment() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div id="Office">
      <div className="main-top-heading">
        <div className="main-top-title ">
          <h2>THIẾT BỊ VĂN PHÒNG</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap-left">
          <Link to={"Home"}>
            <img
              className="main__row-banner"
              alt=""
              src={require("../../image/banner/thiet-bi-van-phong.png")}
            />
          </Link>
          <div className="main-left-title">
            <h4>MÁY VĂN PHÒNG - THIẾT BỊ VĂN PHÒNG</h4>
            <div className="w-[47%]">
              <h2>CÁC LOẠI THIẾT BỊ VĂN PHÒNG</h2>
              <p>
                Thiết bị văn phòng chắc chắn là một trong những thứ không hề xa
                lạ với chúng ta nữa rồi phải không nào. Công nghệ ngày càng phát
                triển kéo theo các thiết bị văn phòng ngày càng được nâng cấp
                với nhiều tiện ích. Dưới đây chúng ta cùng đi tìm hiểu về một số
                thiết bị văn phòng.
              </p>
              <div className="social-btn">
                <a className="social-btn-text" href="https://chat.zalo.me/">
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
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
      <div className="Office-product">
        {data.map((item) => {
          return (
            <div key={item.id} className="Office-product-item">
              <div className="Office-product-img">
                <div className="wrap-col-content p-[14px]">
                  <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
                    {item.image.map((image, index) => {
                      return (
                        <img
                          key={index}
                          className="h-full w-full"
                          alt={item.name.id}
                          src={image}
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <div className="p-[20px]">
                <p className="product-name">{item.name}</p>
                {item.description.map((list) => {
                  return (
                    <ul key={list} className="list-desciption">
                      <GoPrimitiveDot color="#2A2388" className=" mr-1" size={20} />
                      <li>{list}</li>
                    </ul>
                  );
                })}
                <div className="wrap-col-btn">
                <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Officeequipment;
