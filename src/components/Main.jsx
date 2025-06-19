import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    // Cấu hình slider banner
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Cấu hình slider sản phẩm
    const productSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Dữ liệu banner - sử dụng hình ảnh từ medicine_img
    const banners = [
        {
            id: 1,
            image: "src/assets/images/medicine_img/1.webp",
            title: "Tra cứu sức khoẻ x3 niềm vui cùng Techcombank",
            subtitle: "Giảm đến 400.000đ"
        },
        {
            id: 2,
            image: "src/assets/images/medicine_img/2.webp",
            title: "Khuyến mãi tháng 6",
            subtitle: "Giảm đến 450.000đ"
        },
        {
            id: 3,
            image: "src/assets/images/medicine_img/3.webp",
            title: "Ngủ ngon trọn giấc",
            subtitle: "Sản phẩm mới"
        }
    ];

    // Dữ liệu sản phẩm bán chạy - sử dụng hình ảnh từ medicine_img
    const bestSellingProducts = [
        {
            id: 1,
            name: "Glotadol 650mg Paracetamol - Hạ sốt, Giảm đau",
            price: "168.000đ",
            salePrice: "149.000đ",
            image: "src/assets/images/medicine_img/1.webp",
            isNew: true
        },
        {
            id: 2,
            name: "Hapacol 80 - Hạ sốt, Giảm đau cho trẻ em",
            price: "168.000đ",
            salePrice: "149.000đ",
            image: "src/assets/images/medicine_img/2.webp",
            isNew: true
        },
        {
            id: 3,
            name: "Efferalgan Paracetamol 500mg - Đau đầu, Hạ sốt",
            price: "168.000đ",
            salePrice: "149.000đ",
            image: "src/assets/images/medicine_img/3.webp",
            isNew: true
        },
        {
            id: 4,
            name: "Acefalgan 500 - Acetaminophen 500mg",
            price: "168.000đ",
            salePrice: "149.000đ",
            image: "src/assets/images/medicine_img/4.webp",
            isNew: true
        },
        {
            id: 5,
            name: "Panactol Paracetamol 500mg - Giảm đau, Hạ sốt",
            price: "168.000đ",
            salePrice: "149.000đ",
            image: "src/assets/images/medicine_img/5.webp",
            isNew: true
        }
    ];

    // Dữ liệu danh mục chính
    const mainCategories = [
        { 
            id: 1, 
            name: "Tra thuốc chính hãng", 
            icon: "mingcute:medicine-box-line",
            path: "/medicine-check" 
        },
        { 
            id: 2, 
            name: "Cần mua thuốc", 
            icon: "mingcute:capsule-line",
            path: "/buy-medicine" 
        },
        { 
            id: 3, 
            name: "Tư vấn với Dược Sỹ", 
            icon: "mingcute:user-4-line",
            path: "/pharmacist" 
        },
        { 
            id: 4, 
            name: "Đơn của tôi", 
            icon: "mingcute:document-line",
            path: "/order-tracking" 
        },
        { 
            id: 5, 
            name: "Tìm nhà thuốc", 
            icon: "mingcute:map-pin-line",
            path: "/find-pharmacy" 
        },
        { 
            id: 6, 
            name: "Tiêm Vắc xin", 
            icon: "mingcute:syringe-line",
            path: "/vaccination" 
        }
    ];

    // Dữ liệu danh mục nổi bật
    const popularCategories = [
        { id: 1, name: "Thận tiết niệu", count: "89 sản phẩm", icon: "mingcute:kidney-line" },
        { id: 2, name: "Vitamin & Khoáng chất", count: "152 sản phẩm", icon: "mingcute:pill-line" },
        { id: 3, name: "Dưỡng chất cho mắt", count: "56 sản phẩm", icon: "mingcute:eye-line" },
        { id: 4, name: "Thần kinh não", count: "78 sản phẩm", icon: "mingcute:brain-line" },
        { id: 5, name: "Sinh lý - Nội tiết", count: "65 sản phẩm", icon: "mingcute:hormone-line" },
        { id: 6, name: "Dinh dưỡng", count: "110 sản phẩm", icon: "mingcute:nutrition-line" },
        { id: 7, name: "Hỗ trợ điều trị", count: "94 sản phẩm", icon: "mingcute:medicine-chest-line" },
        { id: 8, name: "Hệ tiêu hóa", count: "85 sản phẩm", icon: "mingcute:stomach-line" },
        { id: 9, name: "Giải pháp làm đẹp", count: "65 sản phẩm", icon: "mingcute:beauty-line" },
        { id: 10, name: "Chăm sóc da mặt", count: "48 sản phẩm", icon: "mingcute:lotion-line" },
        { id: 11, name: "Hỗ trợ giảm cân", count: "36 sản phẩm", icon: "mingcute:scales-line" },
        { id: 12, name: "Hỗ trợ tinh dục", count: "29 sản phẩm", icon: "mingcute:heart-line" },
    ];

    // Dữ liệu thương hiệu phổ biến - sử dụng hình ảnh từ medicine_img
    const popularBrands = [
        { id: 1, name: "Glotadol", image: "src/assets/images/medicine_img/1.webp", discount: "35%" },
        { id: 2, name: "Hapacol", image: "src/assets/images/medicine_img/2.webp", discount: "25%" },
        { id: 3, name: "Efferalgan", image: "src/assets/images/medicine_img/3.webp", discount: "25%" },
        { id: 4, name: "Acefalgan", image: "src/assets/images/medicine_img/4.webp", discount: "25%" },
        { id: 5, name: "Omega 3", image: "src/assets/images/medicine_img/10.webp", discount: "20%" },
    ];

    return (
        <div className="bg-gray-50 pb-10">
            {/* Banner Slider */}
            <section className="mb-8">
                <Slider {...bannerSettings}>
                    {banners.map(banner => (
                        <div key={banner.id}>
                            <div className="relative">
                                <img 
                                    src={banner.image} 
                                    alt={banner.title} 
                                    className="w-full h-[320px] object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        e.target.src = "src/assets/images/background.svg"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Service Icons */}
            <section className="mb-8 max-w-[1280px] mx-auto">
                <div className="grid grid-cols-6 gap-4">
                    {mainCategories.map((category) => (
                        <Link 
                            key={category.id}
                            to={category.path} 
                            className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center gap-2"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Icon icon={category.icon} className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-center">{category.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Products section */}
            <section className="mb-8 max-w-[1280px] mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                        <span className="relative">
                            {/* Thay thế palm-left.svg và palm-right.svg bằng background.svg từ thư mục assets */}
                            <span className="absolute left-0 -top-6">
                                <img src="src/assets/images/background.svg" 
                                     alt="" className="h-5" />
                            </span>
                            <span className="absolute right-0 -top-6">
                                <img src="src/assets/images/background.svg" 
                                     alt="" className="h-5" />
                            </span>
                            Sản phẩm bán chạy
                        </span>
                    </h2>
                    <a href="#" className="text-blue-600 font-medium">Xem tất cả</a>
                </div>
                
                <div className="relative">
                    <Slider {...productSettings}>
                        {bestSellingProducts.map((product) => (
                            <div key={product.id} className="px-2">
                                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden relative">
                                    {product.isNew && (
                                        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-medium py-1 px-2 rounded">
                                            NEW
                                        </span>
                                    )}
                                    <div className="p-3">
                                        <div className="relative h-[180px] mb-3 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="max-h-[160px] max-w-[160px] object-contain"
                                                onError={(e) => {
                                                    e.target.onerror = null; 
                                                    e.target.src = "src/assets/images/background.svg"
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-sm line-clamp-2 h-10">{product.name}</h3>
                                        <div className="mt-2 flex items-center justify-between">
                                            <div>
                                                <span className="text-blue-600 font-semibold">{product.salePrice}</span>
                                                <span className="text-gray-400 text-xs line-through ml-2">{product.price}</span>
                                            </div>
                                        </div>
                                        <button className="w-full mt-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                            Chọn mua
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Popular Categories */}
            <section className="mb-8 max-w-[1280px] mx-auto">
                <h2 className="text-xl font-semibold mb-4">Danh mục nổi bật</h2>
                <div className="grid grid-cols-6 gap-4">
                    {popularCategories.map((category) => (
                        <a 
                            key={category.id}
                            href="#" 
                            className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                <Icon icon={category.icon} className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-sm font-medium text-center mb-1">{category.name}</h3>
                            <p className="text-xs text-gray-500">{category.count}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Health Check Section */}
            <section className="mb-8 max-w-[1280px] mx-auto">
                <div className="bg-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full flex items-center">
                        {/* Thay thế doctors.png bằng hình ảnh 6.webp từ medicine_img */}
                        <img 
                            src="src/assets/images/medicine_img/6.webp" 
                            alt="Bác sĩ" 
                            className="h-full max-h-[180px] object-contain"
                        />
                    </div>
                    <div className="w-3/5">
                        <h2 className="text-2xl font-bold mb-3">Kiểm tra sức khỏe</h2>
                        <p className="mb-6">Kiểm định sức khỏe để có phương pháp tư vấn phù hợp với bạn</p>
                        
                        <div className="grid grid-cols-3 gap-3">
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-left flex flex-col">
                                <div className="flex items-center">
                                    <Icon icon="mingcute:body-line" className="text-white w-5 h-5 mr-2" />
                                    <span className="font-medium">Đo chỉ số sức khỏe và cân nặng cân đối</span>
                                </div>
                                <span className="mt-2 text-xs text-blue-100">Bắt đầu</span>
                            </button>
                            
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-left flex flex-col">
                                <div className="flex items-center">
                                    <Icon icon="mingcute:heart-pulse-line" className="text-white w-5 h-5 mr-2" />
                                    <span className="font-medium">Đo nhịp tim và huyết áp</span>
                                </div>
                                <span className="mt-2 text-xs text-blue-100">Bắt đầu</span>
                            </button>
                            
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-left flex flex-col">
                                <div className="flex items-center">
                                    <Icon icon="mingcute:lungs-line" className="text-white w-5 h-5 mr-2" />
                                    <span className="font-medium">Kiểm tra phổi và hệ hô hấp</span>
                                </div>
                                <span className="mt-2 text-xs text-blue-100">Bắt đầu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Brands */}
            <section className="mb-8 max-w-[1280px] mx-auto">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon icon="mingcute:heart-fill" className="text-blue-600 w-5 h-5 mr-2" />
                    Thương hiệu yêu thích
                </h2>
                
                <div className="grid grid-cols-5 gap-4">
                    {popularBrands.map((brand) => (
                        <a 
                            key={brand.id}
                            href="#" 
                            className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <div className="h-20 flex items-center justify-center mb-3">
                                <img 
                                    src={brand.image} 
                                    alt={brand.name} 
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        e.target.src = "src/assets/images/background.svg"
                                    }}
                                />
                            </div>
                            <div className="w-full bg-gray-50 text-center py-1 rounded">
                                <span className="text-sm">Giảm đến: <span className="text-blue-600 font-semibold">{brand.discount}</span></span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Main;