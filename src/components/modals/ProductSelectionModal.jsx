// src/components/modals/ProductSelectionModal.jsx
import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    Image,
    RadioGroup,
    Radio,
} from "@heroui/react";
import { Icon } from "@iconify/react"; // Import Icon from Iconify
import { useNavigate } from "react-router-dom";

const ProductSelectionModal = ({ isOpen, onOpenChange, product }) => {
    const navigate = useNavigate();
    // Nếu product không có hoặc không có variants, không render modal
    if (!product || !product.variants || product.variants.length === 0) {
        return null;
    }

    // State để quản lý biến thể (đơn vị) đang được chọn
    const [selectedVariantUnit, setSelectedVariantUnit] = useState('');
    // State để quản lý số lượng
    const [quantity, setQuantity] = useState(1);

    // Cập nhật biến thể mặc định khi product thay đổi
    useEffect(() => {
        if (product?.variants?.length > 0) {
            setSelectedVariantUnit(product.variants[0].unit); // Luôn chọn biến thể đầu tiên khi modal mở cho sản phẩm mới
        }
        setQuantity(1); // Đặt lại số lượng về 1
    }, [product]);

    const selectedVariant = product.variants.find(v => v.unit === selectedVariantUnit) || product.variants[0];

    const handleQuantityChange = (type) => {
        if (type === "increase") {
            setQuantity((prev) => prev + 1);
        } else if (type === "decrease" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleBuyNow = () => {
        console.log({
            action: "Buy Now",
            product: product.product_name,
            selectedVariant: selectedVariant.unit,
            currentPrice: selectedVariant.current_price,
            quantity: quantity,
            total: selectedVariant.current_price * quantity,
        });
        // Logic để thêm vào giỏ hàng hoặc chuyển hướng đến trang thanh toán
        onOpenChange(false); // Đóng modal
        navigate("/checkout", { state: { product, selectedVariant, quantity } });
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="" placement="center" hideCloseButton>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex justify-between items-center text-2xl font-semibold px-6 py-4 border-b">
                            Chọn sản phẩm
                            <Button
                                isIconOnly
                                variant="light"
                                onPress={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <Icon icon="mingcute:close-line" width="24" height="24" />
                            </Button>
                        </ModalHeader>
                        <ModalBody className="p-6 h-full">
                            <div className="flex flex-col md:flex-row gap-6 items-start h-full">
                                {/* Product Image */}
                                <div className="relative w-[360px] h-[360px] p-6 border border-gray-300 rounded-lg flex-shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.product_name}
                                        className="object-contain rounded-lg mx-auto"
                                        isZoomed
                                    />
                                    {selectedVariant.discount !== null && (
                                        <div className="absolute z-10 top-0 left-0 bg-gradient-to-br from-red-600 to-red-400 text-white text-sm font-semibold px-2 py-1 rounded-br-lg rounded-tl-lg">
                                            -{selectedVariant.discount}
                                        </div>
                                    )}
                                </div>

                                {/* Product Details and Options */}
                                <div className="w-full h-[360px] flex flex-col justify-between">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-medium">{product.product_name}</h3>
    
                                        {/* Current Price / Unit */}
                                        <div className="space-y-1">
                                            <div className="flex items-end gap-2">
                                                <span className="text-3xl font-semibold text-sky-600">
                                                    {selectedVariant.current_price.toLocaleString("vi-VN")}₫
                                                </span>
                                                <span className="text-sky-600 pb-[2px] text-[20px]">
                                                    / {selectedVariant.unit}
                                                </span>
                                            </div>
                                            {selectedVariant.original_price !== null && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    {selectedVariant.original_price.toLocaleString("vi-VN")}₫
                                                </span>
                                            )}
                                            {product.quantity && (
                                                <div className="w-fit rounded-lg bg-gray-200 text-gray-600 px-2 py-0.5">
                                                    <span className="text-[13px] font-medium">{product.quantity}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            {/* Unit Selection */}
                                            {product.variants.length > 1 && (
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-gray-700 w-[80px]">Đơn vị:</span>
                                                    <RadioGroup
                                                        orientation="horizontal"
                                                        value={selectedVariantUnit}
                                                        onValueChange={setSelectedVariantUnit}
                                                        className="flex flex-wrap"
                                                    >
                                                        {product.variants.map((variant, index) => (
                                                            <Radio
                                                                key={index}
                                                                value={variant.unit}
                                                                className="px-4 py-1 pr-6 mr-2 border rounded-full cursor-pointer transition-all duration-200"
                                                                classNames={{
                                                                    wrapper: "hidden", // Ẩn radio button tròn mặc định
                                                                    label: "text-base font-medium",
                                                                    control: "hidden",
                                                                    base:
                                                                        selectedVariantUnit === variant.unit
                                                                            ? "bg-sky-100 border-sky-600" // Style khi được chọn
                                                                            : "border-gray-300 hover:border-sky-600", // Style khi KHÔNG được chọn và hover
                                                                }}
                                                                color="primary"
                                                                // Tùy chỉnh màu nền và viền dựa trên trạng thái được chọn
                                                                // Sử dụng classNames prop để tùy chỉnh sâu hơn nếu cần
                                                                // Hoặc dùng Tailwind JIT mode và áp dụng trực tiếp qua className nếu bạn muốn
                                                            >
                                                                {variant.unit}
                                                            </Radio>
                                                        ))}
                                                    </RadioGroup>
                                                </div>
                                            )}
    
                                            {/* Quantity Selector */}
                                            <div className="flex items-center gap-2 mt-4">
                                                <span className="font-semibold text-gray-700">Số lượng:</span>
                                                <Button
                                                    isIconOnly
                                                    variant="bordered"
                                                    size="sm"
                                                    onPress={() => handleQuantityChange("decrease")}
                                                    isDisabled={quantity <= 1}
                                                    className="min-w-0 w-8 h-8 rounded-full"
                                                >
                                                    <Icon icon="ic:round-minus" />
                                                </Button>
                                                <span className="w-10 text-center font-semibold text-lg">{quantity}</span>
                                                <Button
                                                    isIconOnly
                                                    variant="bordered"
                                                    size="sm"
                                                    onPress={() => handleQuantityChange("increase")}
                                                    className="min-w-0 w-8 h-8 rounded-full"
                                                >
                                                    <Icon icon="ic:round-plus" />
                                                </Button>
                                            </div>
                                        </div>
    
                                        <div className="flex w-full gap-3 mt-2">
                                            {/* Đổi flex-auto thành flex và bỏ py-3 ở đây nếu ModalFooter đã có padding */}
                                            <Button
                                                size="md"
                                                onPress={handleBuyNow}
                                                className="flex-1 bg-gradient-to-b from-sky-600 to-sky-400 text-white text-base font-semibold px-6 rounded-full"
                                            >
                                                Mua ngay
                                            </Button>
                                            <Button
                                                size="md"
                                                variant="bordered"
                                                onPress={onClose}
                                                className="flex-1 text-base font-semibold px-6 rounded-full border-sky-600 text-sky-600"
                                            >
                                                Quay lại
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ProductSelectionModal;
