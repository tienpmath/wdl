"use client";
import Image from "next/image";
import faq_data from "@/data/home-data/FaqData";
import CurvedCircle from "./CurvedCircle";
import SvgAnimation from "@/hooks/SvgAnimation";
import InjectableSvg from "@/hooks/InjectableSvg";
import MotionAnimation from "@/hooks/MotionAnimation";

import faq_img1 from "@/assets/img/others/faq_img.png";

const FaqArea = () => {
  MotionAnimation();
  const svgIconRef = SvgAnimation("/assets/img/others/faq_shape02.svg");

  return (
    <section className="faq__area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq__img-wrap tg-svg" ref={svgIconRef}>
              <div className="faq__round-text">
                <CurvedCircle />
              </div>
              <div className="faq__img">
                <Image src={faq_img1} alt="img" />
                <div className="shape-one">
                  <InjectableSvg
                    src="/assets/img/others/faq_shape01.svg"
                    className="injectable tg-motion-effects4"
                    alt="img"
                  />
                </div>
                <div className="shape-two">
                  <span className="svg-icon"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq__content">
              <div className="section__title pb-10">
                <span className="sub-title">FAQS</span>
                <h2 className="title">
                  Khách hàng thắc mắc <br />
                  Web Đà Lạt trả lời !
                </h2>
              </div>
              <p>
                Đối với mỗi khách hàng khác nhau, chúng tôi suy nghĩ và sáng tạo
                ra từng giao diện khác nhau để phù hợp với tất cả các khách
                hàng. <br />
                Các giao diện website được làm tại WEB ĐÀ LẠT đảm bảo là duy
                nhất trên thị trường
              </p>
              <div className="faq__wrap">
                <div className="accordion" id="accordionExample">
                  {faq_data
                    .filter((items) => items.page === "home_1")
                    .map((item) => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${item.class_name}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${
                            item.id === 1 ? "show" : ""
                          }`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
