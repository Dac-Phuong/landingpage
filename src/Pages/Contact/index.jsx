import React, { useState } from "react";
import "./style.css";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleValue = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if ((values.name !== "", values.phone !== "", values.email !== "")) {
      emailjs
        .send(
          "service_w9rwsdk",
          "template_hmbgg8f",
          values,
          "i8QVJwDtE48HIU7Hn"
        )
        .then(
          (result) => {
            toast.success("Gửi gmail thành công !");
            values.name("")
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            toast.error("Gửi gmail thất bại");
          }
        );
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="Contact">
      <div className="Contact-img">
        <img
          alt="" 
          className="Contact-img "
          src={require("../../image/banner/img-contact.jpg")}
        />
      </div>
      <div className="Contact-wrap">
        <div className="w-[45%] m-auto">
          <div>
            <img alt="" src={require("../../image/banner/img-contact.png")} />
          </div>
        </div>
        <div className="w-[55%] m-auto text-white ">
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <div className="Contact-wrap-title">
            <div className="Contact-wrap-heading-1">
              <h3 className="pb-2">Giải pháp thiết bị cộng nghệ</h3>
              <p>
                giải pháp thiết bị công nghệ tối ưu hóa và nâng cao hiệu quả
                hoạt động . giúp cải thiện quản lý và giám sát các hoạt động,
                nâng cao trải nghiệm khách hàng, tối đa hóa lợi nhuận, giảm
                thiểu thời gian và chi phí, tăng cường an ninh và bảo mật, và
                thúc đẩy sự phát triển bền vững
              </p>
            </div>
            <div className="Contact-wrap-heading-1 ">
              <h3 className="pb-2">Liên hệ ngay</h3>
              <p>
                Để biết thêm thông tin chi tiết về sản phẩm, giá và chương trình
                ưu đãi, vui lòng điền thông tin dưới đây
              </p>
            </div>
          </div>
          <h3 className="pt-[10px]">Liên hệ để nắm rõ thông tin tốt nhất</h3>
          <div className="Contact-wrap-col-1">
            <from className="from-info">
              <div className="from-info-user mt-[10px] mb-[10px]">
                <div className="from-input-user">
                  <FaRegUserCircle
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input
                    className="from-input"
                    type="name"
                    name="name"
                    placeholder="Họ tên"
                    onChange={handleValue}
                  />
                </div>
                <div className="from-input-user">
                  <FiPhoneCall
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input
                    className="from-input"
                    type="phone"
                    name="phone"
                    placeholder="Số điện thoại"
                    onChange={handleValue}
                  />
                </div>
                <div className="from-input-user">
                  <FiMail
                    color="#ccc"
                    className="ml-[5px] mr-[5px] mt-[1px]"
                    size={20}
                  />
                  <input
                    className="from-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleValue}
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="from-button"
                  onClick={sendEmail}
                >
                  Gửi đi
                </button>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
