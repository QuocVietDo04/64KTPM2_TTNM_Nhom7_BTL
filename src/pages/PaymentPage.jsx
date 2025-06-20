import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Spinner } from "@heroui/react";

const PaymentPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { finalAmount } = state || {};

    const testFinalAmount = 1000;

    const [isProcessing, setIsProcessing] = useState(false);
    const [dots, setDots] = useState("");

    useEffect(() => {
        let intervalId;
        if (isProcessing) {
            intervalId = setInterval(() => {
                setDots((prevDots) => {
                    if (prevDots === "") return ".";
                    if (prevDots === ".") return "..";
                    if (prevDots === "..") return "...";
                    return "";
                });
            }, 500);
        } else {
            clearInterval(intervalId);
            setDots("");
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isProcessing]);

    const handlePayment = async () => {
        // Bắt đầu loading
        setIsProcessing(true);
        try {
            // Giả lập API call thanh toán
            await new Promise((resolve) => setTimeout(resolve, 5000));
            navigate("/order-success");
        } catch (error) {
            console.error("Lỗi thanh toán:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="w-[480px] flex flex-col items-center">
                    <img src="src/assets/images/waiting.svg" alt="success" className="scale-90 mb-[-10px]" />
                    <div className="bg-white p-8 pt-8 flex flex-col items-center gap-4 rounded-2xl shadow-lg">
                        <h1 className="text-[26px] font-semibold text-sky-600">Đang chờ thanh toán</h1>
                        <p className="flex flex-col gap-1 text-center">
                            <span>Quý khách vui lòng chuyển tiền tới tài khoản dưới đây</span>
                            <span>để hoàn tất quá trình đặt hàng</span>
                        </p>
                        <img
                            src={`https://img.vietqr.io/image/970407-19073332651011-compact2.png?amount=${testFinalAmount}&addInfo=Hoa%20Don%20Mua%20Thuoc&accountName=HIEU%20THUOC%20VIET%20HUNG`}
                            alt=""
                            className="mt-4"
                        />
                        <button onClick={handlePayment} className="text-gray-500">
                            (Nhấn vào đây để hoàn tất thanh toán)
                        </button>
                        <Button
                            onPress={() => navigate("/checkout")}
                            color="primary"
                            variant="ghost"
                            size="lg"
                            className="w-full text-sky-600 border-sky-600 rounded-2xl hover:text-white"
                        >
                            Quay lại trang hoá đơn
                        </Button>
                    </div>
                </div>
            </div>
            {/* Loading Overlay */}
            {isProcessing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-xl">
                        <Spinner size="lg" color="primary" />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Đang xử lý{dots}</h3>
                            <p className="text-gray-600">Vui lòng đợi trong giây lát</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentPage;
