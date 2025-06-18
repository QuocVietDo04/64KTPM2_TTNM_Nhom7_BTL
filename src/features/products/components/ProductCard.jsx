import React from "react";
import {
    Button as HeroUIButton,
    Card, // Import Card
    CardBody, // Import CardBody
    CardFooter, // Import CardFooter
    Image, // Import Image nếu bạn muốn sử dụng component Image của HeroUI
} from "@heroui/react";

const ProductCard = ({ product }) => {
    const { image, discount, product_name, current_price, original_price, unit } = product;
    const repeatedProductName = `${product_name} ${product_name} ${product_name}`;

    return (
        // Sử dụng HeroUI Card làm container chính
        // Các props như shadow, radius có thể tùy chỉnh
        <Card isPressable shadow="sm" radius="lg" className="w-60 h-[456px] mx-auto group bg-white overflow-hidden">
            {discount !== null && (
                <div className="absolute top-0 left-0 bg-gradient-to-br from-red-600 to-red-400 text-white text-sm font-semibold px-2 py-1 rounded-br-lg z-10">
                    -{discount}
                </div>
            )}

            {/* Product Image - Có thể dùng HeroUI Image component */}
            {/* Nếu bạn dùng HeroUI Image, hãy đảm bảo rằng Image component được tối ưu hóa cho thẻ (ví dụ: responsive) */}
            <div className="w-full flex items-center justify-center p-2">
                <Image
                    isZoomed
                    src={image}
                    alt={product_name}
                    width={180}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Info - Đặt trong CardBody */}
            <CardBody className="w-full p-4 pt-6 flex flex-col items-start gap-2">
                <h3 className="text-base font-medium w-full min-h-[40px] line-clamp-3">{repeatedProductName}</h3>
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
                </div>
            </CardBody>

            {/* Select Product Button - Đặt trong CardFooter */}
            <CardFooter className="px-4 pb-4 pt-0">
                {" "}
                {/* Điều chỉnh padding cho footer */}
                <HeroUIButton
                    type="button"
                    fullWidth
                    className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    Chọn sản phẩm
                </HeroUIButton>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
