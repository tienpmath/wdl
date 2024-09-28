import { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icons/features_icon01.svg";
import icon_2 from "@/assets/img/icons/features_icon02.svg";
import icon_3 from "@/assets/img/icons/features_icon03.svg";
import icon_4 from "@/assets/img/icons/features_icon04.svg";
import homefFeature_1 from "@/assets/img/icons/h4_features_icon01.svg";
import homefFeature_2 from "@/assets/img/icons/h4_features_icon02.svg";
import homefFeature_3 from "@/assets/img/icons/h4_features_icon03.svg";

interface DataType {
  id: number;
  page: string;
  icon?: StaticImageData;
  icon_2?: string;
  icon_3?: string;
  title: string;
  desc: string;
}
[];

const feature_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    icon: icon_1,
    title: "Thảo luận về dự án",
    desc: "Liên hệ, Thảo luận vấn đề mong muốn làm website với khách hàng, Đánh giá mục tiêu, động lực và yêu cầu đặt ra.",
  },
  {
    id: 2,
    page: "home_1",
    icon: icon_2,
    title: "Thống nhất Thiết kế bố cục giao diện",
    desc: " Thiết kế website hoàn toàn khác biệt và mới lạ so với các đối thủ trong ngành nhưng vẫn đảm bảo giá trị UX/UI cho người dùng",
  },
  {
    id: 3,
    page: "home_1",
    icon: icon_3,
    title: "Lập trình chức năng",
    desc: "Sử dụng các công nghệ hiện đại 2024, đội ngũ Kỹ sư sẽ Lập trình website trên nền tảng tân tiến nhất hiện nay, mang lại thuận tiện cho nhà quản trị web, sẽ kiểm tra và hiệu chỉnh trước khi chính thức đưa vào hoạt động. Đảm bảo website hoạt động trơn tru và hiệu quả.",
  },
  {
    id: 4,
    page: "home_1",
    icon: icon_4,
    title: "Viết nội dung cho website - Hoàn thiện",
    desc: "Viết bài, hướng dẫn, chỉnh sửa ảnh...Chúng tôi luôn bắt đầu mỗi dự án từ việc lên chiến lược nội dung bài bản. thể hiện được nội dung tiếp thị và trải nghiệm sản phẩm/dịch vụ từ thương mại điện tử, bán hàng, shop, quán cafe, homstay, hotel, thương hiệu...",
  },

  // home_2

  {
    id: 1,
    page: "home_2",
    icon_2: "/assets/img/icons/h2_features_icon01.svg",
    title: "Expert Tutors",
    desc: "when an unknown printer took a galley offe type and scrambled makes.",
  },

  {
    id: 2,
    page: "home_2",
    icon_2: "/assets/img/icons/h2_features_icon02.svg",
    title: "Effective Courses",
    desc: "when an unknown printer took a galley offe type and scrambled makes.",
  },

  {
    id: 3,
    page: "home_2",
    icon_2: "/assets/img/icons/h2_features_icon03.svg",
    title: "Earn Certificate",
    desc: "when an unknown printer took a galley offe type and scrambled makes.",
  },

  // home_3

  {
    id: 1,
    page: "home_3",
    icon_2: "assets/img/icons/h3_features_icon01.svg",
    title: "Scholarship Facility",
    desc: "Eestuidar University we prepare you to launch your.",
  },
  {
    id: 2,
    page: "home_3",
    icon_2: "assets/img/icons/h3_features_icon02.svg",
    title: "Learn From Experts",
    desc: "Eestuidar University we prepare you to launch your.",
  },
  {
    id: 3,
    page: "home_3",
    icon_2: "assets/img/icons/h3_features_icon03.svg",
    title: "Graduation Courses",
    desc: "Eestuidar University we prepare you to launch your.",
  },
  {
    id: 4,
    page: "home_3",
    icon_2: "assets/img/icons/h3_features_icon04.svg",
    title: "Certificate Program",
    desc: "Eestuidar University we prepare you to launch your.",
  },

  // home_4

  {
    id: 1,
    page: "home_4",
    icon: homefFeature_1,
    title: "Support & Motivation",
    desc: "We are able to offer every yoga training experienced & best yoga trainer.",
  },
  {
    id: 2,
    page: "home_4",
    icon: homefFeature_2,
    title: "Strong Body Life",
    desc: "We are able to offer every yoga training experienced & best yoga trainer.",
  },
  {
    id: 3,
    page: "home_4",
    icon: homefFeature_3,
    title: "Increased Flexibility",
    desc: "We are able to offer every yoga training experienced & best yoga trainer.",
  },

  // home-five

  {
    id: 1,
    page: "home_5",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-video-tutorial",
    title: "Easy Class",
    desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
  },
  {
    id: 2,
    page: "home_5",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-verified",
    title: "Safety & Security",
    desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
  },
  {
    id: 3,
    page: "home_5",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-instructor",
    title: "Skilled Teacher",
    desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
  },
  {
    id: 4,
    page: "home_5",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-book-1",
    title: "Clean Curriculum",
    desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
  },

  // home_8

  {
    id: 1,
    page: "home_8",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-book-1",
    title: "Learn skills with 120k+",
    desc: "video courses.",
  },
  {
    id: 2,
    page: "home_8",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-instructor",
    title: "Choose courses",
    desc: "real-world experts.",
  },
  {
    id: 3,
    page: "home_8",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-tutorial",
    title: "processional Tutors",
    desc: "video courses.",
  },
  {
    id: 4,
    page: "home_8",
    icon_3: "/assets/img/others/h5_features_item_shape02.svg",
    icon_2: "skillgro-graduated",
    title: "Online Degrees",
    desc: "Study flexibly online",
  },
];

export default feature_data;
