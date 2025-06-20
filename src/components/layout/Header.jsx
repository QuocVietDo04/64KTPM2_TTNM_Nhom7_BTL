import React, { useState, useRef, useEffect } from "react";
import { Button as HeroUIButton, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import NavbarButton from "../shared/NavbarButton";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [hasSubmittedSearch, setHasSubmittedSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const timeoutRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(stored);
    }, []);

    useEffect(() => {
        if (location.pathname === '/') {
            setSearchTerm('');
            setShowResults(false);
            setShowSuggestions(false);
            setHasSubmittedSearch(false);
            document.activeElement.blur();
        }
    }, [location.pathname]);

    useEffect(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!hasSubmittedSearch) {
            setShowResults(term === 'omega 3');
            setShowSuggestions(term !== 'omega 3');
        } else {
            setShowResults(false);
            setShowSuggestions(false);
        }
    }, [searchTerm, hasSubmittedSearch]);

    const saveSearchHistory = (keyword) => {
        if (!keyword) return;
        let updated = [keyword, ...searchHistory.filter(i => i !== keyword)];
        if (updated.length > 5) updated = updated.slice(0, 5);
        setSearchHistory(updated);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            const keyword = searchTerm.trim().toLowerCase();
            saveSearchHistory(keyword);
            setHasSubmittedSearch(true);
            setShowSuggestions(false);
            setShowResults(false);

            if (keyword === 'omega 3') {
                navigate('/search-result');
            } else if (keyword === '') {
                navigate('/');
                document.activeElement.blur();
            } else {
                navigate('/not-found');
            }
        }
    };

    const deleteHistoryItem = (item) => {
        const updated = searchHistory.filter(i => i !== item);
        setSearchHistory(updated);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
    };

    const clearAllHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('searchHistory');
    };

    const selectFromHistory = (keyword) => {
        setSearchTerm(keyword);
        saveSearchHistory(keyword);
        setHasSubmittedSearch(true);
        setShowSuggestions(false);
        setShowResults(false);
        navigate(keyword === 'omega 3' ? '/search-result' : '/not-found');
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            if (!isDropdownHovered) setIsHovered(false);
        }, 150);
    };

    const handleDropdownMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
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

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <header className="w-full relative bg-gradient-to-b from-sky-300 to-sky-600 z-40">
            <div className="absolute opacity-20 top-[-2px] left-0 w-full h-full bg-[url('/src/assets/images/background.svg')] bg-cover bg-[center_top] z-0"></div>

            <div className="relative max-w-screen-xl mx-auto z-10">
                <div className="py-4 flex gap-1.5 items-center">
                    <Icon icon="mingcute:phone-fill" className="text-white w-5 h-5" />
                    <span className="text-white font-medium text-sm">Hotline: 1800 1800</span>
                </div>

                <div className="pt-4 pb-5 flex gap-10">
                    <Link to="/" className="h-12 flex items-center">
                        <img src="src/assets/images/logo/header.svg" alt="logo" />
                    </Link>

                    <div className="flex flex-col flex-1 gap-4 relative">
                        <Input
                            placeholder="Tìm kiếm"
                            size="lg"
                            radius="sm"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setHasSubmittedSearch(false);
                            }}
                            onFocus={() => {
                                const term = searchTerm.trim().toLowerCase();
                                setShowSuggestions(term !== 'omega 3');
                            }}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            onKeyDown={handleSearchKeyDown}
                            startContent={<Icon icon="mingcute:search-3-line" className="text-sky-600 w-7 h-7" />}
                        />

                        {showResults && (
                            <div className="absolute top-12 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-gray-800">Kết quả tìm kiếm</h3>
                                    <button className="text-sky-500 text-sm hover:underline">Xem tất cả</button>
                                </div>
                                <ul className="space-y-3 mt-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-300 rounded"></div>
                                            <span className="text-sm text-gray-800 font-medium">Omega 3</span>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4" />
                                <div className="pt-2">
                                    <h4 className="text-sm font-bold text-gray-600 mb-2">Tra cứu hàng đầu</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Name of Item", "Name of Item", "Name of Item", "Name of Item"].map((item, index) => (
                                            <span key={index} className="px-4 py-1 border border-sky-500 text-sky-600 rounded-full text-sm cursor-pointer hover:bg-sky-50 transition">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {showSuggestions && (
                            <div className="absolute top-12 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                                <div className="p-4 border-b">
                                    <div className="flex justify-between mb-2">
                                        <h4 className="text-sm font-bold text-gray-600">Lịch sử tìm kiếm</h4>
                                        <button onClick={clearAllHistory} className="text-sm text-blue-500 hover:underline">Xoá tất cả</button>
                                    </div>
                                    {searchHistory.length > 0 ? (
                                        <ul className="space-y-2">
                                            {searchHistory.map((item, index) => (
                                                <li key={index} className="flex items-center justify-between group">
                                                    <button onClick={() => selectFromHistory(item)} className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
                                                        <Icon icon="mingcute:time-line" className="w-4 h-4" />
                                                        <span>{item}</span>
                                                    </button>
                                                    <button onClick={() => deleteHistoryItem(item)} className="text-gray-400 hover:text-red-500">
                                                        <Icon icon="mingcute:close-line" className="w-4 h-4" />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-500">Không có lịch sử tìm kiếm</p>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="text-sm font-bold text-gray-600 mb-2">Tra cứu hàng đầu</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Chống lão hóa", "Sữa rửa mặt", "Dung dịch vệ sinh", "Kem chống nắng"].map((item, index) => (
                                            <span key={index} className="px-4 py-1 border border-sky-500 text-sky-600 rounded-full text-sm cursor-pointer hover:bg-sky-50 transition">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-4 px-4 py-1 items-center text-[15px] text-white">
                            <span>Omega 3</span>
                            <span>Canxi</span>
                            <span>Chống lão hóa</span>
                            <span>Sữa rửa mặt</span>
                            <span>Dung dịch vệ sinh</span>
                            <span>Kem chống nắng</span>
                        </div>
                    </div>

                    <div className="h-12 flex gap-5 items-center relative z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="h-fit flex gap-5 pr-5 items-center border-r-2 border-white">
                            <Icon icon="mingcute:notification-fill" className="text-white w-7 h-7" />
                            <Icon icon="mingcute:shopping-cart-1-fill" className="text-white w-7 h-7" />
                        </div>
                        <HeroUIButton className="bg-gradient-to-t from-sky-700 to-sky-500 w-48 h-full px-3 flex justify-between items-center rounded-full relative z-50">
                            <div className="flex flex-1 min-w-0 gap-1 items-center">
                                <Icon icon="mingcute:user-4-fill" className="text-white w-9 h-9" />
                                <span className="text-white font-medium text-[13px] truncate whitespace-nowrap overflow-hidden">Chào, Đỗ Quốc Việt</span>
                            </div>
                            <Icon icon="mingcute:down-line" className="text-white w-5 h-5" />
                        </HeroUIButton>

                        {isHovered && (
                            <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50"
                                 onMouseEnter={handleDropdownMouseEnter}
                                 onMouseLeave={handleDropdownMouseLeave}
                                 style={{
                                     zIndex: 99999,
                                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                                     backdropFilter: 'blur(8px)',
                                     WebkitBackdropFilter: 'blur(8px)'
                                 }}
                            >
                                <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => handleNavigate("/profile")}>
                                    <Icon icon="mingcute:user-4-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Thông tin cá nhân</span>
                                </div>
                                <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => handleNavigate("/shipping-address")}>
                                    <Icon icon="mingcute:map-pin-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Sổ địa chỉ nhận hàng</span>
                                </div>
                                <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => handleNavigate("/track-order")}>
                                    <Icon icon="mingcute:truck-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Theo dõi đơn hàng</span>
                                </div>
                                <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer" onClick={() => handleNavigate("/order-history")}>
                                    <Icon icon="mingcute:history-line" className="w-5 h-5 mr-3 text-gray-600" />
                                    <span className="text-gray-800 font-medium">Lịch sử mua hàng</span>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex items-center px-4 py-3 text-red-500 hover:bg-red-50 cursor-pointer" onClick={() => console.log("Đăng xuất")}>
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
