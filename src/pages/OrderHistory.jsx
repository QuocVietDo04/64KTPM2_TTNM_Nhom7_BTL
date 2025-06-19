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

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchCode, setSearchCode] = useState('');
  const navigate = useNavigate();

  // Dữ liệu mẫu đơn hàng
  const sampleOrders = [
    {
      id: '#8827372',
      date: '25/04/2025',
      status: 'delivered',
      items: [
        {
          name: 'BỘT DIỆN GIẢI VỊ CHANH DÂY KAMIZOL SPORTS DRINK POWDER 5 GÓI X 25GR',
          quantity: 1,
          price: '40.000đ'
        }
      ],
      total: '40.000đ'
    },
    {
      id: '#2540031', 
      date: '13/04/2025',
      status: 'delivered',
      items: [
        {
          name: 'LIVESPO CLAUSY 20 ÔNG X 5ML - BẢO TỬ LỢI KHUẨN KHÁNG DẠ DÀ KHÁNG SINH',
          quantity: 1,
          price: '6.360đ'
        }
      ],
      total: '6.360đ'
    }
  ];

  const statusLabels = {
    all: 'Tất cả',
    delivered: 'Đã giao',
    cancelled: 'Đã hủy', 
    returned: 'Trả hàng'
  };

  // Lọc đơn hàng theo tab và tìm kiếm
  const filteredOrders = sampleOrders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = searchCode === '' || order.id.toLowerCase().includes(searchCode.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getOrderCount = (status) => {
    if (status === 'all') return sampleOrders.length;
    return sampleOrders.filter(order => order.status === status).length;
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const menuItems = [
    { key: 'profile', label: 'Thông tin cá nhân', icon: 'mdi:account' },
    { key: 'address', label: 'Sổ địa chỉ nhận hàng', icon: 'mdi:map-marker' },
    { key: 'tracking', label: 'Theo dõi đơn hàng', icon: 'mdi:truck' },
    { key: 'history', label: 'Lịch sử mua hàng', icon: 'mdi:file-document', active: true }
  ];

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-80">
        {/* User Info Card */}
        <Card className="mb-6">
          <CardBody className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
            <Avatar 
              icon={<Icon icon="mdi:account" className="w-8 h-8" />}
              className="w-16 h-16 bg-white/20 mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold">Đỗ Việt</h3>
            <p className="text-sm opacity-90">0981402187</p>
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
            <h1 className="text-2xl font-bold text-gray-800">LỊCH SỬ ĐẶT HÀNG</h1>
            <Input
              placeholder="Tìm kiếm theo mã đơn hàng..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-80"
              startContent={<Icon icon="mdi:magnify" className="w-4 h-4 text-gray-400" />}
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
                { key: 'delivered', label: 'Đã giao' },
                { key: 'returned', label: 'Trả hàng' },
                { key: 'cancelled', label: 'Đã hủy' }
              ].map(tab => (
                <Tab 
                  key={tab.key} 
                  title={
                    <div className="flex items-center space-x-2">
                      <span>{tab.label}</span>
                      <Chip size="sm" variant="flat" color="default">
                        {getOrderCount(tab.key)}
                      </Chip>
                    </div>
                  }
                />
              ))}
            </Tabs>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                  <Card key={order.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardBody>
                      {/* Order Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">Đơn hàng {order.date}</span>
                          <Chip size="sm" variant="flat" color="default">
                            Nhận tại cửa hàng
                          </Chip>
                          <span className="text-sm text-gray-500">{order.id}</span>
                        </div>
                        <Chip size="sm" color="success" variant="flat" startContent="✓">
                          Đã giao
                        </Chip>
                      </div>
                      
                      <Divider className="mb-4" />
                      
                      {/* Order Item */}
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-300 rounded opacity-60"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 mb-3 leading-tight">
                            {order.items[0].name}
                          </h3>
                          <div className="flex items-end justify-between">
                            <div></div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-800 mb-3">
                                Thành tiền: <span className="text-blue-600">{order.total}</span>
                              </div>
                              <Button 
                                color="primary" 
                                size="sm"
                                className="font-medium"
                              >
                                Mua lại
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <Card className="text-center py-12">
                  <CardBody>
                    <Icon icon="mdi:cart" className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                    <div className="text-center max-w-md mx-auto">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Bạn chưa có đơn hàng nào</h3>
                      <p className="text-gray-500 mb-6">Hãy khám phá và mua sắm những sản phẩm yêu thích của bạn</p>
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        color="primary" 
                        size="lg"
                        className="font-medium px-8"
                        onClick={handleGoHome}
                      >
                        Khám phá ngay
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

export default OrderHistory;

