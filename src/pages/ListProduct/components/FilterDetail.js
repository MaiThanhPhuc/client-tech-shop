import {Icon, Popover} from "@mui/material";
import "./Filter.scss";
import PopupState, {bindTrigger, bindPopover} from "material-ui-popup-state";
import {
  ListFilterBrandPhone,
  ListFilterMobileAccording,
  ListFilterPhone,
  ListFilterSort,
} from "./FilterModel";
import {Link} from "react-router-dom";
import FilterPrice from "./FilterPrice";
import {filterProductByPrice} from "../../../actions/ProductAction";
import {useDispatch} from "react-redux";
import {useState} from "react";
import FilterMenu from "./FilterMenu";
function FilterDetail() {
  const dispatch = useDispatch();
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  const FilterProductByPrice = (a, b) => {
    let startPrice = parseInt(a);
    let endPrice = parseInt(b);
    dispatch(filterProductByPrice(startPrice, endPrice));
  };

  // const HandleFilterProductByType = async (name) => {
  //   if (dataFilter.type === name) {
  //     delete dataFilter[`type`];
  //     const newDataFilter = { ...dataFilter };
  //     setDataFilter({ ...newDataFilter });
  //   } else {
  //     setDataFilter({ ...dataFilter, type: name });
  //   }
  // };

  return (
    <>
      <section>
        <div className="filter-brand my-2">
          {ListFilterBrandPhone.map((x, index) => (
            <Link key={index} to={x.url} className="filter-brand-item">
              <img src={x.urlImg} alt={x.url} />
            </Link>
          ))}
        </div>

        <div className="filter-header">Chọn theo nhu cầu</div>
        <div className="filter-according">
          {ListFilterMobileAccording.map((x, index) => (
            <div key={index} className="filter-according-item">
              <Link
                to={x.url}
                style={{
                  backgroundImage: `url(${x.urlImg})`,
                  backgroundColor: x.bgColor,
                }}
                className="filter-according-item-link"
              >
                <span>{x.name}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="filter-header">Chọn theo tiêu chí</div>
        <FilterMenu />
        <div className="filter-header">Khoảng giá</div>
        <div className="options-price">
          <input
            type="number"
            id="priceStart"
            placeholder="đ TỪ"
            onChange={(e) => setStartPrice(e.target.value)}
          ></input>
          <input
            type="number"
            id="priceEnd"
            placeholder="đ ĐẾN"
            onChange={(e) => setEndPrice(e.target.value)}
          ></input>
          <button onClick={() => FilterProductByPrice(startPrice, endPrice)}>
            Tìm
          </button>
        </div>
        <div className="filter-header">Sắp xếp theo</div>
        <FilterPrice />
      </section>
    </>
  );
}

export default FilterDetail;
