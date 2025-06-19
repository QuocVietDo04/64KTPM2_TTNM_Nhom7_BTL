import React from "react";
import { topProductsData } from "../top-product";
import ProductCard from "../features/products/components/ProductCard";
import Slider from "../components/shared/Slider";
import { Divider } from "@heroui/react";

const HomePage = () => {
    const sliderImages = [
        { src: "/src/assets/images/banner/banner1.avif", alt: "Banner 1" },
        { src: "/src/assets/images/banner/banner2.avif", alt: "Banner 2" },
        { src: "/src/assets/images/banner/banner3.avif", alt: "Banner 3" },
        { src: "/src/assets/images/banner/banner4.avif", alt: "Banner 4" },
        { src: "/src/assets/images/banner/banner5.avif", alt: "Banner 5" },
    ];

    const subBanners = [
        { src: "/src/assets/images/banner/sub-banner1.avif", alt: "Sub Banner 1" },
        { src: "/src/assets/images/banner/sub-banner2.avif", alt: "Sub Banner 2" },
    ];

    return (
        <>
            {/* Top */}
            <div className="space-y-6">
                {/* Banner */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-2/3">
                        <Slider images={sliderImages} />
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                        {subBanners.map((banner, index) => (
                            <div key={index} className="w-full flex-grow rounded-lg overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0">
                                    <img
                                        src={banner.src}
                                        alt={banner.alt}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Utilities */}
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex justify-between">
                        <img src="src/assets/images/utils/util1.svg" alt="util1" />
                        <img src="src/assets/images/utils/util2.svg" alt="util2" />
                        <img src="src/assets/images/utils/util3.svg" alt="util3" />
                        <img src="src/assets/images/utils/util4.svg" alt="util4" />
                        <img src="src/assets/images/utils/util5.svg" alt="util5" />
                        <img src="src/assets/images/utils/util6.svg" alt="util6" />
                    </div>
                    <Divider className="w-32 h-[2px]" />
                </div>
            </div>

            {/* Top Products */}
            <div className="flex flex-col gap-6 items-center">
                <img src="src/assets/images/top-products.svg" alt="top-products" />

                <div className="flex flex-wrap w-full justify-between">
                    {topProductsData.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>

            <img src="src/assets/images/top-category.svg" alt="top-category" className="w-full" />
            <img src="src/assets/images/favourite-brand.svg" alt="favourite-brand" className="w-full" />
            <img src="src/assets/images/health-check.svg" alt="health-check" className="w-full" />

            <div className="space-y-6">
                <img src="src/assets/images/history.svg" alt="history" className="w-full" />
                <div className="flex flex-wrap w-full justify-between">
                    {topProductsData.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
