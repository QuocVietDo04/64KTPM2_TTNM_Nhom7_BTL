import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
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
    Divider,
    Spacer
} from "@heroui/react";

const ShippingAddressPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    // Định nghĩa các mục menu
    const menuItems = [
        { key: 'profile', label: 'Thông tin cá nhân', icon: 'mingcute:user-4-line', path: '/profile' },
        { key: 'address', label: 'Sổ địa chỉ nhận hàng', icon: 'mingcute:map-pin-line', path: '/shipping-address', active: true },
        { key: 'tracking', label: 'Theo dõi đơn hàng', icon: 'mingcute:truck-line', path: '/track-order' },
        { key: 'history', label: 'Lịch sử mua hàng', icon: 'mingcute:history-line', path: '/order-history' }
    ];

    return (
        <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-1/4">
                {/* User Info Card */}
                <Card className="mb-6 h-52">
                    <CardBody className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
                        <Avatar
                            icon={<Icon icon="mdi:account" className="w-8 h-8 text-white" />}
                            className="w-16 h-16 bg-white/20 mx-auto mb-3"
                        />
                        <h3 className="text-lg font-semibold">Đỗ Quốc Việt</h3>
                        <p className="text-sm opacity-90">0981402187</p>
                    </CardBody>
                </Card>

                {/* Sidebar Menu */}
                <Card>
                    <CardBody className="space-y-2">
                        {menuItems.map((item) => (
                            <Button
                                key={item.key}
                                size="lg"
                                variant={item.active ? "flat" : "light"}
                                color={item.active ? "primary" : "default"}
                                className={`w-full justify-start ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                                startContent={<Icon icon={item.icon} className="w-6 h-6" />}
                                onClick={() => navigate(item.path)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </CardBody>
                </Card>
            </div>

            {/* Main Content */}
            <div className="w-3/4 h-full flex justify-center items-center">
                <p>Shipping Address Page</p>
            </div>
        </div>
    );
};

export default ShippingAddressPage;
