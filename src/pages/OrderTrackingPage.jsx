import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const OrderTrackingPage = () => {
    // State để theo dõi tab đang được chọn
    const [activeTab, setActiveTab] = useState("all");
    
    // Thông tin người dùng
    const userInfo = {
        name: "Quốc Bình",
        phone: "0378958138",
    };
    
    // Mẫu dữ liệu đơn hàng
    const orders = [
        {
            id: "25/4/2025",
            date: "25/4/2025",
            time: "10:30:45",
            orderCode: "#8822312",
            status: "delivered", // đã giao
            statusText: "Đã giao",
            isPaid: false,
            items: [
                {
                    id: 1,
                    name: "QUẦN DÀI HẰNG KÉO CLB TẬP BẰNG NẮP LAZADA TIM MOCCH PLATFORM MONGOL PHAB6 TI6",
                    image: "src/assets/images/product-placeholder.png",
                    price: 210000,
                    quantity: 1,
                    isDelivered: true,
                }
            ],
            total: 210000,
            shippingFee: 30000,
            displayPrice: "20.000đ"
        },
        {
            id: "20/4/2025",
            date: "20/4/2025",
            time: "11:45:23",
            orderCode: "#9342488",
            status: "delivering", // đang giao
            statusText: "Đang giao",
            isPaid: false,
            items: [
                {
                    id: 2,
                    name: "GIÀY GIỜ CHUIAHANG THE THẢO CUA TỪ MANN VU DUY HUNG GẤY NHẤT HÀNH THÌN TRỐK Ô",
                    image: "src/assets/images/product-placeholder.png",
                    price: 320000,
                    quantity: 1,
                    isDelivered: false,
                }
            ],
            total: 320000,
            shippingFee: 0,
            displayPrice: "2.300đ"
        }
    ];
    
    // Lọc đơn hàng theo tab được chọn
    const getFilteredOrders = () => {
        switch(activeTab) {
            case "processing":
                return orders.filter(order => order.status === "processing");
            case "delivering":
                return orders.filter(order => order.status === "delivering");
            case "delivered":
                return orders.filter(order => order.status === "delivered");
            default:
                return orders;
        }
    };

    return (
        <div className="py-4 bg-gray-50">
            <div className="max-w-[1280px] mx-auto">
                {/* Container chính */}
                <div className="bg-white rounded-md overflow-hidden shadow-sm">
                    <div className="flex">
                        {/* Sidebar trái */}
                        <div className="w-[230px] min-h-[600px] bg-white border-r border-gray-200">
                            {/* User card */}
                            <div className="bg-blue-600 text-white text-center py-6 px-4">
                                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                                    <Icon icon="mingcute:user-4-fill" className="text-white w-10 h-10" />
                                </div>
                                <div className="font-medium text-lg mt-2">Quốc Bình</div>
                                <div className="text-sm text-blue-100">0378958138</div>
                            </div>
                            
                            {/* Menu */}
                            <div className="py-2">
                                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                    <Icon icon="mingcute:user-4-line" className="w-5 h-5 mr-3 text-gray-500" />
                                    Thông tin cá nhân
                                </a>
                                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                    <Icon icon="mingcute:map-pin-line" className="w-5 h-5 mr-3 text-gray-500" />
                                    Số địa chỉ nhận hàng
                                </a>
                                <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 font-medium">
                                    <Icon icon="mingcute:document-line" className="w-5 h-5 mr-3 text-blue-600" />
                                    Theo dõi đơn hàng
                                </a>
                                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                                    <Icon icon="mingcute:time-line" className="w-5 h-5 mr-3 text-gray-500" />
                                    Lịch sử mua hàng
                                </a>
                            </div>
                        </div>
                        
                        {/* Nội dung chính */}
                        <div className="flex-1 p-6">
                            <h1 className="text-xl font-medium mb-4">Trạng thái đơn hàng</h1>
                            
                            {/* Thanh tìm kiếm */}
                            <div className="mb-6">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Tìm tên đơn, mã đơn, hoặc tên sản phẩm..." 
                                        className="w-full border border-gray-200 rounded-md py-2 px-4 pr-10"
                                    />
                                    <button className="absolute right-3 top-2.5">
                                        <Icon icon="mingcute:search-line" className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Tabs */}
                            <div className="flex border-b border-gray-200 mb-6">
                                <button 
                                    className={`px-4 py-3 font-medium ${activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("all")}
                                >
                                    Tất cả
                                </button>
                                <button 
                                    className={`px-4 py-3 font-medium ${activeTab === "processing" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("processing")}
                                >
                                    Đang xử lý
                                </button>
                                <button 
                                    className={`px-4 py-3 font-medium ${activeTab === "delivering" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("delivering")}
                                >
                                    Đang giao
                                </button>
                                <button 
                                    className={`px-4 py-3 font-medium ${activeTab === "delivered" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("delivered")}
                                >
                                    Đã giao
                                </button>
                            </div>
                            
                            {/* Danh sách đơn hàng */}
                            <div className="space-y-6">
                                {getFilteredOrders().map((order) => (
                                    <div key={order.id} className="mb-6 border border-gray-100 rounded-md overflow-hidden">
                                        {/* Header đơn hàng */}
                                        <div className="flex justify-between items-center bg-gray-50 py-2 px-4 border-b border-gray-100">
                                            <div>
                                                <span className="font-medium">Đơn hàng {order.date}</span>
                                                <span className="text-xs text-gray-400 ml-4">Người tạo đơn hàng</span>
                                                <span className="text-xs text-gray-400 ml-4">{order.orderCode}</span>
                                            </div>
                                            <div>
                                                {order.status === "delivered" ? (
                                                    <span className="text-xs font-medium text-orange-500 flex items-center">
                                                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                                                        Chờ thanh toán
                                                    </span>
                                                ) : (
                                                    <span className="text-xs font-medium text-green-500 flex items-center">
                                                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                                        Đã giao
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Chi tiết đơn hàng */}
                                        <div className="py-4 px-4">
                                            {order.items.map((item) => (
                                                <div key={item.id} className="flex">
                                                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                                                        <img 
                                                            src={item.image || "https://via.placeholder.com/100?text=VH"} 
                                                            alt={item.name} 
                                                            className="w-full h-full object-contain" 
                                                            onError={(e) => {
                                                                e.target.onerror = null; 
                                                                e.target.src = "https://via.placeholder.com/100?text=VH"
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="ml-4 flex-1">
                                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                                        <div className="text-xs text-gray-500 mt-1">Số lượng: 01</div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-xs text-gray-400 line-through">SL: 01</div>
                                                        <div className="text-sm font-medium mt-1">{order.displayPrice}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Footer đơn hàng */}
                                        <div className="bg-gray-50 py-3 px-4 flex justify-between items-center">
                                            <div>
                                                <span className="text-sm font-medium">
                                                    Thành tiền: <span className="text-blue-600">
                                                        {order.status === "delivered" ? "45.000đ" : "32.500đ"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <button className="bg-blue-600 text-white rounded-md px-6 py-2 text-sm">
                                                    {order.status === "delivered" ? "Liên hệ shop" : "Mua lại"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                {getFilteredOrders().length === 0 && (
                                    <div className="text-center p-8 bg-white rounded-md border border-gray-100">
                                        <p className="text-gray-500">Không tìm thấy đơn hàng nào</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTrackingPage;