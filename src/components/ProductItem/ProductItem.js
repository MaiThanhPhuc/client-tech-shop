import {Box, Rating} from "@mui/material";
import "./ProductItem.scss";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../util/formatCurency";

function ProductItem({item}) {
  return (
    <>
      <Link to={item.href}>
        <div className="product-item">
          <div className="product-item-img-wrapper">
            <div className="product-item-img">
              <img src={item.img} alt={item.name} />
            </div>
          </div>
          <div className="product-item-body">
            <span className="product-item-name">{item.name}</span>
            <div className="product-item-price-wrapper">
              <span className="new-price">{formatCurrency(item.newPrice)}</span>
              <span className="old-price">{formatCurrency(item.oldPrice)}</span>
            </div>
            <div className="product-item-more">{item.more}</div>
            <div className="product-item-rating mt-2">
              <Box>
                <Rating
                  readOnly
                  size="small"
                  name="simple-controlled"
                  value={item.rating}
                />
              </Box>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
