import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Radio, RadioGroup } from "@heroui/react";
import { Icon } from "@iconify/react";

const AddressModal = ({ isOpen, onClose, onSelectAddress }) => {
    const [selectedAddress, setSelectedAddress] = useState("address1");
    
    // Dữ liệu mẫu địa chỉ
    const addresses = [
        {
            id: "address1",
            name: "Đỗ Quốc Việt",
            phone: "0862989970",
            address: "Số 01 Xóm 1 Thôn Áp Bắc, Phường Quang Trung, Thành phố Hà Giang, Tỉnh Hà Giang",
            isDefault: true
        },
        {
            id: "address2",
            name: "Đỗ Quốc Việt",
            phone: "0862989970",
            address: "Số 09 Xóm VH2, Thôn Đức Trạch, Xã Quất Động, Huyện Thường Tín, Thành phố Hà Nội",
            isDefault: false
        }
    ];

    const handleConfirm = () => {
        const selected = addresses.find(addr => addr.id === selectedAddress);
        onSelectAddress(selected);
        onClose();
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            size="xl"
            placement="center"
            classNames={{
                backdrop: "bg-black/50",
                base: "bg-white rounded-lg shadow-xl",
                header: "border-b border-gray-200",
                body: "py-6",
                footer: "border-t border-gray-200"
            }}
            hideCloseButton
        >
            <ModalContent>
                <ModalHeader className="flex justify-between items-center px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-900">Chọn địa chỉ nhận hàng</h3>
                    <Button
                        isIconOnly
                        variant="light"
                        onPress={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <Icon icon="mingcute:close-line" width={24} />
                    </Button>
                </ModalHeader>
                
                <ModalBody className="px-6 bg-gray-50 min-h-[640px] max-h-[640px]">
                    <RadioGroup
                        value={selectedAddress}
                        onValueChange={setSelectedAddress}
                        className="space-y-4"
                    >
                        {addresses.map((address) => (
                            <div key={address.id} className="bg-white border border-gray-200 rounded-lg p-4">
                                <div className="flex items-start gap-10">
                                    <div className="flex items-start space-x-3 flex-1">
                                        <Radio 
                                            value={address.id}
                                            className="mt-1"
                                            classNames={{
                                                base: "max-w-none",
                                                wrapper: "border-2 border-sky-500"
                                            }}
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h4 className="font-semibold text-gray-900">{address.name}</h4>
                                                {address.isDefault ? (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-sky-100 text-sky-800">
                                                        Mặc định
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                                                        Nhà riêng
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{address.phone}</p>
                                            <p className="text-gray-700 text-sm leading-relaxed">{address.address}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="light"
                                        size="sm"
                                        className="text-sky-600 hover:text-sky-700 font-medium"
                                        startContent={<Icon icon="mingcute:edit-line" width={16} />}
                                    >
                                        Sửa thông tin
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </RadioGroup>
                    
                    {/* Nút thêm địa chỉ mới */}
                    <Button
                        size="lg"
                        variant="bordered"
                        className="w-full mt-6 border-dashed border-2 border-gray-300 text-gray-600 hover:border-sky-500 hover:text-sky-600"
                        startContent={<Icon icon="mingcute:add-line" width={20} />}
                    >
                        <span className="leading-none">Thêm địa chỉ mới</span>
                    </Button>
                </ModalBody>
                
                <ModalFooter className="px-6 py-6">
                    <Button
                        size="lg"
                        onPress={handleConfirm}
                        className="bg-gradient-to-b from-sky-600 to-sky-400 hover:opacity-80 w-full text-white font-medium py-3 rounded-full"
                    >
                        Xác nhận
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddressModal;
