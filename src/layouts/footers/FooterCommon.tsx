import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/img/logo/icon webdalat.png";

const FooterCommon = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="footer__widget">
          <div className="logo mb-35">
            <Link href="/">
              <Image width={100} src={logo} alt="img" />
            </Link>
          </div>
          <div className="footer__content">
            <p>
              Bạn đang có một doanh nghiệp và muốn tạo ra một trang web chuyên
              nghiệp để giới thiệu sản phẩm và dịch vụ của mình? Bạn đã nghe nói
              về việc thiết kế website theo yêu cầu nhưng chưa biết rõ về nó?
            </p>
            <ul className="list-wrap">
              <li>
                Address: 01 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt, Lâm Đồng
              </li>
              <li>Hotline: 0944 390 988</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="footer__widget">
          <h4 className="footer__widget-title">Dự án tiêu biểu</h4>
          <div className="footer__link">
            <ul className="list-wrap">
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="http://dalatcanyoning.com/"
                >
                  Đà Lạt Canyoning Tour
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://amazingdalat.com/"
                >
                  Đà Lạt Amazing
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://dalattrongtoi.com/"
                >
                  Đà Lạt Trong toi
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://raovatlamdong.vn/">
                  Rao Vặt Đà Lạt
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://farmdalat.vn/">
                  Đặc Sản Đà Lạt
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://thptnguyenchithanhdr.edu.vn/"
                >
                  Trường THPT Nguyễn Chí Thanh
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="footer__widget">
          <h4 className="footer__widget-title">Liên kết</h4>
          <div className="footer__link">
            <ul className="list-wrap">
              <li>
                <Link href="/contact">Liên hệ</Link>
              </li>
              <li>
                <Link href="/instructor-details">Hợp tác</Link>
              </li>
              <li>
                <Link href="/blog">Tin tức</Link>
              </li>
              <li>
                <Link href="/instructor-details">Instructor</Link>
              </li>
              <li>
                <Link href="/events-details">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCommon;
