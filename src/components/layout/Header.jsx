import React, { useState, useRef, useEffect } from "react";
import { Button as HeroUIButton, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import NavbarButton from "../shared/NavbarButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            const keyword = searchTerm.trim().toLowerCase();
            if (keyword === 'omega 3') {
                navigate('/search-result');
            } else {
                navigate('/not-found');
            }
        }
    };

    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            if (!isDropdownHovered) {
                setIsHovered(false);
            }
        }, 150); // Delay 150ms trước khi ẩn dropdown
    };

    const handleDropdownMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownHovered(false);
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 150);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsHovered(false);
        setIsDropdownHovered(false);
    };

    // Cleanup timeout khi component unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <header className="w-full relative bg-gradient-to-b from-sky-300 to-sky-600 z-40">
            <div className="absolute opacity-20 top-[-2px] left-0 w-full h-full bg-[url('/src/assets/images/background.svg')] bg-cover bg-[center_top] z-0"></div>

            <div className="relative max-w-screen-xl mx-auto z-10">
                {/* Top */}
                <div className="py-4 flex gap-1.5 items-center">
                    <Icon icon="mingcute:phone-fill" className="text-white w-5 h-5" />
                    <span className="text-white font-medium text-sm">Hotline: 1800 1800</span>
                </div>

                {/* Main */}
                <div className="pt-4 pb-5 flex gap-10">
                    {/* Left */}
                    <Link to="/" className="h-12 flex items-center">
                        <img src="src/assets/images/logo/header.svg" alt="logo" />
                    </Link>

                    {/* Center */}
                    <div className="flex flex-col flex-1 gap-4">
                        <Input
                            placeholder="Bạn đang tìm kiếm gì hôm nay thế..."
                            size="lg"
                            radius="sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                            startContent={<Icon icon="mingcute:search-3-line" className="text-sky-600 w-7 h-7" />}
                        />
                        <div className="flex gap-4 px-4 py-1 items-center text-[15px] text-white">
                            <span>Omega 3</span>
                            <span>Canxi</span>
                            <span>Chống lão hóa</span>
                            <span>Sữa rửa mặt</span>
                            <span>Dung dịch vệ sinh</span>
                            <span>Kem chống nắng</span>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className="h-12 flex gap-5 items-center relative z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="h-fit flex gap-5 pr-5 items-center border-r-2 border-white">
                            <Icon icon="mingcute:notification-fill" className="text-white w-7 h-7" />
                            <Icon icon="mingcute:shopping-cart-1-fill" className="text-white w-7 h-7" />
                        </div>
                        <HeroUIButton
                            type="reset"
                            className="bg-gradient-to-t from-sky-700 to-sky-500 w-48 h-full px-3 flex justify-between items-center rounded-full relative z-50"
                        >
                            <div className="flex flex-1 min-w-0 gap-1 items-center">
                                <Icon icon="mingcute:user-4-fill" className="text-white w-9 h-9" />
                                <span className="text-white font-medium text-[13px] truncate whitespace-nowrap overflow-hidden">
                                    Chào, Đỗ Quốc Việt
                                </span>
                            </div>
                            <Icon icon="mingcute:down-line" className="text-white w-5 h-5" />
                        </HeroUIButton>

                        {/* Dropdown Menu - Positioned relative to button */}
                        {isHovered && (
                            <div 
                                className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                                style={{ 
                                    zIndex: 99999,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)'
                                }}
                            >
                                <div
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                    onClick={() => handleNavigate("/profile")}
                                >
                                    <Icon icon="mingcute:user-4-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Thông tin cá nhân</span>
                                </div>
                                <div
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                    onClick={() => handleNavigate("/shipping-address")}
                                >
                                    <Icon icon="mingcute:map-pin-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Sổ địa chỉ nhận hàng</span>
                                </div>
                                <div
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                    onClick={() => handleNavigate("/track-order")}
                                >
                                    <Icon icon="mingcute:truck-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Theo dõi đơn hàng</span>
                                </div>
                                <div
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                    onClick={() => handleNavigate("/order-history")}
                                >
                                    <Icon icon="mingcute:history-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Lịch sử mua hàng</span>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div
                                    className="flex items-center px-4 py-3 text-red-500 hover:bg-red-50 cursor-pointer transition-all duration-200"
                                    onClick={() => console.log("Đăng xuất")}
                                >
                                    <Icon icon="mingcute:exit-line" className="w-5 h-5 mr-3" />
                                    <span className="font-medium">Đăng xuất</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


