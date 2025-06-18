// src/components/layout/NavbarButton.jsx
import React from "react";
import { Icon } from "@iconify/react"; // Đảm bảo bạn đã cài đặt và import Iconify

/**
 * Component NavbarButton: Một nút được thiết kế đặc biệt cho thanh điều hướng.
 * - Chỉ nhận duy nhất prop 'text'.
 * - Hiển thị văn bản và icon mũi tên.
 * - Hiệu ứng hover: icon xoay, gạch chân từ trái sang phải, và đổi màu sang sky-600.
 */
const NavbarButton = ({ children, onClick, noIcon = false }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-transparent relative py-4 flex items-center gap-2 group hover:text-sky-600 duration-300 transition-all"
        >
            <div className="absolute top-0 left-0 w-0 h-full opacity-50 bg-sky-100 duration-300 group-hover:w-full" />
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-sky-600 duration-300 group-hover:w-full" />
            <span className="z-10 whitespace-nowrap duration-300 text-base font-medium leading-none">{children}</span>
            {!noIcon && <Icon icon="mingcute:down-line" className="w-5 h-5 duration-300 group-hover:rotate-180" />}
        </button>
    );
};

export default NavbarButton;
