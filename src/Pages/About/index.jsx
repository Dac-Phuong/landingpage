import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaSearchLocation, FaTruck } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import data from "../../data/Service/data.json";
import "./style.css";

function About() {
  return (
    <div id="About">
      <div className="About-company">
        <div>
          <div className="main-top-title ">
            <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
            <div className="main-heading-line" />
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
        </div>
        <div className="">
          <div className="main-top-title ">
            <h2>CAM KẾT CỦA CHÚNG TÔI</h2>
            <div className="main-heading-line" />
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
    </div>
  );
}
export default About;
