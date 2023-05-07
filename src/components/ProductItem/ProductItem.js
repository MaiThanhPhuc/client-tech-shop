import {Box, Rating} from "@mui/material";
import "./ProductItem.scss";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../util/formatCurency";

function ProductItem({item}) {
  return (
    <>
      {item && (
        <>
          <Link to={`/detail/${item.id}`}>
            <div className="product-item">
              <div className="product-item-img-wrapper">
                <div className="product-item-img">
                  <img
                    src={item.productOptions[0].pictures[0]}
                    alt={item.productOptions[0].fullName}
                  />
                </div>
              </div>
              <div className="product-item-body">
                <span className="product-item-name">
                  {item.productOptions[0].fullName}
                </span>
                <div className="product-item-price-wrapper">
                  <span className="new-price">
                    {formatCurrency(item.productOptions[0].salePrice)}
                  </span>
                  <span className="old-price">
                    {formatCurrency(item.productOptions[0].marketPrice)}
                  </span>
                </div>
                {/* <div className="product-item-more">{item.more}</div> */}
                <div className="product-item-rating mt-2">
                  <Box>
                    <Rating
                      readOnly
                      size="small"
                      name="simple-controlled"
                      value={item.rate}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default ProductItem;
