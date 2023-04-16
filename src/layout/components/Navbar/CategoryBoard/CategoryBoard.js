import "./CategoryBoard.scss";
import {ListBestProduct, ListCategory, ListPrice} from "./CategoryContent";
import {Link} from "react-router-dom";

function CategoryBoard(props) {
  // const [category, setCategory] = useState(0)
  const categoryBrand = ListCategory;
  const categoryPrice = ListPrice;
  const bestProduct = ListBestProduct;
  return (
    <>
      <div className="row wrapper-category">
        <div className="col-5">
          {props.index + 1 === 7 ? (
            <h6>Phụ kiện di động</h6>
          ) : props.index + 1 === 6 ? (
            <h6>Iphone cũ</h6>
          ) : (
            <h6>Hãng sản xuất</h6>
          )}

          <div className="row">
            {categoryBrand[props.index]?.map((x, index) => (
              <Link to={x.href} key={index} className="category-item col-4">
                {x.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-3">
          {props.index + 1 === 7 ? (
            <h6>Phụ kiện laptop</h6>
          ) : props.index + 1 === 6 ? (
            <h6>Điện thoại android cũ</h6>
          ) : (
            <h6>Mức giá</h6>
          )}
          <div className="row">
            {categoryPrice[props.index]?.map((x, index) => (
              <Link to={x.href} key={index} className="col-12 category-item">
                {x.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-4">
          {props.index + 1 === 7 ? (
            <h6>Phụ kiện khác</h6>
          ) : props.index + 1 === 6 ? (
            <h6>Sản phẩm cũ bán chạy nổi bật 🔥</h6>
          ) : (
            <h6>Sản phẩm bán chạy 🔥</h6>
          )}

          <div className="row">
            {bestProduct[props.index]?.map((x, index) => (
              <Link to={x.href} key={index} className="col-12 category-item">
                {x.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryBoard;
