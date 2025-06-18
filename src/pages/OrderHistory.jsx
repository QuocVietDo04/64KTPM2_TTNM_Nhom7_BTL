import React, { useState } from 'react';
import { Icon } from "@iconify/react";

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchCode, setSearchCode] = useState('');

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

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        {/* User Info Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon icon="mdi:account" className="w-8 h-8 text-white" />
            </div>
            <div className="text-base font-medium">Đỗ Việt</div>
            <div className="text-sm opacity-80">0981402187</div>
          </div>
        </div>
        
        {/* Sidebar Menu */}
        <div className="space-y-2">
          <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <Icon icon="mdi:account" className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">Thông tin cá nhân</span>
          </div>
          <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <Icon icon="mdi:map-marker" className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">Sổ địa chỉ nhận hàng</span>
          </div>
          <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <Icon icon="mdi:truck" className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">Theo dõi đơn hàng</span>
          </div>
          <div className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg cursor-pointer">
            <Icon icon="mdi:file-document" className="w-4 h-4 mr-3 text-blue-600" />
            <span className="text-sm font-medium">Lịch sử mua hàng</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">LỊCH SỬ ĐẶT HÀNG</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm theo mã đơn hàng..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
            <Icon icon="mdi:magnify" className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex border-b border-gray-200 px-6">
          {[
            { key: 'all', label: 'Tất cả' },
            { key: 'delivered', label: 'Đã giao' },
            { key: 'returned', label: 'Trả hàng' },
            { key: 'cancelled', label: 'Đã hủy' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="p-6">
          {filteredOrders.length > 0 ? (
            <div className="space-y-4">
              {filteredOrders.map(order => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-800">Đơn hàng {order.date}</span>
                      <span className="text-xs text-gray-500">Nhận tại cửa hàng</span>
                      <span className="text-xs text-gray-400">{order.id}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-green-600 font-medium">✓ Đã giao</span>
                    </div>
                  </div>
                  
                  {/* Order Item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-200 rounded"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
                        {order.items[0].name}
                      </h3>
                      <div className="flex items-end justify-between">
                        <div className="text-xs text-gray-500">
                          {/* Empty space for alignment */}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-800 font-medium mb-2">
                            Thành tiền: {order.total}
                          </div>
                          <button className="px-4 py-1.5 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Mua lại
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Icon icon="mdi:cart" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Bạn chưa có đơn hàng nào</h3>
              <p className="text-gray-500 mb-4">Hãy khám phá và mua sắm những sản phẩm yêu thích của bạn</p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Mua sắm ngay
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

