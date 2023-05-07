import React, {useEffect, useState} from "react";
import "./Filter.scss";
import {filterProductByRandomField} from "../../../actions/ProductAction";
import {useDispatch, useSelector} from "react-redux";
import {getAllSelectList} from "../../../actions/SelectListAction";
import {getAllTypeProduct} from "../../../actions/ListTypeProductAction";
import {Icon, Popover} from "@mui/material";
import PopupState, {bindTrigger, bindPopover} from "material-ui-popup-state";
import {ListFilterPhone} from "./FilterModel";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const [dataFilter, setDataFilter] = useState({});
  const filterMenuList = useSelector((state) => state.selectList.List);
  const {List} = useSelector((state) => state.allTypeProduct);

  useEffect(() => {
    dispatch(filterProductByRandomField(dataFilter));
  }, [dataFilter]);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleClickMenuShow = (item, menuItem) => {
    // const data = {};
    // data[`${menuItem.name}`] = item;
    // setDataFilter({...dataFilter, ...data});
  };

  const CancelChooseMenuShow = (menuItem, arrItem) => {
    // delete dataFilter[`${menuItem.name}`];
    // const newDataFilter = {...dataFilter};
    // setDataFilter(newDataFilter);
  };

  const HandleFilterProductByType = async (name) => {
    if (dataFilter.name === name) {
      delete dataFilter[`name`];
      const newDataFilter = {...dataFilter};
      setDataFilter({...newDataFilter});
    } else {
      setDataFilter({...dataFilter, name: name});
    }
  };

  return (
    <div>
      <div className="filter-citeria">
        {ListFilterPhone.map((menu, index) =>
          menu.isSelect ? (
            <PopupState
              key={index}
              variant="popover"
              popupId="demo-popup-popover"
            >
              {(popupState) => (
                <>
                  <div
                    className="filter-citeria-item"
                    {...bindTrigger(popupState)}
                  >
                    {menu.icon && (
                      <Icon baseClassName="material-icons-outlined">
                        {menu.icon}
                      </Icon>
                    )}
                    <span>{menu.name}</span>
                    <Icon baseClassName="material-icons-outlined">
                      expand_more
                    </Icon>
                  </div>
                  <Popover
                    className="popover-container"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <div className="filter-citeria-item-box">
                      <div className="filter-citeria-item-sub-wrapper">
                        {menu.options.map((option, index) => (
                          <button
                            onClick={handleClickMenuShow(option, menu)}
                            key={index}
                            className="filter-citeria-item active"
                          >
                            <span>{option.name}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        className="filter-citeria-item cancel"
                        onClick={() => CancelChooseMenuShow(menu.options)}
                      >
                        Bỏ Chọn
                      </button>
                    </div>
                  </Popover>
                </>
              )}
            </PopupState>
          ) : (
            <div key={index} className="filter-citeria-item">
              <Icon baseClassName="material-icons-outlined">{menu.icon}</Icon>
              <span>{menu.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
