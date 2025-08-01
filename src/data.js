const productsData = [
  {
    "product_name": "Viên uống Omega-3 For Kids Nutrimed giúp trẻ phát triển trí não, thị lực (100 viên)",
    "current_price": 360000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 100 viên",
    "discount": null,
    "image": "products/1.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Việt Nam",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Thực phẩm bảo vệ sức khỏe OMEGA 3 PLUS Kenko hỗ trợ não bộ, thị lực và sức khoẻ tim mạch (120 viên)",
    "current_price": 920000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 120 viên",
    "discount": null,
    "image": "products/2.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Thái Lan",
    "price_range": "Trên 500.000đ"
  },
  {
    "product_name": "Viên uống Omega 3-6-9 Pharmekal hỗ trợ giảm nguy cơ xơ vữa động mạch (100 viên)",
    "current_price": 290000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 100 viên",
    "discount": null,
    "image": "products/3.webp",
    "target_audience": ["Người lớn"],
    "origin": "Hoa Kỳ",
    "price_range": "100.000đ đến 300.000đ"
  },
  {
    "product_name": "Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 hỗ trợ tốt cho mắt và não (30ml)",
    "current_price": 365000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 30ml",
    "discount": null,
    "image": "products/4.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Omega 3 Power DAO Nordic Health hỗ trợ tăng cường sức khoẻ tim mạch, giảm mỡ máu (120 viên)",
    "current_price": 320000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 120 viên",
    "discount": null,
    "image": "products/5.webp",
    "target_audience": ["Người lớn"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Pregnacare Plus Omega-3 Vitabiotics bổ sung Vitamin, Omega-3 và khoáng chất (56 viên)",
    "current_price": 570000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 56 viên",
    "discount": null,
    "image": "products/6.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Anh",
    "price_range": "Trên 500.000đ"
  },
  {
    "product_name": "Viên uống Omega 3-6-9 NatureCare giảm nguy cơ xơ vữa động mạch, bảo vệ sức khỏe tim mạch (3 vỉ x 20 viên)",
    "current_price": 399200,
    "original_price": 499000,
    "unit": "Hộp",
    "quantity": "Hộp 3 vỉ x 20 viên",
    "discount": "20%",
    "image": "products/7.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Ấn Độ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Siro Fitobimbi Omega Junior Gocce Pharmalife bổ sung acid béo không no Omega-3, Omega-6 (30ml)",
    "current_price": 330000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 30ml",
    "discount": null,
    "image": "products/8.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Việt Nam",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên nhai Nature's Way Kids Smart Vita Gummies Omega-3 DHA Fish Oil hỗ trợ tăng cường sức khỏe (60 viên)",
    "current_price": 332000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 60 viên",
    "discount": null,
    "image": "products/9.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Pregnacare Max Omega 3 DHA Vitabiotics cung cấp vitamin và khoáng chất cho phụ nữ mang thai (84 viên)",
    "current_price": 388800,
    "original_price": 486000,
    "unit": "Hộp",
    "quantity": "Hộp 84 viên",
    "discount": "20%",
    "image": "products/10.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)",
    "current_price": 344800,
    "original_price": 431000,
    "unit": "Hộp",
    "quantity": "Hộp 6 vỉ x 20 viên",
    "discount": "20%",
    "image": "products/11.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Ấn Độ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Omexxel Ginkgo 120 Excelife tăng cường tuần hoàn máu não, tốt cho tim mạch (2 vỉ x 15 viên)",
    "current_price": 248000,
    "original_price": 310000,
    "unit": "Hộp",
    "quantity": "Hộp 2 vỉ x 15 viên",
    "discount": "20%",
    "image": "products/12.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "100.000đ đến 300.000đ"
  },
  {
    "product_name": "Viên nang mềm Omexxel Arthri hỗ trợ tăng tiết dịch khớp, giảm đau do lão hóa khớp (3 vỉ x 10 viên)",
    "current_price": 390000,
    "original_price": null,
    "unit": "Lọ", // Giữ nguyên Lọ vì tên sản phẩm không ghi rõ Hộp
    "quantity": "Lọ 3 vỉ x 10 viên",
    "discount": null,
    "image": "products/13.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Omexxel 3-6-9 Excelife tốt cho trí não, giúp bổ mắt (100 viên)",
    "current_price": 550000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 100 viên",
    "discount": null,
    "image": "products/14.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "Trên 500.000đ"
  },
  {
    "product_name": "Viên uống Omexxel 3-6-9 Premium hỗ trợ tốt cho não và mắt (100 viên)",
    "current_price": 330000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 100 viên",
    "discount": null,
    "image": "products/15.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Omega Plus 10 Vitamins For Life chống oxy hóa, hỗ trợ tốt cho tim mạch (Hộp 60 viên)",
    "current_price": 320000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 60 viên",
    "discount": null,
    "image": "products/16.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống hỗ trợ phụ nữ mang thai và phụ nữ cho con bú Brauer Ultra Pure Dha For Pregnancy & Breastfeeding (60 viên)",
    "current_price": 342000,
    "original_price": 360000,
    "unit": "Hộp",
    "quantity": "Hộp 60 viên",
    "discount": "5%",
    "image": "products/17.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Siro Omega Vit Plus+ Botafarma hỗ trợ tăng khả năng chống oxy hóa, tốt cho não bộ và mắt (100ml)",
    "current_price": 330000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 100ml",
    "discount": null,
    "image": "products/18.webp",
    "target_audience": ["Trẻ em", "Người lớn"],
    "origin": "Thái Lan",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Thuốc Dasbrain Pharmametics hỗ trợ các chức năng não bộ (30 viên)",
    "current_price": 551650,
    "original_price": 649000,
    "unit": "Hộp",
    "quantity": "Hộp 30 viên",
    "discount": "15%",
    "image": "products/19.webp",
    "target_audience": ["Trẻ em", "Người lớn"],
    "origin": "Việt Nam",
    "price_range": "Trên 500.000đ"
  },
  {
    "product_name": "Thực phẩm bảo vệ sức khỏe Omega Vit Botafarma hỗ trợ tăng khả năng chống oxy hóa, tốt cho não bộ và mắt (100ml)",
    "current_price": 432000,
    "original_price": 480000,
    "unit": "Hộp",
    "quantity": "Hộp 100ml",
    "discount": "10%",
    "image": "products/20.webp",
    "target_audience": ["Trẻ em", "Người lớn"],
    "origin": "Thái Lan",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Mega-Cal 1000 Vitamins For Life giúp bổ sung canxi, chống loãng xương (60 viên)",
    "current_price": 678300,
    "original_price": 696000,
    "unit": "Hộp",
    "quantity": "Hộp 60 viên",
    "discount": null,
    "image": "products/21.webp",
    "target_audience": ["Người lớn", "Người cao tuổi", "Phụ nữ có thai"],
    "origin": "Hoa Kỳ",
    "price_range": "Trên 500.000đ"
  },
  {
    "product_name": "Viên uống Omexxel Calk2 Excelife bổ sung Canxi, Vitamin D3 (3 vỉ x 10 viên)",
    "current_price": 370000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 3 vỉ x 10 viên",
    "discount": null,
    "image": "products/22.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên nang mềm Omexxel Cordy hỗ trợ tăng sức đề kháng (3 vỉ x 10 viên)",
    "current_price": 459000,
    "original_price": 510000,
    "unit": "Hộp",
    "quantity": "Hộp 3 vỉ x 10 viên",
    "discount": "10%",
    "image": "products/23.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Brauer Baby & Kids Ultra Pure DHA hỗ trợ phát triển não bộ, sức khỏe cho mắt (60 viên)",
    "current_price": 160000,
    "original_price": null,
    "unit": "Gói",
    "quantity": "Gói 60 viên",
    "discount": null,
    "image": "products/24.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Anh",
    "price_range": "100.000đ đến 300.000đ"
  },
  {
    "product_name": "Viên uống Blackmores Omega Double High Strength Fish Oil bổ sung omega (90 viên)",
    "current_price": 292000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 90 viên",
    "discount": null,
    "image": "products/25.webp",
    "target_audience": ["Người lớn", "Người cao tuổi"],
    "origin": "Ấn Độ",
    "price_range": "100.000đ đến 300.000đ"
  },
  {
    "product_name": "Viên nhai Nature's Way Kids Smart Bursts DHA 300mg Triple Strength hỗ trợ phát triển não bộ (50 viên)",
    "current_price": 324000,
    "original_price": null,
    "unit": "Lọ",
    "quantity": "Lọ 50 viên",
    "discount": null,
    "image": "products/26.webp",
    "target_audience": ["Trẻ em"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Blackmores Evening Primrose Oil hỗ trợ làn da khỏe mạnh, dưỡng ẩm da (190 viên)",
    "current_price": 450000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 190 viên",
    "discount": null,
    "image": "products/27.webp",
    "target_audience": ["Người lớn"],
    "origin": "Ấn Độ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Dịch truyền Lipovenoes 10% PLR Fresenius Kabi cung cấp các axit béo thiết yếu (250ml)",
    "current_price": 240000,
    "original_price": 300000,
    "unit": "Hộp", // Unit là Hộp nhưng chi tiết là ml
    "quantity": "Hộp 250ml",
    "discount": "20%",
    "image": "products/28.webp",
    "target_audience": ["Tất cả"],
    "origin": "Việt Nam",
    "price_range": "100.000đ đến 300.000đ"
  },
  {
    "product_name": "Viên uống Procare Diamond bổ sung khoáng chất cho phụ nữ có thai và cho con bú (30 viên)",
    "current_price": 342000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 30 viên",
    "discount": null,
    "image": "products/29.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Thuốc PM Procare Catalent bổ sung DHA, EPA, Vitamin và khoáng chất (30 viên)",
    "current_price": 320000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 30 viên",
    "discount": null,
    "image": "products/30.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Anh",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Viên uống Vital Pregna Doppelherz Aktiv giúp tăng cường sức khỏe và thể chất (30 viên)",
    "current_price": 388800,
    "original_price": 486000,
    "unit": "Hộp",
    "quantity": "Hộp 30 viên",
    "discount": "20%",
    "image": "products/31.webp",
    "target_audience": ["Phụ nữ có thai"],
    "origin": "Hoa Kỳ",
    "price_range": "300.000đ đến 500.000đ"
  },
  {
    "product_name": "Sữa bột CaloSure gold Vitadairy ít đường, tăng cường sức khỏe tim mạch, hồi phục sức khỏe (900g)",
    "current_price": 324000,
    "original_price": null,
    "unit": "Hộp",
    "quantity": "Hộp 900g",
    "discount": null,
    "image": "products/32.webp",
    "target_audience": ["Người cao tuổi", "Người lớn"],
    "origin": "Việt Nam",
    "price_range": "300.000đ đến 500.000đ"
  }
];

export default productsData;