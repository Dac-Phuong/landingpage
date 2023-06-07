import React, { useState } from "react";
import Slider from "react-slick";
import products from "../../data/Security/product.json";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import { NextArrow, PrevArrow } from "../NextSlider";
import { TfiClose } from "react-icons/tfi";
function Product() {
  const [ischeck, setIscheck] = useState(false);
  const [item, setItem] = useState({});

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    dots: false,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wrap-product">
      <div className="w-full">
        <Slider {...settings} className="group w-full">
          {products.map((item, index) => {
            return (
              <div
                key={item.id}
                className="wrap-product-col"
                onClick={() => [setIscheck(!ischeck), setItem(item)]}
              >
                <img alt="" src={item.image[0]} />
                <div>
                  <h4 className="max-sm:text-xs  p-2 text-sm">{item.name}</h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {ischeck ? (
        <div className="wrap-product-detail">
          <div className="product-detail relative">
            <div className="cursor-pointer z-10 top-0 right-0 ">
              <TfiClose className="ml-auto pb-2 " size={24} onClick={() => setIscheck(false)} />
            </div>
            <div className="product-detail-col flex">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                className="product-detail-Carousel  w-[40%]"
              >
                {item.image.map((image, index) => {
                  return (
                    <img
                      key={index}
                      className="h-full w-[40%]"
                      alt={item.name.id}
                      src={image}
                    />
                  );
                })}
              </Carousel>
              <div className="product-detail-col-1 w-[60%] ">
                <div className="">
                  <div className="Security-wrap-description pl-[15px] pr-[15px]">
                    <div className="relative items-center">
                      <h2 className="Security-wrap-heading ">
                        Thông số kỹ thuật
                      </h2>
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
                        href="https://zalo.me/0963809069"
                      >
                        Liên hệ ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Product;
