import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaSearchLocation, FaTruck } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import data from "../../data/Service/data.json";
import "./style.css";

function About() {
  const image = [
    {
      id: 1,
      image: require("../../image/camera/camera-1.jpg"),

    },
    {
      id: 2,
      image: require("../../image/camera/ctrinh-2.jpg"),
    },
    {
      id: 3,
      image: require("../../image/camera/ctrinh-1.jpg"),
    },
    {
      id: 4,
      image: require("../../image/camera/ctrinh-4.jpg"),

    },
    {
      id: 5,
      image: require("../../image/camera/ctrinh-3.jpg"),
    },
  ];
  return (
    <section id="About">
      <div className="main-top-title bg-[#f5f5f5]">
        <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
        <div className="main-heading-line" />
        <div className="flex max-w-[1200px] mx-auto  ">
          <div className="w-2/4 max-h-[350px]">
            <img
              className="w-full h-full"
              alt=""
              src={require("../../image/camera/banner.jpg")}
            />
          </div>
          <div className="w-2/3 p-[20px]">
            <div className="w-full ">
              <p className="text-base ">
                🎖️ Công ty tnhh thiết bị công nghệ Hồng Dương Việt Nam là công
                ty chuyên các thiết bị Công nghệ, điện tử thông minh. Các hệ
                thống nhà thông minh, có khả năng điều khiển, giám sát từ xa qua
                điện thoại.
              </p>
              <p className="text-base pt-[10px] pb-[10px]">
                🎖️ Sản phẩm nhà thông minh Hunonic đều được nghiên cứu và sản
                xuất hoàn toàn tại Việt Nam.
              </p>
              <p className="text-base pt-[10px] pb-[10px]">
                🎖️ Với mong muốn tất cả mọi người dân Việt Nam đều có cơ hội sở
                hữu nhà thông minh. Nên chúng tôi đang không ngừng nỗ lực từng
                ngày, từng giờ. Để có thể đem đến cho mọi người các sản phẩm nhà
                thông minh chất lượng cao và có giá thành hợp lý nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="About-company">
        <div className="w-full relative h-full">
          <div className="max-w-[420px] m-auto bg-white">
            <h2>CÁC CÔNG TRÌNH TIÊU BIỂU</h2>
          </div>
          <div className="About-line"></div>
          <p className="">
            Công ty tnhh thiết bị công nghệ Hồng Dương thi công các công trình
          </p>
          <div className="flex flex-wrap justify-between mt-[20px]">
            {image.map((item) => {
              return (
                <div key={item.id} className="About-image overflow-hidden">
                  <img className="w-full h-full" alt="" src={item.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="About-company-title relative">
          <div className="max-w-[420px] m-auto bg-white">
            <h2 className="mb-[15px]">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          </div>
          <div className="About-line"></div>
          <p className="">
            Ngoài cung cấp lắp đặt các thiết bị công nghệ thì chúng tôi còn có
            thêm các dịch vụ
          </p>
          <div className="About-top-wrap">
            {data.map((item) => {
              return (
                <div key={item.id} className="About-top-service">
                  <img alt="" className="w-full h-[260px]" src={item.image} />
                  <div className="About-top-service-content">
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                    <div className="About-social-btn">
                      <a
                        className="social-btn-text"
                        href="https://chat.zalo.me/"
                      >
                        Liên hệ tư vấn
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div>
            <div className="max-w-[420px] m-auto bg-white">
              <h2>CAM KẾT CỦA CHÚNG TÔI</h2>
            </div>
            <div className="About-line"></div>
            <p>
              Mang lại cho khách hàng sự hài lòng và những sản phẩm chất lượng
              nhất
            </p>
          </div>
          <div className="About-wrap">
            <div className="About-wrap-col">
              <div className="About-wrap-circle">
                <div className="About-wrap-circle-icon">
                  <MdOutlineMiscellaneousServices
                    size={40}
                    className="About-icon"
                  />
                </div>
              </div>
              <div className="About-headline pb-[14px]">
                <h3>DỄ DÀNG LẮP ĐẶT</h3>
                <div>Tư vấn miễn phí sử dụng và lắp đặt</div>
                <div>Dễ dàng lắp đặt kể cả không phải dân kỹ thuật</div>
              </div>
            </div>
            <div className="About-wrap-col">
              <div className="About-wrap-circle">
                <div className="About-wrap-circle-icon">
                  <FaSearchLocation size={40} className="About-icon" />
                </div>
              </div>
              <div className="About-headline pb-[14px]">
                <h3>NGUỒN GỐC RÕ RÀNG</h3>
                <div>
                  Các thương hiệu số 1 Việt Nam là thiết bị công nghệ hiện đại
                  nhất thị trường
                </div>
              </div>
            </div>
            <div className="About-wrap-col">
              <div className="About-wrap-circle">
                <div className="About-wrap-circle-icon">
                  <BsShieldFillCheck size={40} className="About-icon" />
                </div>
              </div>
              <div className="About-headline pb-[14px]">
                <h3>BẢO HÀNH</h3>
                <div>Bảo hành 1 đổi 1 trong 15 ngày</div>
                <div>
                  Bảo hành kỹ thuật 12 tháng. Sửa chữa, thay thế trọn đời
                </div>
              </div>
            </div>
            <div className="About-wrap-col">
              <div className="About-wrap-circle">
                <div className="About-wrap-circle-icon">
                  <FaTruck size={40} className="About-icon" />
                </div>
              </div>
              <div className="About-headline pb-[14px]">
                <h3>MIỄN PHÍ VẬN CHUYỂN</h3>
                <div>Miễn phí vận chuyển, hỗ trợ lắp đặt miễn mí</div>
                <div>
                  Nhận hàng tại nhà, kiểm tra mới thanh toán vô cùng đảm bảo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
