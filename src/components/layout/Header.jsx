import React, { useState, useRef } from "react";
import { Button as HeroUIButton, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Hàm xử lý hover vào
    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    // Hàm xử lý hover ra
    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <header className="w-full relative bg-gradient-to-b from-sky-300 to-sky-600 overflow-hidden">
            <div className="absolute opacity-20 top-[-2px] left-0 w-full h-full bg-[url('src/assets/images/background.svg')] bg-cover bg-[center_top] z-0"></div>

            <div className="relative max-w-screen-xl mx-auto">
                {/* Top */}
                <div className="py-4 flex gap-1.5 items-center">
                    <Icon icon="mingcute:phone-fill" className="text-white w-5 h-5" />
                    <span className="text-white font-medium text-sm">Hotline: 1800 1800</span>
                </div>

                {/* Main */}
                <div className="pt-4 pb-5 flex gap-10">
                    {/* Left */}
                    <div className="h-12 flex items-center">
                        <img src="src/assets/images/logo/header.svg" alt="logo" />
                    </div>

                    {/* Center */}
                    <div className="flex flex-col flex-1 gap-4">
                        <Input
                            placeholder="Bạn đang tìm kiếm gì hôm nay thế..."
                            size="lg"
                            radius="sm"
                            startContent={<Icon icon="mingcute:search-3-line" className="text-sky-600 w-7 h-7" />}
                        />
                        <div className="flex gap-4 px-4 py-1 items-center text-[15px] text-white">
                            <span>Sản phẩm 1</span>
                            <span>Sản phẩm 1</span>
                            <span>Sản phẩm 1</span>
                            <span>Sản phẩm 1</span>
                            <span>Sản phẩm 1</span>
                            <span>Sản phẩm 1</span>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="h-12 flex gap-5 items-center">
                        <div className="h-fit flex gap-5 pr-5 items-center border-r-2 border-white">
                            <Icon icon="mingcute:notification-fill" className="text-white w-7 h-7" />
                            <Icon icon="mingcute:shopping-cart-1-fill" className="text-white w-7 h-7" />
                        </div>
                        {/* Container sử dụng hover */}
                        <div 
                            className="relative" 
                            ref={dropdownRef} 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <HeroUIButton
                                type="button"
                                className="bg-gradient-to-t from-sky-700 to-sky-500 w-48 h-full px-3 flex justify-between items-center rounded-full"
                            >
                                <div className="flex flex-1 min-w-0 gap-1 items-center">
                                    <Icon icon="mingcute:user-4-fill" className="text-white w-9 h-9" />
                                    <span className="text-white font-medium text-[13px] truncate whitespace-nowrap overflow-hidden">
                                        Chào, Đỗ Việt
                                    </span>
                                </div>
                                <Icon icon="mingcute:down-line" className="text-white w-5 h-5" />
                            </HeroUIButton>
                            
                            {/* Dropdown Menu - chính xác như hình */}
                            {dropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 py-2">
                                    <Link to="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                        <Icon icon="mingcute:user-4-line" className="w-5 h-5 mr-3 text-gray-500" />
                                        Thông tin cá nhân
                                    </Link>
                                    <Link to="/address" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                        <Icon icon="mingcute:map-pin-line" className="w-5 h-5 mr-3 text-gray-500" />
                                        Số địa chỉ nhận hàng
                                    </Link>
                                    <Link to="/order-tracking" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                        <Icon icon="mingcute:truck-line" className="w-5 h-5 mr-3 text-gray-500" />
                                        Theo dõi đơn hàng
                                    </Link>
                                    <Link to="/order-history" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                        <Icon icon="mingcute:history-line" className="w-5 h-5 mr-3 text-gray-500" />
                                        Lịch sử đơn hàng
                                    </Link>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <Link to="/logout" className="flex items-center px-4 py-3 text-red-600 hover:bg-gray-50">
                                        <Icon icon="mingcute:logout-line" className="w-5 h-5 mr-3 text-red-500" />
                                        Đăng xuất
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
