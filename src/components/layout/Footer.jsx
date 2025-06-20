import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t-8 border-sky-600 pt-10 pb-5">
            <div className="max-w-screen-xl mx-auto flex flex-col">
                {/* Top */}
                <div className="flex justify-between items-center pb-10">
                    <img src="src/assets/images/logo/footer.svg" alt="logo" />
                    <div className="flex gap-6">
                        <img src="src/assets/images/social/facebook.svg" alt="facebook" />
                        <img src="src/assets/images/social/youtube.svg" alt="youtube" />
                        <img src="src/assets/images/social/zalo.svg" alt="zalo" />
                    </div>
                </div>

                {/* Main */}
                <div className="flex justify-between pt-10 pb-12 border-t border-gray-200">
                    {/* Column 1: VỀ CHÚNG TÔI */}
                    <div className="flex flex-col gap-3 text-sm">
                        <p className="font-semibold text-lg mb-1">VỀ CHÚNG TÔI</p>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Giới thiệu
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Giấy phép kinh doanh
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Quy chế hoạt động
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách nội dung
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách bảo hành và đổi trả
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách giao hàng
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách bảo mật
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách bảo vệ dữ liệu cá nhân
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chính sách thanh toán
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Câu hỏi thường gặp
                        </a>
                    </div>

                    {/* Column 2: DANH MỤC */}
                    <div className="flex flex-col gap-3 text-sm">
                        <p className="font-semibold text-lg mb-1">DANH MỤC</p>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Thực phẩm chức năng
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Dược mỹ phẩm
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Thuốc
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Chăm sóc cá nhân
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Mẹ và Bé
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Sản phẩm tiện lợi
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Thiết bị y tế
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Tiêm chủng
                        </a>
                    </div>

                    {/* Column 3: TÌM HIỂU THÊM */}
                    <div className="flex flex-col gap-3 text-sm">
                        <p className="font-semibold text-lg mb-1">TÌM HIỂU THÊM</p>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Góc sức khoẻ
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Tra cứu thuốc
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Tra cứu dược liệu
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Bệnh thường gặp
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Đội ngũ chuyên môn
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Tin tức tuyển dụng
                        </a>
                        <a href="#" className="hover:text-sky-600 hover:underline">
                            Tin tức sự kiện
                        </a>
                    </div>

                    {/* Column 4: TỔNG ĐÀI MIỄN CƯỚC */}
                    <div className="flex flex-col gap-3 text-sm">
                        <p className="font-semibold text-lg mb-1">TỔNG ĐÀI MIỄN CƯỚC</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">Tư vấn mua hàng</p>
                            <p className="text-sky-600 font-bold text-lg">
                                1800 1800 <span className="text-gray-700 text-sm">(Nhánh 1)</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">Trung tâm Vắc xin</p>
                            <p className="text-sky-600 font-bold text-lg">
                                1800 1800 <span className="text-gray-700 text-sm">(Nhánh 2)</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">Khiếu nại, góp ý</p>
                            <p className="text-sky-600 font-bold text-lg">
                                1800 1800 <span className="text-gray-700 text-sm">(Nhánh 3)</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 5: HỖ TRỢ */}
                    <div className="flex flex-col gap-7 text-sm">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-base">TẢI ỨNG DỤNG TẠI ĐÂY</p>
                            <div className="flex gap-2 items-center">
                                <img src="src/assets/images/install/qr-install.svg" alt="qr" />
                                <div className="flex flex-col gap-2">
                                    <img src="src/assets/images/install/google-play.svg" alt="google-play" />
                                    <img src="src/assets/images/install/app-store.svg" alt="app-store" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-base">HỖ TRỢ THANH TOÁN</p>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex gap-2.5">
                                    <img src="src/assets/images/payment/cod.svg" alt="cod" />
                                    <img src="src/assets/images/payment/vnpay.svg" alt="vnpay" />
                                    <img src="src/assets/images/payment/zalopay.svg" alt="zalopay" />
                                    <img src="src/assets/images/payment/momo.svg" alt="momo" />
                                </div>
                                <div className="flex gap-2.5">
                                    <img src="src/assets/images/payment/visa.svg" alt="visa" />
                                    <img src="src/assets/images/payment/mastercard.svg" alt="mastercard" />
                                    <img src="src/assets/images/payment/jcb.svg" alt="jcb" />
                                    <img src="src/assets/images/payment/napas.svg" alt="napas" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-base">CHỨNG NHẬN BỞI</p>
                            <div className="flex gap-2.5">
                                <img src="src/assets/images/certification/1.svg" alt="certification" />
                                <img src="src/assets/images/certification/2.svg" alt="certification" />
                                <img src="src/assets/images/certification/3.svg" alt="certification" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-4 pt-8 border-t text-gray-600 text-sm flex justify-between items-end">
                    {/* Left side: Company Info */}
                    <div className="flex flex-col space-y-1">
                        <p className="font-bold text-gray-800 text-base">
                            © 2025 - Công ty Cổ Phần Dược Phẩm Việt Hưng
                        </p>
                        <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Hà Nội</p>
                        <p>
                            Hotline:{" "}
                            <a href="tel:18001800" className="text-sky-600 hover:underline">
                                1800 1800
                            </a>{" "}
                            - Email:{" "}
                            <a href="mailto:support@viethungpharmacy.vn" className="text-sky-600 hover:underline">
                                support@viethungpharmacy.vn
                            </a>
                        </p>
                    </div>

                    {/* Right side: License Info */}
                    <div className="flex flex-col text-sm">
                        <p>GCNDKDN: 0311770883 do sở KH & ĐT TP.HCM cấp lần đầu ngày 05/05/2012.</p>
                        <p>GCNDKDDC: 6782/DDKKDDP-ĐN do Sở Y Tế Tỉnh Đồng Nai cấp ngày 26/4/2022</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
