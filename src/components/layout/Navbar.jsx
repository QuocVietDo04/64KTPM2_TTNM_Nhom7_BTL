import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    // Dữ liệu danh mục và menu con
    const categories = [
        {
            id: 'thuc-pham-chuc-nang',
            name: 'Thực phẩm chức năng',
            hasDropdown: true,
            items: [
                'Vitamin & Khoáng chất',
                'Sinh lý - Nội tiết tố',
                'Cải thiện sức khỏe',
                'Hỗ trợ điều trị',
                'Hỗ trợ tiêu hóa',
                'Thần kinh não',
                'Hỗ trợ làm đẹp',
                'Sức khỏe tim mạch',
                'Dinh dưỡng'
            ]
        },
        {
            id: 'duoc-my-pham',
            name: 'Dược mỹ phẩm',
            hasDropdown: true,
            items: [
                'Chăm sóc da mặt',
                'Chăm sóc cơ thể',
                'Giải pháp làn da',
                'Mỹ phẩm trang điểm',
                'Chăm sóc da vùng mắt',
                'Sản phẩm từ thiên nhiên'
            ]
        },
        {
            id: 'cham-soc-ca-nhan',
            name: 'Chăm sóc cá nhân',
            hasDropdown: true,
            items: [
                'Hỗ trợ tình dục',
                'Thực phẩm - Đồ uống',
                'Vệ sinh cá nhân',
                'Chăm sóc răng miệng',
                'Đồ dùng gia đình',
                'Tinh dầu các loại',
                'Thiết bị làm đẹp'
            ]
        },
        {
            id: 'me-va-be',
            name: 'Mẹ và bé',
            hasDropdown: true,
            items: [
                'Phụ kiện',
                'Bảo vệ mẹ & bé',
                'Vệ sinh cá nhân',
                'Sữa',
                'Tã & Bỉm'
            ]
        },
        {
            id: 'san-pham-tien-loi',
            name: 'Sản phẩm tiện lợi',
            hasDropdown: true,
            items: [
                'Khăn & Giấy ướt',
                'Điện giải',
                'Kẹo ngậm & Kẹo gum',
                'Trà',
                'Khẩu trang'
            ]
        },
        {
            id: 'thiet-bi-y-te',
            name: 'Thiết bị y tế',
            hasDropdown: true,
            items: [
                'Dụng cụ y tế',
                'Dụng cụ theo dõi',
                'Dụng cụ sơ cứu'
            ]
        },
        {
            id: 'tra-cuu',
            name: 'Tra cứu',
            hasDropdown: true,
            items: [
                'Bệnh thường gặp',
                'Tra cứu thuốc',
                'Tra cứu dược chất',
                'Tra cứu dược liệu'
            ]
        },
        {
            id: 'tiem-chung',
            name: 'Tiêm chủng',
            hasDropdown: false,
            noIcon: true
        }
    ];

    const handleMouseEnter = (categoryId) => {
        setHoveredCategory(categoryId);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <nav className="w-full bg-white shadow-sm relative z-50">
            <div className="relative max-w-screen-xl mx-auto flex justify-between">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(category.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Category Button - Using NavbarButton styling */}
                        <button
                            type="button"
                            className="bg-transparent relative py-4 flex items-center gap-2 group hover:text-sky-600 duration-300 transition-all"
                        >
                            {/* Background overlay effect */}
                            <div className={`absolute top-0 left-0 h-full opacity-50 bg-sky-100 duration-300 ${
                                hoveredCategory === category.id ? 'w-full' : 'w-0'
                            }`} />
                            
                            {/* Bottom border effect */}
                            <div className={`absolute bottom-0 left-0 h-[3px] bg-sky-600 duration-300 ${
                                hoveredCategory === category.id ? 'w-full' : 'w-0'
                            }`} />
                            
                            {/* Text */}
                            <span className="z-10 whitespace-nowrap duration-300 text-base font-medium leading-none">
                                {category.name}
                            </span>
                            
                            {/* Icon */}
                            {!category.noIcon && (
                                <Icon 
                                    icon="mingcute:down-line" 
                                    className={`w-5 h-5 duration-300 z-10 ${
                                        hoveredCategory === category.id ? 'rotate-180' : ''
                                    }`}
                                />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {category.hasDropdown && hoveredCategory === category.id && (
                            <div 
                                className="absolute top-full left-0 bg-white rounded-tl-none rounded-2xl border border-gray-200 shadow-lg p-2 min-w-60 z-[9999]"
                                style={{ zIndex: 9999 }}
                            >
                                {category.items.map((item, index) => (
                                    <button
                                        key={index}
                                        className="rounded-xl block w-full text-left p-4 text-base text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors duration-150"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;


