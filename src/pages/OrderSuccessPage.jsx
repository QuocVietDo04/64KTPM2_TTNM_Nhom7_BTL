import React from "react";
import { Button, Divider } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
    const navigate = useNavigate();

      return (
        <>
            <div className="flex justify-center">
                <div className="w-[480px] flex flex-col gap-5 items-center">
                    <img src="src/assets/images/success.svg" alt="success" className="scale-125" />
                    <div className="bg-white w-full p-8 pt-8 flex flex-col items-center gap-4 rounded-2xl shadow-lg">
                        <h1 className="text-[26px] font-semibold text-sky-600">Đặt hàng thành công</h1>
                        <p className="flex flex-col gap-1 text-center">
                            <span>Đơn hàng đang được xử lý tại nhà thuốc LC HNI Xóm Phạm Hồng Thái, Hà Hồi.</span>
                        </p>
                        <Divider></Divider>
                        <div className="mt-2 w-full flex justify-between">
                            <p className="flex flex-col font-semibold">
                                <span>Thời gian nhận hàng</span>
                                <span>dự kiến</span>
                            </p>
                            <p className="flex flex-col text-right text-gray-500">
                                <span>Từ 08:00 - 09:00 ngày</span>
                                <span>12/06/2025</span>
                            </p>
                        </div>
                        <Button
                            onPress={() => navigate("/")}
                            color="primary"
                            size="lg"
                            className="w-full bg-gradient-to-b from-sky-600 to-sky-400 mt-6"
                        >
                            Về trang chủ
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSuccessPage;
