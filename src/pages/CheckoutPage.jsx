import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, Button, ButtonGroup, Radio, RadioGroup, Input, Spinner } from "@heroui/react";
import AddressModal from "../components/modals/AddressModal";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { products, product, selectedVariant, quantity } = state || {};
    const items = products || (product ? [{ product, selectedVariant, quantity }] : []);

    // State để lưu các giá trị tính toán
    const [totalAmount, setTotalAmount] = useState(0); // Tổng tiền
    const [discountAmount, setDiscountAmount] = useState(0); // Giảm giá trực tiếp
    const [finalAmount, setFinalAmount] = useState(0); // Thành tiền cuối cùng

    // useEffect để tính toán lại khi items thay đổi
    useEffect(() => {
        if (items && items.length > 0) {
            // Tính tổng tiền
            const total = items.reduce((sum, item) => {
                return sum + item.selectedVariant.current_price * item.quantity;
            }, 0);

            // Tính giảm giá trực tiếp
            const discount = items.reduce((sum, item) => {
                const itemDiscount = item.selectedVariant.original_price
                    ? (item.selectedVariant.original_price - item.selectedVariant.current_price) * item.quantity
                    : 0;
                return sum + itemDiscount;
            }, 0);

            // Cập nhật state
            setTotalAmount(total);
            setDiscountAmount(discount);
            setFinalAmount(total); // Thành tiền = tổng tiền (sau khi đã trừ giảm giá)
        }
    }, [items]); // Dependency array chứa items

    // State để quản lý trạng thái loading
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

    const handleOrder = async () => {
        // Xử lý thanh toán chuyển khoản
        if (selectedPaymentMethod === "bank_transfer") {
            // Bắt đầu loading
            setIsProcessing(true);
            try {
                // Giả lập API call thanh toán
                await new Promise((resolve) => setTimeout(resolve, 2000));
                navigate("/payment", { state: { product, finalAmount } });
            } catch (error) {
                console.error("Lỗi ở phương thức 2:", error);
            } finally {
                setIsProcessing(false);
            }
            return;
        }

        // Xử lý thanh toán bằng thẻ quốc tế
        if (selectedPaymentMethod === "international_card") {
            // Validate tất cả các trường
            const cardNumberError = validateCardNumber(cardInfo.cardNumber);
            const expiryDateError = validateExpiryDate(cardInfo.expiryDate);
            const holderNameError = validateHolderName(cardInfo.holderName);
            const cvvError = validateCVV(cardInfo.cvv);

            // Cập nhật tất cả lỗi cùng lúc
            const newErrors = {
                cardNumber: cardNumberError,
                expiryDate: expiryDateError,
                holderName: holderNameError,
                cvv: cvvError,
                general: "",
            };

            setCardErrors(newErrors);

            // Kiểm tra nếu có bất kỳ lỗi nào
            const hasErrors = Object.values(newErrors).some((error) => error !== "");

            if (hasErrors) {
                // Tìm trường đầu tiên có lỗi và focus vào nói
                const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key] !== "");

                // Focus vào trường đầu tiên có lỗi (tùy chọn)
                setTimeout(() => {
                    const inputElement = document.querySelector(`[name="${firstErrorField}"]`);
                    if (inputElement) {
                        inputElement.focus();
                    }
                }, 100);
                
                return;
            }

            // Bắt đầu loading
            setIsProcessing(true);

            try {
                // Giả lập API call thanh toán
                await new Promise((resolve) => setTimeout(resolve, 5000));

                // Thành công - chuyển đến trang success
                navigate("/order-success");
            } catch (error) {
                console.error("Lỗi ở phương thức 3:", error);
                setCardErrors((prev) => ({
                    ...prev,
                    general: "Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.",
                }));
            } finally {
                setIsProcessing(false);
            }

            return;
        }

        // Xử lý thanh toán tiền mặt
        setIsProcessing(true);

        try {
            // Giả lập API call đặt hàng
            await new Promise((resolve) => setTimeout(resolve, 3000));

            // Chuyển đến trang thành công
            navigate("/order-success");
        } catch (error) {
            console.error("Lỗi ở phương thức 1:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    // State cho modal và địa chỉ
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState("home"); // "home" hoặc "pharmacy"
    const [selectedAddress, setSelectedAddress] = useState({
        name: "Đỗ Quốc Việt",
        phone: "0862989970",
        address: "Áp Bắc, Phường Quang Trung, Thành phố Hà Giang, Tỉnh Hà Giang",
    });

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
    };

    // State cho phương thức thanh toán
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash"); // "cash", "bank_transfer", "international_card"

    // State cho thông tin thẻ quốc tế
    const [cardInfo, setCardInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        holderName: "",
        cvv: "",
    });

    const [cardErrors, setCardErrors] = useState({
        cardNumber: "",
        expiryDate: "",
        holderName: "",
        cvv: "",
    });

    // Validation functions
    const validateCardNumber = (number) => {
        const cleanNumber = number.replace(/\s/g, "");
        if (cleanNumber.length === 0) return "Số thẻ không được để trống";
        if (cleanNumber.length < 16) return "Số thẻ phải có ít nhất 16 số";
        if (!/^\d+$/.test(cleanNumber)) return "Số thẻ chỉ được chứa số";
        return "";
    };

    const validateExpiryDate = (date) => {
        if (date.length === 0) return "Ngày hết hạn không được để trống";
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!regex.test(date)) return "Định dạng ngày hết hạn không đúng (MM/YY)";

        const [month, year] = date.split("/");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        const cardYear = parseInt(year);
        const cardMonth = parseInt(month);

        if (cardYear < currentYear || (cardYear === currentYear && cardMonth < currentMonth)) {
            return "Thẻ đã hết hạn";
        }

        return "";
    };

    const validateHolderName = (name) => {
        if (name.length === 0) return "Họ và tên chủ thẻ không được để trống";
        if (!/^[a-zA-Z\s]*$/.test(name)) return "Họ và tên chủ thẻ chỉ được chứa chữ và khoảng trắng";
        if (name.length < 2) return "Họ và tên chủ thẻ quá ngắn";
        return "";
    };

    const validateCVV = (cvv) => {
        if (cvv.length === 0) return "Mã bảo mật không được để trống";
        if (cvv.length < 3) return "Mã bảo mật phải có ít nhất 3 số";
        if (!/^\d+$/.test(cvv)) return "Mã bảo mật chỉ được chứa số";
        return "";
    };

    const handleCardInputChange = (field, value) => {
        let formattedValue = value;

        // Format card number with spaces
        if (field === "cardNumber") {
            formattedValue = value
                .replace(/\s/g, "")
                .replace(/(.{4})/g, "$1 ")
                .trim();
            if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
        }

        // Format expiry date
        if (field === "expiryDate") {
            formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length >= 2) {
                formattedValue = formattedValue.substring(0, 2) + "/" + formattedValue.substring(2, 4);
            }
            if (formattedValue.length > 5) formattedValue = formattedValue.substring(0, 5);
        }

        // Limit CVV to 4 digits
        if (field === "cvv") {
            formattedValue = value.replace(/\D/g, "").substring(0, 4);
        }

        setCardInfo((prev) => ({
            ...prev,
            [field]: formattedValue,
        }));
    };

    const handleCardInputBlur = (field) => {
        let error = "";
        const value = cardInfo[field];

        switch (field) {
            case "cardNumber":
                error = validateCardNumber(value);
                break;
            case "expiryDate":
                error = validateExpiryDate(value);
                break;
            case "holderName":
                error = validateHolderName(value);
                break;
            case "cvv":
                error = validateCVV(value);
                break;
        }

        setCardErrors((prev) => ({
            ...prev,
            [field]: error,
        }));
    };

    return (
        <>
            <div className="space-y-9 pt-6">
                <h1 className="text-3xl font-bold">XÁC NHẬN ĐƠN HÀNG</h1>
                <div className="flex gap-5">
                    <div className="w-2/3 flex flex-col gap-5">
                        <Card shadow="sm" radius="lg" className="w-full bg-white">
                            <CardHeader className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-xl font-semibold">Danh sách sản phẩm</h2>
                                <p className="text-sm text-gray-500">Số lượng: {quantity || 0}</p>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    {items.map(({ product, selectedVariant, quantity }, index) => (
                                        <div
                                            key={`${product.id}-${selectedVariant?.id || ""}`}
                                            className={`flex justify-between p-4 ${
                                                index < items.length - 1 ? "border-b border-gray-200 pb-6 mb-2" : ""
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.product_name}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                                <h3 className="font-medium text-[15px] max-w-[400px] line-clamp-2">
                                                    {product.product_name}
                                                </h3>
                                            </div>
                                            <div className="text-right flex items-center gap-8">
                                                <div className="flex flex-col gap-[2px]">
                                                    <span className="text-xl font-semibold text-sky-600 leading-none">
                                                        {selectedVariant.current_price.toLocaleString("vi-VN")}₫
                                                    </span>
                                                    {selectedVariant.original_price !== null && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            {selectedVariant.original_price.toLocaleString("vi-VN")}₫
                                                        </span>
                                                    )}
                                                </div>

                                                <span className="text-sky-600 font-semibold pb-[2px]">
                                                    x{quantity} {selectedVariant.unit}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-xl font-semibold">Hình thức nhận hàng</h2>
                                <ButtonGroup className="w-[400px]">
                                    <Button
                                        size="sm"
                                        className={`flex-1 text-sm ${
                                            selectedDeliveryMethod === "home"
                                                ? "bg-sky-100 text-sky-600 border-sky-200"
                                                : "bg-gray-50 text-gray-600 border-gray-200"
                                        }`}
                                        variant={selectedDeliveryMethod === "home" ? "solid" : "bordered"}
                                        onPress={() => setSelectedDeliveryMethod("home")}
                                    >
                                        Giao hàng tận nơi
                                    </Button>
                                    <Button
                                        size="sm"
                                        className={`flex-1 text-sm ${
                                            selectedDeliveryMethod === "pharmacy"
                                                ? "bg-sky-100 text-sky-600 border-sky-200"
                                                : "bg-gray-50 text-gray-600 border-gray-200"
                                        }`}
                                        variant={selectedDeliveryMethod === "pharmacy" ? "solid" : "bordered"}
                                        onPress={() => setSelectedDeliveryMethod("pharmacy")}
                                    >
                                        Nhận tại nhà thuốc
                                    </Button>
                                </ButtonGroup>
                            </CardHeader>
                            <CardBody className="p-6">
                                {/* Thông tin người nhận */}
                                <div className="space-y-7">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[17px] font-semibold">Người nhận:</span>
                                            <p className="text-gray-700">
                                                {selectedAddress.name} - {selectedAddress.phone}
                                            </p>
                                        </div>
                                        <Button
                                            variant="light"
                                            className="text-sky-600 hover:text-sky-700 font-medium"
                                            onPress={() => setIsAddressModalOpen(true)}
                                        >
                                            Thay đổi
                                        </Button>
                                    </div>

                                    {selectedDeliveryMethod === "home" && (
                                        <>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[17px] font-semibold">Địa chỉ nhận hàng:</span>
                                                <p className="text-gray-700">{selectedAddress.address}</p>
                                            </div>
                                            <p className="text-sm text-gray-500 italic">
                                                <span className="font-bold">Dự kiến giao hàng:</span> 4 - 7 ngày không
                                                bao gồm thứ 7, chủ nhật
                                            </p>
                                        </>
                                    )}

                                    {selectedDeliveryMethod === "pharmacy" && (
                                        <p className="text-sm text-gray-500 italic">
                                            <span className="font-bold">Dự kiến giao hàng:</span> 4 - 7 ngày không bao
                                            gồm thứ 7, chủ nhật
                                        </p>
                                    )}
                                </div>
                            </CardBody>
                        </Card>

                        {/* Card Phương thức thanh toán */}
                        <Card>
                            <CardHeader className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-xl font-semibold">Phương thức thanh toán</h2>
                            </CardHeader>
                            <CardBody className="p-6">
                                <RadioGroup
                                    value={selectedPaymentMethod}
                                    onValueChange={(value) => setSelectedPaymentMethod(value)}
                                    className="space-y-4"
                                >
                                    {/* Thanh toán bằng tiền mặt */}
                                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sky-300 transition-colors">
                                        <Radio
                                            value="cash"
                                            classNames={{
                                                base: "max-w-none",
                                                wrapper: "border-2 border-sky-500",
                                            }}
                                        />
                                        <div className="flex items-center space-x-3">
                                            <img src="src/assets/images/payment/cod-icon.svg" alt="cod-icon" />
                                            <span className="font-medium text-gray-900">Thanh toán bằng tiền mặt</span>
                                        </div>
                                    </div>

                                    {/* Thanh toán bằng tài khoản ngân hàng */}
                                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sky-300 transition-colors">
                                        <Radio
                                            value="bank_transfer"
                                            classNames={{
                                                base: "max-w-none",
                                                wrapper: "border-2 border-sky-500",
                                            }}
                                        />
                                        <div className="flex items-center space-x-3">
                                            <img src="src/assets/images/payment/bank-icon.svg" alt="bank-icon" />
                                            <span className="font-medium text-gray-900">
                                                Thanh toán bằng tài khoản ngân hàng
                                            </span>
                                        </div>
                                    </div>

                                    {/* Thanh toán bằng thẻ quốc tế */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-sky-300 transition-colors">
                                            <Radio
                                                value="international_card"
                                                classNames={{
                                                    base: "max-w-none",
                                                    wrapper: "border-2 border-sky-500",
                                                }}
                                            />
                                            <div className="flex items-center space-x-3">
                                                <img src="src/assets/images/payment/card-icon.svg" alt="card-icon" />
                                                <div>
                                                    <span className="font-medium text-gray-900">
                                                        Thanh toán bằng thẻ quốc tế / thẻ ghi nợ
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Form nhập thông tin thẻ */}
                                        {selectedPaymentMethod === "international_card" && (
                                            <div className="p-6 bg-gray-50 rounded-lg space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* Số thẻ */}
                                                    <div className="col-span-1">
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Số thẻ: <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            name="cardNumber"
                                                            placeholder="VD: 1234 1234 1234"
                                                            value={cardInfo.cardNumber}
                                                            onChange={(e) =>
                                                                handleCardInputChange("cardNumber", e.target.value)
                                                            }
                                                            onBlur={() => handleCardInputBlur("cardNumber")}
                                                            isInvalid={!!cardErrors.cardNumber}
                                                            errorMessage={cardErrors.cardNumber}
                                                            classNames={{
                                                                input: "text-gray-900",
                                                                inputWrapper: "border-gray-300",
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Ngày hết hạn */}
                                                    <div className="col-span-1">
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Ngày hết hạn: <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            name="expiryDate"
                                                            placeholder="MM/YY"
                                                            value={cardInfo.expiryDate}
                                                            onChange={(e) =>
                                                                handleCardInputChange("expiryDate", e.target.value)
                                                            }
                                                            onBlur={() => handleCardInputBlur("expiryDate")}
                                                            isInvalid={!!cardErrors.expiryDate}
                                                            errorMessage={cardErrors.expiryDate}
                                                            classNames={{
                                                                input: "text-gray-900",
                                                                inputWrapper: "border-gray-300",
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* Họ và tên chủ thẻ */}
                                                    <div className="col-span-1">
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Họ và tên chủ thẻ: <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            name="holderName"
                                                            placeholder="VD: NGUYEN VAN A"
                                                            value={cardInfo.holderName}
                                                            onChange={(e) =>
                                                                handleCardInputChange(
                                                                    "holderName",
                                                                    e.target.value.toUpperCase()
                                                                )
                                                            }
                                                            onBlur={() => handleCardInputBlur("holderName")}
                                                            isInvalid={!!cardErrors.holderName}
                                                            errorMessage={cardErrors.holderName}
                                                            classNames={{
                                                                input: "text-gray-900",
                                                                inputWrapper: "border-gray-300",
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Mã bảo mật */}
                                                    <div className="col-span-1">
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Mã bảo mật: <span className="text-red-500">*</span>
                                                        </label>
                                                        <Input
                                                            name="cvv"
                                                            placeholder="VD: 123"
                                                            value={cardInfo.cvv}
                                                            onChange={(e) =>
                                                                handleCardInputChange("cvv", e.target.value)
                                                            }
                                                            onBlur={() => handleCardInputBlur("cvv")}
                                                            isInvalid={!!cardErrors.cvv}
                                                            errorMessage={cardErrors.cvv}
                                                            type="password"
                                                            classNames={{
                                                                input: "text-gray-900",
                                                                inputWrapper: "border-gray-300",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </RadioGroup>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="w-1/3 flex flex-col gap-5 sticky top-4 self-start">
                        {/* Card Chi tiết thanh toán */}
                        <Card className="bg-white border border-gray-200">
                            <CardHeader className="p-5 py-7">
                                <h3 className="text-2xl font-semibold text-gray-900">Chi tiết thanh toán</h3>
                            </CardHeader>
                            <CardBody className="p-6 pt-0 space-y-4">
                                {/* Tổng tiền */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Tổng tiền:</span>
                                    <span className="font-semibold text-gray-900">
                                        {totalAmount.toLocaleString("vi-VN")}đ
                                    </span>
                                </div>

                                {/* Giảm giá trực tiếp */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Giảm giá trực tiếp:</span>
                                    <span className="font-semibold text-sky-600">
                                        -{discountAmount.toLocaleString("vi-VN")}đ
                                    </span>
                                </div>

                                {/* Giảm giá voucher */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Giảm giá voucher:</span>
                                    <span className="font-semibold text-sky-600">0đ</span>
                                </div>

                                {/* Phí vận chuyển */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Phí vận chuyển:</span>
                                    <span className="font-semibold text-sky-600">Miễn phí</span>
                                </div>

                                {/* Đường kẻ ngang */}
                                <hr className="border-gray-200" />

                                {/* Thành tiền */}
                                <div className="space-y-1 pb-2">
                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-2xl font-semibold">Thành tiền:</span>
                                        <span className="text-3xl font-bold text-red-500">
                                            {finalAmount.toLocaleString("vi-VN")}đ
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-sky-600">
                                            Tiết kiệm {discountAmount.toLocaleString("vi-VN")}đ
                                        </p>
                                    </div>
                                </div>

                                {/* Nút đặt hàng */}
                                <Button
                                    color="primary"
                                    size="lg"
                                    className="w-full bg-gradient-to-b from-sky-600 to-sky-500 hover:opacity-80 text-white font-semibold rounded-xl mt-6"
                                    onPress={handleOrder}
                                    isLoading={isProcessing}
                                >
                                    Đặt hàng
                                </Button>

                                {/* Thông tin điều khoản */}
                                <div className="text-[13px] text-gray-500 text-center leading-relaxed">
                                    <p>Bằng việc tiến hành đặt mua hàng, bạn đã đồng ý với</p>
                                    <p>
                                        <span className="text-sky-600 underline cursor-pointer">
                                            Điều khoản dịch vụ
                                        </span>{" "}
                                        của Nhà thuốc Việt Hưng
                                    </p>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Card Chính sách đặt hàng */}
                        <Card className="bg-gray-50 border border-gray-200">
                            <CardHeader className="p-6 pb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Chính sách đặt hàng</h3>
                            </CardHeader>
                            <CardBody className="p-6 pt-0 space-y-4">
                                <div className="flex items-start gap-3">
                                    <img src="src/assets/images/policy/return.svg" alt="Đổi trả" />
                                    <div>
                                        <p className="font-semibold text-sky-800">Đổi trả trong 30 ngày</p>
                                        <p className="text-sm text-gray-600">kể từ ngày mua hàng</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <img src="src/assets/images/policy/change.svg" alt="Miễn phí đổi thuốc" />
                                    <div>
                                        <p className="font-semibold text-sky-800">Miễn phí 100%</p>
                                        <p className="text-sm text-gray-600">đổi thuốc</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <img src="src/assets/images/policy/ship.svg" alt="Miễn phí vận chuyển" />
                                    <div>
                                        <p className="font-semibold text-sky-800">Miễn phí vận chuyển</p>
                                        <p className="text-sm text-gray-600">theo chính sách giao hàng</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                {/* Modal chọn địa chỉ */}
                <AddressModal
                    isOpen={isAddressModalOpen}
                    onClose={() => setIsAddressModalOpen(false)}
                    onSelectAddress={handleAddressSelect}
                />
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

export default CheckoutPage;
