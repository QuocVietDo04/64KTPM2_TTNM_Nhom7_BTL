// src/components/layout/Layout.jsx
import React, { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation(); // Lấy đối tượng location từ React Router DOM

    useEffect(() => {
        // Cuộn trang lên đầu
        window.scrollTo(0, 0); // scrollTo(x, y)
        // Hoặc:
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // Để có hiệu ứng cuộn mượt mà hơn
    }, [location.pathname]); // Dependency array: chạy lại useEffect mỗi khi pathname thay đổi}
    
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <main className="w-full flex-1 pt-10 pb-20">
                <div className="max-w-screen-xl mx-auto">{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
