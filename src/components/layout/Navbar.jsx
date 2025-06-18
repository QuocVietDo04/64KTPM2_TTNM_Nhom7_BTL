import React from "react";
import NavbarButton from "../shared/NavbarButton";

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="relative max-w-screen-xl mx-auto flex justify-between">
                <NavbarButton>Thực phẩm chức năng</NavbarButton>
                <NavbarButton>Dược mỹ phẩm</NavbarButton>
                <NavbarButton>Chăm sóc cá nhân</NavbarButton>
                <NavbarButton>Mẹ và bé</NavbarButton>
                <NavbarButton>Sản phẩm tiện lợi</NavbarButton>
                <NavbarButton>Thiết bị y tế</NavbarButton>
                <NavbarButton>Tra cứu</NavbarButton>
                <NavbarButton noIcon>Tiêm chủng</NavbarButton>
            </div>
        </nav>
    );
};

export default Navbar;