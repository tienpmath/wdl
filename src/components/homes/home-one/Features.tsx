import feature_data from "@/data/home-data/FeatureData";
import Image from "next/image";

const Features = () => {
  return (
    <section className="features__area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section__title white-title text-center mb-50">
              <span className="sub-title">
                Dịch vụ thiết kế website Đáp ứng mọi lĩnh vực ngành nghề
              </span>
              <h2 className="title">
                Quy trình thiết kế website chuyên nghiệp tại Đà Lạt - Lâm Đồng!
              </h2>
              <p>
                Bằng cách tiếp cận sáng tạo được kết hợp công nghệ tiên phong và
                chất lượng quản lý tiêu chuẩn cao. Webdalat mang làm trang web
                để Donah nghiệp thực sự tỏa sáng khi đạt mục tiêu tăng doanh thu
                lẫn mức độ nhận biết.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {feature_data
            .filter((items) => items.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    <Image
                      src={item.icon ? item.icon : ""}
                      className="injectable"
                      alt="img"
                    />
                  </div>
                  <div className="features__content">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
