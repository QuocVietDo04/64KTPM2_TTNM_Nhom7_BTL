import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, ButtonGroup, Chip, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProductDetailPage = () => {
    const navigate = useNavigate();

    // Danh sách 8 ảnh sản phẩm
    const productImages = [
        "/top-product/1.webp",
        "/top-product/2.jpg",
        "/top-product/3.webp",
        "/top-product/4.webp",
        "/top-product/5.jpg",
        "/top-product/6.webp",
        "/top-product/7.jpg",
        "/top-product/8.webp",
    ];

    // State cho gallery ảnh và phân trang
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    
    // Phân trang thumbnails - 4 ảnh mỗi trang
    const imagesPerPage = 4;
    const totalPages = Math.ceil(productImages.length / imagesPerPage);
    
    // Lấy ảnh cho trang hiện tại
    const getCurrentPageImages = () => {
        const startIndex = currentPage * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        return productImages.slice(startIndex, endIndex).map((image, index) => ({
            src: image,
            originalIndex: startIndex + index
        }));
    };

    // Dữ liệu sản phẩm theo cấu trúc mới
    const productData = {
        "id": "top_prod_001",
        "product_name": "Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi tăng cường tiêu hóa, hỗ trợ bảo vệ đường ruột",
        "variants": [
            {
                "unit": "Hộp",
                "current_price": 165000,
                "original_price": 184000,
                "discount": "10%"
            },
            {
                "unit": "Vỉ",
                "current_price": 92000,
                "original_price": null,
                "discount": null
            },
            {
                "unit": "Ống",
                "current_price": 9200,
                "original_price": null,
                "discount": null
            }
        ],
        "quantity": "Hộp 2 Vỉ x 10 Ống",
        "image": "top-product/1.webp",
        "brand": "Sanofi",
        "registrationNumber": "2085/2024/ĐKSP",
        "category": "Dạ dày, tá tràng",
        "form": "Hỗn dịch uống",
        "packaging": "Hộp 2 Vỉ x 10 Ống",
        "origin": "Pháp",
        "manufacturer": "Opella Healthcare Italy S.R.L.",
        "country": "Ý",
    };

    // State cho đơn vị và số lượng
    const [selectedUnit, setSelectedUnit] = useState("Hộp");
    const [quantity, setQuantity] = useState(1);

    // Lấy thông tin variant hiện tại dựa trên đơn vị đã chọn
    const currentVariant = productData.variants.find(variant => variant.unit === selectedUnit);

    // Xử lý thay đổi đơn vị
    const handleUnitChange = (unit) => {
        setSelectedUnit(unit);
        setQuantity(1); // Reset số lượng về 1 khi thay đổi đơn vị
    };

    // Xử lý phân trang thumbnails
    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (originalIndex) => {
        setCurrentImageIndex(originalIndex);
    };

    const handleQuantityChange = (type) => {
        if (type === "increase") {
            setQuantity((prev) => prev + 1);
        } else if (type === "decrease" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleBuyNow = () => {
        // Chuyển đến trang checkout với thông tin sản phẩm
        navigate("/checkout", {
            state: {
                product: productData,
                selectedVariant: {
                    id: productData.id,
                    unit: selectedUnit,
                    current_price: currentVariant.current_price,
                    original_price: currentVariant.original_price,
                    discount: currentVariant.discount,
                },
                quantity: quantity,
            },
        });
    };

    return (
        <div className="max-w-7xl mx-auto mt-[-10px] space-y-8">
            <Breadcrumbs
                classNames={{
                    list: "bg-gray-50 shadow-small",
                }}
                variant="solid"
                underline="hover"
            >
                <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>Thực phẩm chức năng</BreadcrumbItem>
                <BreadcrumbItem>Hỗ trợ tiêu hoá</BreadcrumbItem>
                <BreadcrumbItem>Dạ dày, tá tràng</BreadcrumbItem>
            </Breadcrumbs>
            
            {/* Thông báo bảo vệ sức khỏe */}
            <div className="bg-white px-6 py-7 rounded-xl shadow-lg">
                <div className="bg-sky-50 border-l-[6px] rounded-lg border-sky-600 p-4 py-3 mb-8">
                    <p className="text-blue-800 text-sm">
                        Thực phẩm bảo vệ sức khỏe, không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Phần Gallery Ảnh */}
                    <div className="space-y-4">
                        {/* Ảnh chính - chỉ hiển thị tĩnh */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <img
                                src={productImages[currentImageIndex]}
                                alt={productData.product_name}
                                className="w-full h-96 object-contain"
                                onError={(e) => {
                                    console.error("Lỗi tải ảnh:", productImages[currentImageIndex]);
                                    e.target.src = "/images/placeholder.jpg"; // Ảnh dự phòng
                                }}
                            />
                        </div>

                        {/* Thumbnails với phân trang */}
                        <div className="space-y-3">
                            {/* Grid thumbnails - 4 ảnh mỗi trang */}
                            <div className="grid grid-cols-4 gap-2">
                                {getCurrentPageImages().map((imageData, index) => (
                                    <button
                                        key={imageData.originalIndex}
                                        onClick={() => handleThumbnailClick(imageData.originalIndex)}
                                        className={`relative border-2 rounded-lg overflow-hidden transition-all ${
                                            currentImageIndex === imageData.originalIndex
                                                ? "border-sky-500"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        <img
                                            src={imageData.src}
                                            alt={`${productData.product_name} ${imageData.originalIndex + 1}`}
                                            className="w-full h-20 object-contain bg-white"
                                            onError={(e) => {
                                                console.error("Lỗi tải thumbnail:", imageData.src);
                                                e.target.src = "/images/placeholder.jpg"; // Ảnh dự phòng
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Nút điều hướng phân trang */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={handlePrevPage}
                                        className="bg-white border border-gray-300 hover:bg-gray-50 rounded-full p-2 shadow-sm transition-all"
                                    >
                                        <Icon icon="heroicons:chevron-left" className="w-5 h-5 text-gray-600" />
                                    </button>
                                    
                                    <div className="flex items-center gap-2">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentPage(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    currentPage === index
                                                        ? "bg-sky-500"
                                                        : "bg-gray-300 hover:bg-gray-400"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNextPage}
                                        className="bg-white border border-gray-300 hover:bg-gray-50 rounded-full p-2 shadow-sm transition-all"
                                    >
                                        <Icon icon="heroicons:chevron-right" className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            )}
                        </div>

                        <p className="text-sm text-gray-500 text-center pt-3 italic">
                            (Màu mã sản phẩm có thể thay đổi theo lô hàng)
                        </p>
                    </div>

                    {/* Phần Thông tin sản phẩm */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            {/* Tên sản phẩm */}
                            <div>
                                <h1 className="text-[26px] font-medium text-gray-900 mb-2">{productData.product_name}</h1>
                                <p className="text-gray-600">
                                    Thương hiệu: <span className="text-sky-600 font-medium">{productData.brand}</span>
                                </p>
                            </div>
    
                            {/* Giá và giảm giá */}
                            <div className="space-y-2">
                                {/* Hiển thị giảm giá và giá gốc chỉ khi có */}
                                {currentVariant.discount && currentVariant.original_price && (
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gradient-to-br from-red-600 to-red-400 text-white text-sm font-semibold px-2 py-[2px] rounded-br-2xl rounded-tl-2xl">
                                            -{currentVariant.discount}
                                        </div>
                                        <span className="text-lg text-gray-500 leading-none line-through">
                                            {currentVariant.original_price.toLocaleString("vi-VN")}đ
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-sky-600">
                                        {currentVariant.current_price.toLocaleString("vi-VN")}đ
                                    </span>
                                    <span className="text-2xl text-gray-600">/ {selectedUnit}</span>
                                </div>
                                <button className="text-sky-600 text-sm hover:underline flex items-center gap-1">
                                    Xem giấy công bố sản phẩm ↗
                                </button>
                            </div>
    
                            {/* Thông tin chi tiết */}
                            <div className="space-y-4 text-[18px]">
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Số đăng ký:</span>
                                        <span className="ml-2 font-medium">{productData.registrationNumber}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Danh mục:</span>
                                        <span className="ml-2 text-sky-600 font-medium">{productData.category}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Dạng bào chế:</span>
                                        <span className="ml-2 font-medium">{productData.form}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Quy cách:</span>
                                        <span className="ml-2 font-medium">{productData.packaging}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Xuất xứ:</span>
                                        <span className="ml-2 font-medium">{productData.origin}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Nhà sản xuất:</span>
                                        <span className="ml-2 font-medium">{productData.manufacturer}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-600 w-[152px]">Nước sản xuất:</span>
                                        <span className="ml-2 font-medium">{productData.country}</span>
                                    </div>
                            </div>
                        </div>

                       <div className="flex flex-col gap-4 pt-5 text-[17px] border-t border-gray-200">
                            {/* Chọn đơn vị */}
                            <div className="flex items-center">
                                <label className="block font-medium text-gray-700 w-[152px]">Đơn vị đo lượng:</label>
                                <ButtonGroup>
                                    {productData.variants.map((variant) => (
                                        <Button
                                            key={variant.unit}
                                            variant={selectedUnit === variant.unit ? "solid" : "bordered"}
                                            color={selectedUnit === variant.unit ? "primary" : "default"}
                                            onPress={() => handleUnitChange(variant.unit)}
                                            className="min-w-16"
                                        >
                                            {variant.unit}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </div>
    
                            {/* Chọn số lượng */}
                            <div className="flex items-center">
                                <label className="block font-medium text-gray-700 w-[152px]">Chọn số lượng:</label>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => handleQuantityChange("decrease")}
                                        disabled={quantity <= 1}
                                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Icon icon="heroicons:minus" className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange("increase")}
                                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    >
                                        <Icon icon="heroicons:plus" className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                       </div>

                        {/* Nút mua hàng */}
                        <Button
                            color="primary"
                            size="lg"
                            className="w-full bg-gradient-to-b from-sky-600 to-sky-400 text-white font-semibold py-4 text-lg"
                            onPress={handleBuyNow}
                        >
                            Mua ngay
                        </Button>
                    </div>
                </div>
            </div>

            {/* Phần Mô tả sản phẩm */}
            <div className="mt-16">
                <Card>
                    <CardBody className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-[28px] font-bold text-gray-900">Mô Tả Sản Phẩm</h2>
                            <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                                Thông tin chi tiết →
                            </button>
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Hỗn dịch uống Enterogermina Gut Defense là gì?
                                </h3>
                                <p>
                                    Tại Việt Nam, ngày càng nhiều trẻ nhỏ gặp vấn đề về tiêu hóa, với tỷ lệ mắc bệnh
                                    tiêu chảy lên tới 40%. Trong giai đoạn đầu đời, hệ tiêu hóa của trẻ rất nhạy cảm và
                                    dễ bị tác động bởi nhiều yếu tố, như chế độ ăn uống không hợp lý và sự thay đổi
                                    trong môi trường sống. Mặc dù các bác phụ huynh luôn có gắng chăm sóc dinh dương cho
                                    con, tình trạng rối loạn tiêu hóa như tiêu chảy, táo bón hay đầy hơi vẫn có thể xảy
                                    ra. Nguyên nhân chủ yếu là do thiếu hụt khuẩn có lợi trong hệ tiêu hóa.
                                </p>
                            </div>

                            <div>
                                <p>
                                    Đường ruột của chúng ta là nơi cư trú của hàng triệu vi khuẩn, trong đó có cả lợi
                                    khuẩn và hại khuẩn. Sự cân bằng giữa hai loại vi khuẩn này đóng vai trò quan trọng
                                    trong việc duy trì sức khỏe tiêu hóa và tăng cường hệ miễn dịch. Khi hai khuẩn vượt
                                    trội, bạn có thể đối mặt với những triệu chứng khó chịu như đầy bụng, khó tiêu, hay
                                    tiêu chảy, ảnh hưởng đến khả năng hấp thu dinh dưỡng và sự phát triển toàn diện.
                                    Những yếu tố như chế độ ăn uống không hợp lý, môi trường ô nhiễm, và áp lực từ cuộc
                                    sống hàng ngày có thể làm mất cân bằng vi sinh đường ruột, gây ra những rối loạn
                                    tiêu hóa khó chịu. Để giúp bạn duy trì hệ tiêu hóa khỏe mạnh, việc bổ sung lợi khuẩn
                                    là cần thiết, giúp tái lập cân bằng vi sinh và bảo vệ đường ruột khỏi sự xâm nhập
                                    của hại khuẩn.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Nguyên nhân khiến bạn gặp vấn đề về tiêu hóa:
                                </h4>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Chế độ ăn uống thiếu đa dạng, không đủ chất xơ.</li>
                                    <li>Sự phát triển của hai khuẩn do môi trường ô nhiễm.</li>
                                    <li>Việc dùng kháng sinh làm giảm số lượng lợi khuẩn tự nhiên trong cơ thể.</li>
                                </ul>
                            </div>

                            <div>
                                <p>
                                    Thực phẩm bảo vệ sức khỏe Enterogermina Gut Defense chứa tới 2 tỷ bào tử lợi khuẩn Bacillus Clausii giúp hỗ trợ tăng cường tiêu hóa và hỗ trợ bảo vệ đường ruột trước hại khuẩn. Sản phẩm rất dễ sử dụng, chỉ cần uống trực tiếp 1 - 2 ống mỗi ngày cho trẻ từ 0 đến 12 tuổi, trẻ trên 12 tuổi và người lớn có thể dùng 2 - 3 ống mỗi ngày để nhận đủ những lợi ích tốt nhất từ lợi khuẩn.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetailPage;

