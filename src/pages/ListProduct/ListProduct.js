import {Grid} from "@mui/material";
import CarouselHero from "./CarouselHero/CarouselHero";
import "./ListProduct.scss";
import ProductItem from "../../components/ProductItem/ProductItem";
import Filter from "./Filter/Filter";
import {useParams} from "react-router-dom";
import {ListLatopProduct} from "../../dummyData";
function ListProduct() {
  const slug = useParams();
  console.log(slug);
  return (
    <>
      <div className="list-container">
        <Grid
          container
          rowSpacing={2}
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
        <Filter />
        <div className="list-filter"></div>
        <div className="list-body mt-4">
          <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}}>
            {ListLatopProduct.map((item, index) => (
              <Grid key={index} item xs={3}>
                <ProductItem item={item}></ProductItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
