import React from "react";
import { Button } from "@heroui/react";
import Arrow from "../assets/icons/Arrow";

const Header = () => {
    return (
        <header className="w-full h-[170px] relative bg-gradient-to-b from-sky-300 to-sky-600 overflow-hidden">
            <div className="opacity-20 absolute top-0 left-0 w-full h-full bg-[url('/src/assets/images/header-bg.svg')] bg-cover bg-[center_top] z-10"></div>
            {/* <img
                src="src/assets/images/header-bg.svg"
                alt="header-bg"
                className="w-full object-cover absolute top-0 left-0 z-0 opacity-20"
            /> */}
            <div className="max-w-[1280px] mx-auto">
                <div className="py-4 flex gap-1.5 items-center">
                    <img src="src/assets/icons/telephone.svg" alt="telephone" />
                    <span className="text-white font-medium text-sm">Hotline: 1800 1800</span>
                </div>
                <div className="pt-4 pb-5 flex gap-10">
                    {/* Left */}
                    <div className="h-[60px] flex items-center w-[228px]">
                        <img src="src/assets/images/logo2.svg" alt="header-logo" />
                    </div>

                    {/* Center */}
                    <div className="flex flex-col gap-4"></div>

                    {/* Right */}
                    <div className="h-12 flex gap-5 items-center">
                        <div className="h-fit flex gap-5 pr-5 items-center border-r-3 border- border-white">
                            <img src="src/assets/icons/notification.svg" alt="notification" className="w-8 h-8" />
                            <img src="src/assets/icons/cart.svg" alt="cart" className="w-8 h-8" />
                        </div>
                        <Button color="primary" type="reset" className="w-44 h-full rounded-full px-4 gap-5">
                            <div className="flex gap-2 items-center">
                                <img src="src/assets/icons/user.svg" alt="user" className="w-8 h-8" />
                                <span className="text-white font-medium text-sm">Chào, Đỗ Việt</span>
                            </div>
                            <Arrow className="w-4 h-4 text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
