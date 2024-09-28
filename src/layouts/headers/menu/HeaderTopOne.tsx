import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icons/map_marker.svg";
import icon_2 from "@/assets/img/icons/envelope.svg";
import icon_3 from "@/assets/img/icons/phone.svg";

const HeaderTopOne = ({ style }: any) => {
  return (
    <div className="tg-header__top">
      <div className={`container ${style ? "" : "custom-container"}`}>
        <div className="row">
          <div className="col-lg-6">
            <ul className="tg-header__top-info list-wrap">
              <li>
                <Image src={icon_1} alt="Icon" />{" "}
                <span>01 Phù Đổng Thiên Vương, TP Đà Lạt</span>
              </li>
              <li>
                <Image src={icon_2} alt="Icon" />{" "}
                <Link href="mailto:info@skillgrodemo.com">
                  tiendev88@ggmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tg-header__top-right">
              <div className="tg-header__phone">
                <Image src={icon_3} alt="Icon" />
                Hotline: <Link href="tel:0944390988">0944 390 988</Link>
              </div>
              <ul className="tg-header__top-social list-wrap">
                <li>Follow Us On :</li>
                <li>
                  <Link href="https://facebook.com/tienpmath">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com/tienpmath">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com/tienpmath">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com/tienpmath">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com/tienpmath">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopOne;
