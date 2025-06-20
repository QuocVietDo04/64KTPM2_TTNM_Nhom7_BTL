import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
    Card,
    CardBody,
    CardHeader,
    Input,
    Button,
    Tabs,
    Tab,
    Avatar,
    Chip,
    Divider
} from "@heroui/react";

const OrderTrackingPage = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    // Thông tin người dùng
    const userInfo = {
        name: "Đỗ Quốc Việt",
        phone: "0981402187",
    };
    
    // Mẫu dữ liệu đơn hàng
    const orders = [
        {
            id: "#8822312",
            date: "25/4/2025",
            time: "10:30:45",
            orderCode: "#8822312",
            status: "delivered", // đã giao
            statusText: "Đã giao",
            isPaid: false,
            paymentStatus: "Chờ thanh toán",
            items: [
                {
                    id: 1,
                    name: "QUẦN DÀI HẰNG KÉO CLB TẬP BẰNG NẮP LAZADA TIM MOCCH PLATFORM MONGOL PHAB6 TI6",
                    image: "src/assets/images/product-placeholder.png",
                    price: 210000,
                    quantity: 1,
                    unit: "Chiếc",
                    isDelivered: true,
                }
            ],
            total: "45.000đ",
            shippingFee: 30000,
            displayPrice: "20.000đ"
        },
        {
            id: "#9342488",
            date: "20/4/2025",
            time: "11:45:23",
            orderCode: "#9342488",
            status: "delivering", // đang giao
            statusText: "Đang giao",
            isPaid: true,
            paymentStatus: "Đã thanh toán",
            items: [
                {
                    id: 2,
                    name: "GIÀY GIỜ CHUIAHANG THE THẢO CUA TỪ MANN VU DUY HUNG GẤY NHẤT HÀNH THÌN TRỐK Ô",
                    image: "src/assets/images/product-placeholder.png",
                    price: 320000,
                    quantity: 1,
                    unit: "Đôi",
                    isDelivered: false,
                }
            ],
            total: "32.500đ",
            shippingFee: 0,
            displayPrice: "32.500đ"
        }
    ];
    
    // Lọc đơn hàng theo tab và tìm kiếm
    const getFilteredOrders = () => {
        return orders.filter(order => {
            const matchesTab = activeTab === "all" || order.status === activeTab;
            const matchesSearch = searchQuery === "" || 
                order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesTab && matchesSearch;
        });
    };

    // Lấy số lượng đơn hàng cho từng trạng thái
    const getOrderCount = (status) => {
        if (status === "all") return orders.length;
        return orders.filter(order => order.status === status).length;
    };

    const handleGoHome = () => {
        navigate('/');
    };

    // Định nghĩa các mục menu
    const menuItems = [
        { key: 'profile', label: 'Thông tin cá nhân', icon: 'mingcute:user-4-line', path: '/profile' },
        { key: 'address', label: 'Sổ địa chỉ nhận hàng', icon: 'mingcute:map-pin-line', path: '/shipping-address' },
        { key: 'tracking', label: 'Theo dõi đơn hàng', icon: 'mingcute:truck-line', path: '/track-order', active: true },
        { key: 'history', label: 'Lịch sử mua hàng', icon: 'mingcute:history-line', path: '/order-history' }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case "delivered": return "green"; // Đã giao - màu xanh lá
            case "delivering": return "yellow"; // Đang giao - màu vàng (thay vì blue)
            case "processing": return "orange"; // Đang xử lý - màu cam
            default: return "gray";
        }
    };

    // Thêm hàm mới để xác định màu cho trạng thái thanh toán
    const getPaymentStatusColor = (isPaid, status) => {
        if (!isPaid) return "orange"; // Chờ thanh toán - màu cam
        if (status === "delivered") return "green"; // Đã giao + Đã thanh toán - màu xanh lá
        return getStatusColor(status); // Các trường hợp khác theo status
    };

    const getStatusText = (status) => {
        switch(status) {
            case "delivered": return "Đã giao";
            case "delivering": return "Đang giao";
            case "processing": return "Đang xử lý";
            default: return "Không xác định";
        }
    };

    return (
        <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
            {/* Sidebar */}
            <div className="w-80">
                {/* User Info Card */}
                <Card className="mb-6 h-52">
                    <CardBody className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
                        <Avatar
                            icon={<Icon icon="mingcute:user-4-fill" className="w-8 h-8" />}
                            className="w-16 h-16 bg-white/20 mx-auto mb-3"
                        />
                        <h3 className="text-lg font-semibold">{userInfo.name}</h3>
                        <p className="text-sm opacity-90">{userInfo.phone}</p>
                    </CardBody>
                </Card>

                {/* Sidebar Menu */}
                <Card>
                    <CardBody className="p-2">
                        {menuItems.map((item) => (
                            <Button
                                key={item.key}
                                variant={item.active ? "flat" : "light"}
                                color={item.active ? "primary" : "default"}
                                className={`w-full justify-start mb-1 ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                                startContent={<Icon icon={item.icon} className="w-4 h-4" />}
                                onClick={() => navigate(item.path)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </CardBody>
                </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1 h-fit">
                <Card className="h-full">
                    <CardHeader className="flex justify-between items-center pb-4">
                        <h1 className="text-2xl font-bold text-gray-800">TRẠNG THÁI ĐƠN HÀNG</h1>
                        <Input
                            placeholder="Tìm tên đơn, mã đơn, hoặc tên sản phẩm..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-80"
                            startContent={<Icon icon="mingcute:search-line" className="w-4 h-4 text-gray-400" />}
                            variant="bordered"
                        />
                    </CardHeader>

                    <CardBody>
                        {/* Status Tabs */}
                        <Tabs
                            selectedKey={activeTab}
                            onSelectionChange={setActiveTab}
                            variant="underlined"
                            color="primary"
                            className="mb-6"
                        >
                            {[
                                { key: 'all', label: 'Tất cả' },
                                { key: 'processing', label: 'Đang xử lý' },
                                { key: 'delivering', label: 'Đang giao' },
                                { key: 'delivered', label: 'Đã giao' }
                            ].map(tab => (
                                <Tab
                                    key={tab.key}
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <span>{tab.label}</span>
                                            <Chip 
                                                size="sm" 
                                                variant="flat"
                                                color={tab.key === "delivered" ? "success" : tab.key === "delivering" ? "warning" : tab.key === "processing" ? "warning" : "default"}
                                            >
                                                {getOrderCount(tab.key)}
                                            </Chip>
                                        </div>
                                    }
                                />
                            ))}
                        </Tabs>

                        {/* Orders List */}
                        <div className="space-y-4">
                            {getFilteredOrders().length > 0 ? (
                                getFilteredOrders().map((order) => (
                                    <Card key={order.id} className="shadow-sm hover:shadow-md transition-shadow">
                                        <CardBody>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-semibold text-gray-800">Đơn hàng {order.date}</span>
                                                    <span className="text-sm text-gray-500">Người tạo đơn hàng</span>
                                                    <span className="text-sm text-gray-500">{order.orderCode}</span>
                                                </div>
                                                
                                                {/* Thay thế đoạn code hiển thị trạng thái */}
                                                {(() => {
                                                    const paymentColor = getPaymentStatusColor(order.isPaid, order.status);
                                                    const paymentColorClass = {
                                                        green: "text-green-500",
                                                        yellow: "text-yellow-500",
                                                        orange: "text-orange-500",
                                                        gray: "text-gray-500"
                                                    }[paymentColor];
                                                    
                                                    const dotColorClass = {
                                                        green: "bg-green-500",
                                                        yellow: "bg-yellow-500",
                                                        orange: "bg-orange-500",
                                                        gray: "bg-gray-500"
                                                    }[paymentColor];
                                                    
                                                    return (
                                                        <div className={`flex items-center ${paymentColorClass} font-semibold text-sm`}>
                                                            <span className={`w-2 h-2 ${dotColorClass} rounded-full mr-1`}></span> 
                                                            {!order.isPaid 
                                                                ? "Chờ thanh toán" 
                                                                : order.status === "delivered" 
                                                                    ? "Đã giao" 
                                                                    : order.status === "delivering" 
                                                                        ? "Đang giao" 
                                                                        : "Đang xử lý"}
                                                        </div>
                                                    );
                                                })()}
                                            </div>

                                            <Divider className="mb-4" />

                                            {order.items.map((item) => (
                                                <div key={item.id} className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-start mb-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-contain rounded-lg flex-shrink-0 bg-gray-50"
                                                        onError={(e) => {
                                                            e.target.onerror = null; 
                                                            e.target.src = "https://via.placeholder.com/100?text=VH"
                                                        }}
                                                    />
                                                    <div className="flex flex-col">
                                                        <h3 className="font-medium text-gray-800 leading-tight">
                                                            {item.name}
                                                        </h3>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="text-lg font-semibold text-gray-800">{order.displayPrice}</span>
                                                        <span className="text-sm text-gray-500">x{item.quantity} {item.unit || "Sản phẩm"}</span>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                                <div className="font-medium">
                                                    Thành tiền: <span className="text-blue-600 font-semibold">{order.total}</span>
                                                </div>
                                                <Button
                                                    color="primary"
                                                    className="font-medium px-6"
                                                >
                                                    {order.status === "delivered" ? "Liên hệ shop" : "Mua lại"}
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                ))
                            ) : (
                                <Card className="text-center py-0">
                                    <CardBody>
                                        <img src="/src/assets/images/order-not-found.svg" className="w-80 h-80 mx-auto text-gray-300 mb-0" />
                                        <div className="text-center max-w-md mx-auto">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">Không tìm thấy đơn hàng nào</h3>
                                            <p className="text-gray-500 mb-1">Bạn có thể tìm kiếm theo mã đơn hàng<br />hoặc tên sản phẩm</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <Button
                                                color="primary"
                                                size="lg"
                                                className="font-medium px-8 rounded-full"
                                                onClick={handleGoHome}
                                            >
                                                Khám phá sản phẩm
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default OrderTrackingPage;