import React from "react";
import { Button as HeroUIButton, Card, CardBody, CardFooter, Image } from "@heroui/react";

const ProductCard = ({ product }) => {
    const { image, discount, product_name, current_price, original_price, unit, quantity } = product;

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
                    src={image.startsWith("products/") ? `/${image}` : image}
                    alt={product_name}
                    width={180}
                    height={180}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    removeWrapper
                />
            </div>

            <CardBody className="w-full p-4 pt-6 flex flex-col items-start gap-3">
                <h3 className="text-base font-medium w-full min-h-[40px] line-clamp-3">{product_name}</h3>
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
                    <div className="w-fit rounded-lg bg-gray-200 text-gray-600 px-2 py-0.5">
                        <span className="text-[13px] font-medium">{quantity}</span>
                    </div>
                </div>
            </CardBody>

            <CardFooter className="px-4 pb-4 pt-0">
                <HeroUIButton
                    type="button"
                    fullWidth
                    className="bg-gradient-to-b from-sky-600 to-sky-400 text-base text-white font-medium px-4 py-3 rounded-full hover:opacity-80 transition-colors duration-200"
                >
                    Chọn sản phẩm
                </HeroUIButton>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
