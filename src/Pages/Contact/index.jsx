import React from "react";
import "./style.css";
import { AiOutlineMessage } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaRegUserCircle, FaCheckCircle } from "react-icons/fa";
function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-img">
        <img alt="" className="Contact-img"  src={require("../../image/banner/img-contact.jpg")} />
      </div>
      <div className="Contact-wrap">
        <div className="Contact-wrap-col">
          <div className="pt-[15%]">
            <img alt="" src={require("../../image/banner/img-contact.png")} />
          </div>
        </div>
        <div className="Contact-wrap-col">
          <div className="Contact-wrap-col-title">
            <h2>BẠN CẦN TƯ VẤN CỤ THỂ ?</h2>
            <p>
              Vui lòng để lại thông tin của bạn và nội dung cần tư vấn .Chúng
              tôi sẽ liên hệ bạn thời gian sớm nhất
            </p>
          </div>
          <div className="Contact-wrap-col-1">
            <from className="from-info-user">
              <div className="">
                <h3>From nhập thông tin liên hệ</h3>
                <div className="from-input-user">
                  <FaRegUserCircle
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input className="from-input" placeholder="Họ tên" />
                </div>
                <div className="from-input-user">
                  <FiPhoneCall
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input className="from-input" placeholder="Số điện thoại" />
                </div>
                <div className="from-input-user">
                  <FiMail
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input className="from-input" placeholder="Email" />
                </div>
              </div>
              <div className="from-input-textarea">
                <AiOutlineMessage
                  color="#ccc"
                  className="ml-[5px] mt-[3px] mr-[5px]"
                  size={20}
                />
                <textarea
                  placeholder="Nội dung yêu cầu"
                  className="input-textarea"
                ></textarea>
              </div>
              <button className="from-button">Gửi yêu cầu tư vấn</button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
