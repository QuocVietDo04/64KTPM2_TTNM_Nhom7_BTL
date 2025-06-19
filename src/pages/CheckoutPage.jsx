import React from "react";
import { Card,  } from "@heroui/react";

const CheckoutPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">XÁC NHẬN ĐƠN HÀNG</h1>
            <div className="flex gap-5">
                <div className="w-2/3 flex flex-col gap-5">
                    <Card shadow="sm" radius="lg" className="w-full bg-white">
                        <CardHeader>

                        </CardHeader>
                    </Card>
                </div>
                <div className="w-1/3 flex flex-col gap-5"></div>
            </div>
        </div>
    );
};

export default CheckoutPage;
