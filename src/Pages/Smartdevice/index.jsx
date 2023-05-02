import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import product from "../../data/Smart/data.json";
import "./style.css";

function Smartdevice() {
  return (
    <div id="Smart">
      <div className="main-top">
        <div className="main-top-heading">
          <div className="main-top-title ">
            <h2>THIẾT BỊ THÔNG MINH</h2>
            <div className="main-heading-line" />
          </div>
          <div className="main-wrap-left">
            <Link to={"Home"} >
              <img
                className="main__row-banner"
                alt=""
                src={require("../../image/banner/giai-phap-nha-thong-minh.png")}
              />
            </Link>
            <div className="main-left-title">
              <h4>KHẢO SÁT – BÁO GIÁ – LẮP ĐẶT</h4>
                <div className="w-[47%]">
                  <h2>GIẢI PHÁP NHÀ THÔNG MINH</h2>
                  <p>
                    Giải pháp tự động hóa với tiện ích thông minh và hiện đại,
                    thân thiện với người dùng. Nâng cao hiệu quả sử dụng, giá
                    trị bền vững và lợi ích lâu dài. Giảm chi phí tối đa khi lắp
                    đặt, tiết kiệm năng lượng khi sử dụng. Đảm bảo an toàn về
                    điện khi hoạt động và sử dụng thiết bị.
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
        <div className="main-product">
          <div className="w-full mt-[20px] mb-[30px]">
            <div className="main-heading relative">
              <h2 className="main-heading-col leading-loose">
              Các sản phẩm nổi bật
              </h2>
            </div>
          </div>
          <div className="main-warp w-full">
            {product.map((item, index) => {
              return (
                <div key={item.id} className="main-wrap-col">
                  <div className="wrap-col-content w-2/4 p-[15px]">
                    <div className="wrap-colum">
                      <h3 className="wrap-col-name">{item.name}</h3>
                    </div>
                    <ul className="pt-[20px]">
                      {item.content.map((item) => {
                        return (
                          <li className="wrap-col-title">
                            <BsFillCircleFill
                              color="#2A2388"
                              className="text-[10px] mr-[7px] mt-[4px]"
                            />
                            <p className="text-[12px] text-[#04296E]">{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="wrap-col-btn">
                      <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
                    </div>
                  </div>
                  <div className="wrap-col-content w-2/4 p-[14px]">
                    <Carousel
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={2000}
                    >
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smartdevice;
