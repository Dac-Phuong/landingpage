import React from "react";
import {
  AiFillSkype,
  AiFillTwitterCircle,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FiUsers, FiPhone, FiGlobe } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import "./style.css";
import { FaFacebook, FaCheck } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full  bg-[#052A6E]">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-main ">
            <h2>THÔNG TIN LIÊN HỆ</h2>
            <ul className="footer-item">
              <li className="footer-list-item">
                <FiUsers className="mr-4 text-[20px]" />
                <p>Đơn vị chủ quản: CÔNG TY TNHH THIẾT BỊ CÔNG NGHỆ HÔNG DƯƠNG</p>
              </li>
              <li className="footer-list-item">
                <IoLocationOutline className="mr-4 text-[20px]" />
                <p>Address: Chùa Hang , Đồng Hỷ ,Thành phố Thái Nguyên</p>
              </li>
              <li className="footer-list-item">
                <AiOutlineFieldTime className="mr-4 text-[20px]" />
                <p>Thời gian làm việc : 7h45 - 18h30 thứ 2 - chủ nhật</p>
              </li>
              <li className="footer-list-item">
                <FiPhone className="mr-4 text-[20px]" />
                <p>Hotline: 0963.809.069</p>
              </li>
              <li className="footer-list-item">
                <TfiEmail className="mr-4 text-[20px]" />
                <p>Email: haidangpc@gmail.com</p>
              </li>

              <li className="footer-list-item">
                <FiGlobe className="mr-4 text-[20px]" />
                <p>Website: https://www.haidangpc.vn/</p>
              </li>
            </ul>
            <div className="social-network">
              <div className="social-list-icon">
                <a href="" className="social-icon">
                  <FaFacebook className="text-[16px] item-center" />
                </a>
              </div>
              <div className="social-list-icon">
                <a href="" className="social-icon">
                  <SiZalo className="text-[16px] item-center" />
                </a>
              </div>
              <div className="social-list-icon">
                <a href="" className="social-icon">
                  <AiFillSkype className="text-[16px] item-center" />
                </a>
              </div>
              <div className="social-list-icon">
                <a href="" className="social-icon">
                  <AiFillTwitterCircle className="text-[16px] item-center" />
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
          <h2>Google map </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.5208549394938!2d105.83027366962378!3d21.582666645840202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313527c16e2f9c19%3A0x4a6ef90ccf465ef4!2zTcOheSB0w61uaCBo4bqjaSDEkcSDbmc!5e0!3m2!1svi!2s!4v1682668939461!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            className="w-full h-[85%] rounded-lg"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-line">
        <div className="footer-line-container"></div>
        <span>©2023 Allrights reserved echeckin.vn</span>
      </div>
    </div>
  );
}
export default Footer;
