import React from "react";
import "./style.css";
import { Link } from "react-scroll";
import data from "../../data/Officee/product.json";
import { GoPrimitiveDot } from "react-icons/go";
import { Carousel } from "react-responsive-carousel";
import ProductOficee from "../../Components/ProductOfficee";
function Officeequipment() {
  return (
    <div id="Office">
      <div className="main-top-heading">
        <div className="main-top-title ">
          <h2>THIẾT BỊ VĂN PHÒNG</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap-left">
          <div className="main-left-title">
            <div className="">
              <h4>MÁY VĂN PHÒNG - THIẾT BỊ VĂN PHÒNG</h4>
              <h2>CÁC LOẠI THIẾT BỊ VĂN PHÒNG</h2>
              <p>
                Thiết bị văn phòng chắc chắn là một trong những thứ không hề xa
                lạ với chúng ta nữa rồi phải không nào. Công nghệ ngày càng phát
                triển kéo theo các thiết bị văn phòng ngày càng được nâng cấp
                với nhiều tiện ích. Dưới đây chúng ta cùng đi tìm hiểu về một số
                thiết bị văn phòng.
              </p>
              <div className="social-btn">
                <a
                  className="social-btn-text"
                  href="https://zalo.me/0963809069"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
          <div className=" main__row-banner-bg w-2/4 cursor-pointer">
            <Link to={"Home"}>
              <img
                className="main__row-banner"
                alt=""
                src={require("../../image/banner/thiet-bi-van-phong.png")}
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
      <div className="Office-product">
        <div><ProductOficee /></div>
        {data.map((item) => {
          return (
            <div key={item.id} className="Office-product-item">
              <div className="Office-product-img ">
                <div className="wrap-col-content ">
                  <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
                    {item.image.map((image, index) => {
                      return <img key={index} alt={item.name.id}  src={image} />;
                    })}
                  </Carousel>
                </div>
              </div>
              <div className="product-col-description w-2/4 pt-4">
                <p className="product-name">{item.name}</p>
                {item.description.map((list) => {
                  return (
                    <ul key={list} className="list-desciption">
                      <GoPrimitiveDot
                        color="#2A2388"
                        className=" mr-1"
                        size={18}
                      />
                      <li>{list}</li>
                    </ul>
                  );
                })}
                <div className="wrap-col-btn">
                  <a href="https://zalo.me/0963809069">Liên hệ tư vấn</a>
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
