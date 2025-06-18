import React from "react";
import { Button as HeroUIButton, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

const Header = () => {
    return (
        <header className="relative w-full bg-gradient-to-b from-sky-300 to-sky-600">
            <div className="absolute opacity-20 top-[-2px] left-0 w-full h-full bg-[url('/src/assets/images/background.svg')] bg-cover bg-[center_top] z-0"></div>

            <div className="relative max-w-screen-xl mx-auto z-10">
                {/* Top */}
                <div className="py-4 flex gap-1.5 items-center">
                    <Icon icon="mingcute:phone-fill" className="text-white w-5 h-5" />
                    <span className="text-white font-medium text-sm">Hotline: 1800 1800</span>
                </div>

                {/* Main */}
                <div className="pt-4 pb-5 flex gap-10">
                    {/* Left */}
                    <div className="h-12 flex items-center">
                        <img src="src/assets/images/logo/header.svg" alt="logo" />
                    </div>

                    {/* Center */}
                    <div className="flex flex-col flex-1 gap-4">
                        <Input
                            placeholder="Tìm kiếm"
                            size="lg"
                            radius="sm"
                            startContent={<Icon icon="mingcute:search-3-line" className="text-sky-600 w-7 h-7" />}
                        />
                        <div className="flex gap-4 px-4 py-1 items-center text-[15px] text-white">
                            <span>Omega 3</span>
                            <span>Canxi</span>
                            <span>Chống lão hóa</span>
                            <span>Sữa rửa mặt</span>
                            <span>Dung dịch vệ sinh</span>
                            <span>Kem chống năng</span>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="h-12 flex gap-5 items-center">
                        <div className="h-fit flex gap-5 pr-5 items-center border-r-2 border-white">
                            <Icon icon="mingcute:notification-fill" className="text-white w-7 h-7" />
                            <Icon icon="mingcute:shopping-cart-1-fill" className="text-white w-7 h-7" />
                        </div>
                        <HeroUIButton
                            type="reset"
                            className="bg-gradient-to-t from-sky-700 to-sky-500 w-48 h-full px-3 flex justify-between items-center rounded-full"
                        >
                            <div className="flex flex-1 min-w-0 gap-1 items-center">
                                <Icon icon="mingcute:user-4-fill" className="text-white w-9 h-9" />
                                <span className="text-white font-medium text-[13px] truncate whitespace-nowrap overflow-hidden">
                                    Chào, Đỗ Quốc Việt
                                </span>
                            </div>
                            <Icon icon="mingcute:down-line" className="text-white w-5 h-5" />
                        </HeroUIButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
