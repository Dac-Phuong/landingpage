import React from "react";
import { AiFillSkype, AiOutlineFieldTime } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FiUsers, FiPhone, FiGlobe } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BsYoutube } from "react-icons/bs";
import "./style.css";
import { FaCheck, FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full  bg-[#052A6E]">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-main ">
            <h2>THÔNG TIN LIÊN HỆ</h2>
            <ul className="footer-item">
              <li className="footer-list-item">
                <div className=" mr-4 text-[20px]">
                  <FiUsers />
                </div>
                <p>
                  Đơn vị chủ quản: CÔNG TY TNHH THIẾT BỊ CÔNG NGHỆ HÔNG DƯƠNG
                </p>
              </li>
              <li className="footer-list-item">
                <div className=" mr-4 text-[20px]">
                  <IoLocationOutline />
                </div>
                <p>
                  Address: Tổ 4 , Phường Chùa Hang - Đồng Hỷ ,Thành phố Thái
                  Nguyên
                </p>
              </li>
              <li className="footer-list-item">
                <div className="mr-4 text-[20px]">
                  <AiOutlineFieldTime />
                </div>
                <p>Thời gian làm việc : 7h45 - 18h30 thứ 2 - chủ nhật</p>
              </li>
              <li className="footer-list-item">
                <div className="  mr-4 text-[20px]">
                  <FiPhone />
                </div>
                <p>Hotline: 0818.212.282</p>
              </li>
              <li className="footer-list-item">
                <div className="mr-4 text-[20px]">
                  <TfiEmail />
                </div>
                <p>Email: haidangpc@gmail.com</p>
              </li>
              <li className="footer-list-item">
                <div className="mr-4 text-[20px]">
                  <FiGlobe />
                </div>
                <p>Website: https://www.haidangpc.vn</p>
              </li>
            </ul>
            <div className="social-network ">
              <div className="social-list-icon bg-[#3A6ECF]">
                <a href="https://www.facebook.com/CAMERAHAIDANGTN" className="social-icon">
                  <FaFacebookF className="text-[16px] item-center" />
                </a>
              </div>
              <div className="social-list-icon bg-[#0065F7]">
                <a href="https://zalo.me/0963809069" className="social-icon">
                  <SiZalo className="text-[16px] item-center" />
                </a>
              </div>
              <div className="social-list-icon bg-[#01AAE9]">
                <a href="/" className="social-icon">
                  <AiFillSkype className="text-[16px] item-center" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-policy">
            <h2>CHÍNH SÁCH </h2>
            <ul className="footer-item">
              <li className="footer-list-item">
                <FaCheck className="mr-2 text-[14px]" />
                <p>Chính sách Thanh toán</p>
              </li>
              <li className="footer-list-item">
                <FaCheck className="mr-2 text-[14px]" />
                <p>Chính sách đổi trả hàng</p>
              </li>
              <li className="footer-list-item">
                <FaCheck className="mr-2 text-[14px]" />
                <p>Chính sách bảo hành</p>
              </li>
              <li className="footer-list-item">
                <FaCheck className="mr-2 text-[14px]" />
                <p>Chính sách bảo mật</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h2>BẢN ĐỒ ĐƯỜNG ĐI </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.5208549394938!2d105.83027366962378!3d21.582666645840202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313527c16e2f9c19%3A0x4a6ef90ccf465ef4!2zTcOheSB0w61uaCBo4bqjaSDEkcSDbmc!5e0!3m2!1svi!2s!4v1682668939461!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[250px] rounded-lg max-md:h-[200px]"
            referrerpolicy="no-referrer-when-downgrade"
            title="google-map"
          ></iframe>
        </div>
      </div>

      <div className="footer-line">
        <div className="footer-line-container"></div>
        <span>Copyright ©2023 Công ty thiết bị công nghệ Hồng Dương </span>
      </div>
    </div>
  );
}
export default Footer;
