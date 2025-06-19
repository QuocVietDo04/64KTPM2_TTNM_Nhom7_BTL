// src/features/products/components/ProductCard.jsx
import React from "react";
import { Button, Card, CardBody, CardFooter, Image, useDisclosure } from "@heroui/react";
// Import modal mới tạo
import ProductSelectionModal from "../modals/ProductSelectionModal"; // Điều chỉnh đường dẫn

const ProductCard = ({ product }) => {
    const productImageSrc = Array.isArray(product.image) ? product.image[0] : product.image;

    // Sử dụng useDisclosure để quản lý trạng thái modal
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Dữ liệu giả định cho ProductCard nếu nó chưa có variants,
    // hoặc chuyển đổi `topProductsData` để nó có variants.
    // Giả sử product.variants đã có, như đã thảo luận ở các câu trả lời trước.
    const selectedVariant = product.variants ? product.variants[0] : { // Lấy biến thể đầu tiên mặc định cho hiển thị Card
        unit: product.unit,
        current_price: product.current_price,
        original_price: product.original_price,
        discount: product.discount
    };

    const {
        unit,
        current_price,
        original_price,
        discount
    } = selectedVariant;

    return (
        <Card isPressable shadow="sm" radius="lg" className="w-60 h-[460px] group bg-white overflow-hidden">
            {discount !== null && (
                <div className="absolute top-0 left-0 bg-gradient-to-br from-red-600 to-red-400 text-white text-sm font-semibold px-2 py-1 rounded-br-lg z-20">
                    -{discount}
                </div>
            )}
            <div className="w-[180px] h-[180px] flex items-center justify-center p-2 mx-auto">
                <Image
                    isZoomed
                    src={productImageSrc.startsWith("products/") || productImageSrc.startsWith("top-product/") ? `/${productImageSrc}` : productImageSrc}
                    alt={product.product_name}
                    width={180}
                    height={180}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    removeWrapper
                />
            </div>

            <CardBody className="w-full p-4 pt-6 flex flex-col items-start gap-3">
                <h3 className="text-base font-medium w-full min-h-[40px] line-clamp-3">{product.product_name}</h3>
                <div className="space-y-1">
                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-semibold text-sky-600">
                            {current_price.toLocaleString("vi-VN")}₫
                        </span>
                        <span className="text-sky-600 pb-[2px]">/ {unit}</span>
                    </div>
                    {original_price !== null && (
                        <span className="text-sm text-gray-500 line-through">
                            {original_price.toLocaleString("vi-VN")}₫
                        </span>
                    )}
                    {product.quantity && (
                        <div className="w-fit rounded-lg bg-gray-200 text-gray-600 px-2 py-0.5">
                            <span className="text-[13px] font-medium">{product.quantity}</span>
                        </div>
                    )}
                </div>
            </CardBody>

            <CardFooter className="px-4 pb-4 pt-0">
                <Button
                    type="button"
                    fullWidth
                    className="bg-gradient-to-b from-sky-600 to-sky-400 text-base text-white font-medium px-4 py-3 rounded-full hover:opacity-80 transition-colors duration-200"
                    onPress={onOpen} // Thêm onPress để mở modal
                >
                    Chọn sản phẩm
                </Button>
            </CardFooter>

            {/* Product Selection Modal */}
            <ProductSelectionModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                product={product} // Truyền toàn bộ đối tượng product vào modal
            />
        </Card>
    );
};

export default ProductCard;