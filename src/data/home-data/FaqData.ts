interface DataType {
  id: number;
  page: string;
  question: string;
  answer: string;
  class_name?: string;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    question: "1. Giá thiết kế website là bao nhiêu?",
    answer:
      "Giá thiết kế website hiện nay giao động từ 3 triệu đến 30 triệu ! Thiết kế các hệ thống phần mềm quản lý nội bộ chất lượng cao, load nhanh, chính xác thông tin, book zalo OA...",
  },
  {
    id: 2,
    page: "home_1",
    question: "2. Thiết kế trang web có tùy chỉnh được không?",
    class_name: "collapsed",
    answer:
      "Với website  Đà Lạt hoàn toàn có thể dễ dàng tạo cho mình những nội dung bán hàng đẹp mắt, hấp dẫn. Các nút kêu gọi hành động, các khung vị trí cho ảnh và mô tả sản phẩm đều được chuẩn hóa để trở nên thu hút nhất.",
  },
  {
    id: 3,
    page: "home_1",
    question: "3. Thời điểm thích hợp để thiết kế website.",
    class_name: "collapsed",
    answer:
      "Nếu bạn đang là doanh nghiệp: Website cho doanh nghiệp là điều cần thiết để đưa thương hiệu, doanh nghiệp của bạn trở nên phổ biến trên mạng. Còn điều gì bằng nếu thương hiệu của bạn phổ biến online, sẽ tăng độ uy tín, tăng đơn hàng và các đối tác sẽ tìm đến với doanh nghiệp của bạn",
  },
  {
    id: 4,
    page: "home_1",
    question: "4. Các tiện ích mang lại bởi dịch vụ Thiết kế Web Đà Lạt.",
    class_name: "collapsed",
    answer:
      "Tại Web Đà Lạt thiết kế web Đà Lạt, tất cả các sản phẩm website được làm ra điều đảm bảo tiêu chuẩn chất lượng, tốc độ nhanh, giao diện đẹp và bắt mắt. Các tính năng sẽ được làm theo yêu cầu của các khách hàng. Chúng tôi có thể làm được tất cả các chức năng khó như, booking, đặt phòng, đặt lịch, thanh toán online, hỗ trợ thanh toán trực tuyến,….",
  },
];

export default faq_data;
