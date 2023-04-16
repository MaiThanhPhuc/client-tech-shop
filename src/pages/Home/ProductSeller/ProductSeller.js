import {Link} from "react-router-dom";
import "./ProductSeller.scss";
import {Grid} from "@mui/material";
import {ListProduct, ListSale} from "../../../dummyData";
import ProductItem from "../../../components/ProductItem/ProductItem";
const ListProductTest = ListProduct;
const ListSaleTest = ListSale;
function ProductSeller() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-4">
          <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 4}}>
            {ListSaleTest.map((x, index) => (
              <Grid item xs={4} key={index} className="card-container">
                <Link
                  to={x.href}
                  style={{backgroundColor: x.color}}
                  className="card-wrapper"
                >
                  <div className="card-content">
                    <h6 className="card-content-header">Sale Sốc 🔥</h6>
                    <h4 className="card-content-body">{x.name}</h4>
                    <h6 className="card-content-footer">
                      Giãm đến {x.percent}%
                    </h6>
                  </div>
                  <div className="card-image">
                    <img src={x.src} alt={x.name} />
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="col-md-12 mb-4">
          <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}}>
            {ListProductTest.map((item, index) => (
              <Grid item xs={3} key={index}>
                <ProductItem item={item}></ProductItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ProductSeller;
