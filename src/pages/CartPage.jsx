import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Select, SelectItem, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const CartPage = () => {
    const navigate = useNavigate();

    // Dữ liệu sản phẩm mặc định (3 sản phẩm giống nhau)
    const defaultCartItems = [
        {
            id: "cart_item_1",
            productId: "top_prod_001",
            productName:
                "Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi tăng cường tiêu hóa, hỗ trợ bảo vệ đường ruột",
            image: "/top-product/1.webp",
            variants: [
                {
                    unit: "Hộp",
                    current_price: 165000,
                    original_price: 184000,
                    discount: "10%",
                },
                {
                    unit: "Vỉ",
                    current_price: 92000,
                    original_price: null,
                    discount: null,
                },
                {
                    unit: "Ống",
                    current_price: 9200,
                    original_price: null,
                    discount: null,
                },
            ],
            selectedUnit: "Hộp",
            quantity: 1,
            isSelected: true,
        },
        {
            id: "cart_item_2",
            productId: "top_prod_001",
            productName:
                "Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi tăng cường tiêu hóa, hỗ trợ bảo vệ đường ruột",
            image: "/top-product/2.jpg",
            variants: [
                {
                    unit: "Hộp",
                    current_price: 165000,
                    original_price: 184000,
                    discount: "10%",
                },
                {
                    unit: "Vỉ",
                    current_price: 92000,
                    original_price: null,
                    discount: null,
                },
                {
                    unit: "Ống",
                    current_price: 9200,
                    original_price: null,
                    discount: null,
                },
            ],
            selectedUnit: "Hộp",
            quantity: 1,
            isSelected: true,
        },
        {
            id: "cart_item_3",
            productId: "top_prod_001",
            productName:
                "Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi tăng cường tiêu hóa, hỗ trợ bảo vệ đường ruột",
            image: "/top-product/3.webp",
            variants: [
                {
                    unit: "Hộp",
                    current_price: 165000,
                    original_price: 184000,
                    discount: "10%",
                },
                {
                    unit: "Vỉ",
                    current_price: 92000,
                    original_price: null,
                    discount: null,
                },
                {
                    unit: "Ống",
                    current_price: 9200,
                    original_price: null,
                    discount: null,
                },
            ],
            selectedUnit: "Hộp",
            quantity: 1,
            isSelected: true,
        },
    ];

    // State cho giỏ hàng
    const [cartItems, setCartItems] = useState(defaultCartItems);

    // Xử lý thay đổi số lượng
    const handleQuantityChange = (itemId, type) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId) {
                    if (type === "increase") {
                        return { ...item, quantity: item.quantity + 1 };
                    } else if (type === "decrease" && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            })
        );
    };

    // Xử lý thay đổi đơn vị
    const handleUnitChange = (itemId, newUnit) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, selectedUnit: newUnit };
                }
                return item;
            })
        );
    };

    // Xử lý chọn/bỏ chọn sản phẩm
    const handleItemSelect = (itemId, isSelected) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, isSelected };
                }
                return item;
            })
        );
    };

    // Xử lý chọn/bỏ chọn tất cả
    const handleSelectAll = (isSelected) => {
        setCartItems((prevItems) => prevItems.map((item) => ({ ...item, isSelected })));
    };

    // Xử lý xóa sản phẩm (tạm thời)
    const handleRemoveItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    // Khôi phục dữ liệu mặc định khi component mount
    useEffect(() => {
        setCartItems(defaultCartItems);
    }, []);

    // Lấy thông tin variant hiện tại của một item
    const getCurrentVariant = (item) => {
        return item.variants.find((variant) => variant.unit === item.selectedUnit);
    };

    // Kiểm tra tất cả sản phẩm có được chọn không
    const isAllSelected = cartItems.length > 0 && cartItems.every((item) => item.isSelected);
    const selectedItems = cartItems.filter((item) => item.isSelected);

    // Tính toán tổng tiền
    const calculateTotals = () => {
        let totalAmount = 0;
        let totalSavings = 0;

        selectedItems.forEach((item) => {
            const variant = getCurrentVariant(item);
            const itemTotal = variant.current_price * item.quantity;
            totalAmount += itemTotal;

            // Tính tiết kiệm nếu có giá gốc
            if (variant.original_price) {
                const itemSavings = (variant.original_price - variant.current_price) * item.quantity;
                totalSavings += itemSavings;
            }
        });

        return { totalAmount, totalSavings };
    };

    const { totalAmount, totalSavings } = calculateTotals();

    // Xử lý thanh toán
    const handleCheckout = () => {
        if (selectedItems.length === 0) {
            alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán!");
            return;
        }

        // Chuyển đến trang checkout với các sản phẩm đã chọn
        navigate("/checkout", {
            state: {
                items: selectedItems.map((item) => ({
                    ...item,
                    selectedVariant: getCurrentVariant(item),
                })),
            },
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">GIỎ HÀNG CỦA BẠN</h1>

            <div className="space-y-6">
                {/* Header table */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-6 text-[15px] font-medium text-gray-700">
                        <div className="flex-1 flex items-center gap-4">
                            <div className="w-8">
                                <Checkbox size="lg" isSelected={isAllSelected} onValueChange={handleSelectAll} />
                            </div>
                            Tên sản phẩm
                        </div>
                        <div className="w-32 text-right">Đơn giá</div>
                        <div className="w-32 text-center">Số lượng</div>
                        <div className="w-24 text-center">Đơn vị</div>
                        <div className="w-32 text-right">Thành tiền</div>
                        <div className="w-12 text-center">Xóa</div>
                    </div>
                </div>

                {/* Cart items */}
                <div className="space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <Icon icon="heroicons:shopping-cart" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">Giỏ hàng của bạn đang trống</p>
                            <p className="text-gray-400 text-sm mt-2">
                                Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
                            </p>
                            <Button color="primary" className="mt-4" onPress={() => navigate("/")}>
                                Tiếp tục mua sắm
                            </Button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <Card key={item.id} className="shadow-sm">
                                <CardBody className="p-4">
                                    <div className="flex items-center gap-6">
                                        {/* Product info */}
                                        <div className="flex-1 flex items-center gap-4">
                                            {/* Checkbox */}
                                            <div className="w-8">
                                                <Checkbox
                                                    size="lg"
                                                    isSelected={item.isSelected}
                                                    onValueChange={(isSelected) =>
                                                        handleItemSelect(item.id, isSelected)
                                                    }
                                                />
                                            </div>
                                            <img
                                                src={item.image}
                                                alt={item.productName}
                                                className="w-20 h-20 object-contain bg-white rounded border"
                                                onError={(e) => {
                                                    e.target.src = "/images/placeholder.jpg";
                                                }}
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-[15px] max-w-[400px] font-medium text-gray-900 line-clamp-2">
                                                    {item.productName}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="w-32 text-center">
                                            <div className="space-y-1 text-right">
                                                {getCurrentVariant(item).original_price && (
                                                    <div className="text-sm text-gray-500 line-through">
                                                        {getCurrentVariant(item).original_price.toLocaleString("vi-VN")}{" "}
                                                        đ
                                                    </div>
                                                )}
                                                <div className="text-[20px] font-semibold text-sky-600">
                                                    {getCurrentVariant(item).current_price.toLocaleString("vi-VN")} đ
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="w-32 text-center">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, "decrease")}
                                                    disabled={item.quantity <= 1}
                                                    className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <Icon icon="heroicons:minus" className="w-4 h-4" />
                                                </button>
                                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, "increase")}
                                                    className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                                >
                                                    <Icon icon="heroicons:plus" className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Unit selector */}
                                        <div className="w-24 text-center">
                                            <Select
                                                size="sm"
                                                selectedKeys={[item.selectedUnit]}
                                                onSelectionChange={(keys) => {
                                                    const selectedUnit = Array.from(keys)[0];
                                                    handleUnitChange(item.id, selectedUnit);
                                                }}
                                                className="w-24"
                                            >
                                                {item.variants.map((variant) => (
                                                    <SelectItem key={variant.unit} value={variant.unit}>
                                                        {variant.unit}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>

                                        {/* Total price */}
                                        <div className="w-32 text-right">
                                            <div className="text-lg font-bold text-sky-600">
                                                {(getCurrentVariant(item).current_price * item.quantity).toLocaleString(
                                                    "vi-VN"
                                                )}{" "}
                                                đ
                                            </div>
                                        </div>

                                        {/* Delete button */}
                                        <div className="w-12 text-center">
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700 p-2 rounded hover:bg-red-50"
                                            >
                                                <Icon icon="heroicons:trash" className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    )}
                </div>

                {/* Summary */}
                {cartItems.length > 0 && (
                    <div className="flex justify-between items-center pt-6 border-t">
                        <div className="text-gray-600">Có ({selectedItems.length}) sản phẩm được chọn</div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className="text-2xl font-bold text-red-500">
                                    Thành tiền: {totalAmount.toLocaleString("vi-VN")}đ
                                </div>
                                {totalSavings > 0 && (
                                    <div className="text-sm text-sky-600">
                                        Tiết kiệm {totalSavings.toLocaleString("vi-VN")} đ
                                    </div>
                                )}
                            </div>
                            <Button
                                color="primary"
                                size="lg"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-8"
                                onPress={handleCheckout}
                                isDisabled={selectedItems.length === 0}
                            >
                                Tiến hành thanh toán
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
