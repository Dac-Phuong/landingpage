import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%]  right-[-15px] group-hover:right-[-20px] group-hover:opacity-100 z-[1] transition-all duration-[0.4s] ease-out opacity-0"
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-right  w-[60px] h-[60px] text-[36px] text-[#555555] text-xl z-[1] ">
        <FiChevronRight size={35} />
      </button>
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%]  z-[1] left-[15px]   group-hover:left-3 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0"
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-left w-[60px] h-[100%] text-[36px] text-[#555555] text-xl">
        <FiChevronLeft size={35} />
      </button>
    </div>
  );
}
