import {Grid} from "@mui/material";
import CarouselHero from "./CarouselHero/CarouselHero";
import "./ListProduct.scss";
import ProductItem from "../../components/ProductItem/ProductItem";
import FilterDetail from "./components/FilterDetail";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProduct} from "../../actions/ProductAction";

function ListProduct() {
  const slug = useParams();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProduct.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <div className="list-container">
        <Grid
          container
          columnSpacing={{xs: 1, sm: 2, md: 2}}
          className="list-carousel"
        >
          <Grid item xs={6} className="list-carousel-item">
            <CarouselHero></CarouselHero>
          </Grid>
          <Grid item xs={6} className="list-carousel-item">
            <CarouselHero></CarouselHero>
          </Grid>
        </Grid>
        <FilterDetail />
        <div className="list-filter"></div>
        <div className="list-body mt-4">
          <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}}>
            {products && products.length > 0 ? (
              products.map((item, index) => (
                <Grid key={index} item xs={3}>
                  <ProductItem item={item}></ProductItem>
                </Grid>
              ))
            ) : (
              <span>Không có sản phẩm</span>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
