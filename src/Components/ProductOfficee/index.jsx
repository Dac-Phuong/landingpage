import React, { useState } from "react";
import Slider from "react-slick";
import data from "../../data/Officee/product.json";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import { NextArrow, PrevArrow } from "../NextSlider";
import { TfiClose } from "react-icons/tfi";
import { GoPrimitiveDot } from "react-icons/go";
import { motion } from 'framer-motion';
function ProductOficee() {
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
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Slider {...settings} className="group w-full">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="wrap-product-col"
                onClick={() => [setIscheck(!ischeck), setItem(item)]}
              >
                <img alt="" src={item.image[0]} className="h-[260px]" />
                <div>
                  <h4 className=" p-4 text-sm">{item.name}</h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </motion.div>
      {ischeck ? (
        <div className="wrap-product-detail relative">
          <div className="product-detail ">
            <div className="cursor-pointer z-10 m-2">
              <TfiClose
                className=" ml-auto"
                size={24}
                onClick={() => setIscheck(false)}
              />
            </div>
            <div className="product-detail-item flex">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                className="h-[100%]  mt-auto mr-4 w-[45%]"
              >
                {item.image.map((image, index) => {
                  return (
                    <img
                      key={index}
                      className="h-full w-[50%]"
                      alt={item.name.id}
                      src={image}
                    />
                  );
                })}
              </Carousel>
              <div className="max-md:w-[100%] w-[55%] h-full">
                <div className="Security-wrap-title  pl-[15px] pr-[15px]">
                  <div className="pt-5 items-center">
                    <div className="">
                      <p className="product-name">{item.name}</p>
                      {item.description.map((list) => {
                        return (
                          <ul key={list} className="list-desciption">
                            <GoPrimitiveDot
                              color="#2A2388"
                              className=" mr-1"
                              size={20}
                            />
                            <li>{list}</li>
                          </ul>
                        );
                      })}
                      <div className="mt-[20px]">
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
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ProductOficee;
