import {Icon} from "@iconify/react";
import "../DetailProduct.scss";

function Policy() {
  return (
    <>
      <div className="body-product-detail-right__policy">
        <div className="row">
          <span className="col-6">
            <Icon
              icon="solar:medal-ribbons-star-outline"
              width="24"
              height="24"
            />
            <p>Hàng chính hãng</p>
          </span>
          <span className="col-6">
            <Icon
              icon="solar:shield-check-bold-duotone"
              width="24"
              height="24"
            />
            <p>Bảo hành 24 Tháng</p>
          </span>
          <span className="col-6">
            <Icon icon="tabler:exchange" width="24" height="24" />
            <p>Chính sách đổi trả</p>
          </span>
          <span className="col-6">
            <Icon
              icon="icon-park-twotone:setting-laptop"
              width="24"
              height="24"
            />
            <p>Hỗ trợ cài đặt miễn phí</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Policy;
