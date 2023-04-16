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
function Filter() {
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
        <div className="filter-citeria">
          {ListFilterPhone.map((x, index) =>
            x.isSelect ? (
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
                      {x.icon && (
                        <Icon baseClassName="material-icons-outlined">
                          {x.icon}
                        </Icon>
                      )}
                      <span>{x.name}</span>
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
                      <div className="filter-citeria-item-sub-wrapper">
                        {x.subFilter.map((sub, index) => (
                          <div key={index} className="filter-citeria-item">
                            <span>{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    </Popover>
                  </>
                )}
              </PopupState>
            ) : (
              <div key={index} className="filter-citeria-item">
                <Icon baseClassName="material-icons-outlined">{x.icon}</Icon>
                <span>{x.name}</span>
              </div>
            )
          )}
        </div>
        <div className="filter-header">Sắp xếp theo</div>
        <div className="filter-sort">
          {ListFilterSort.map((x, index) => (
            <div key={index} className="filter-sort-item">
              {x.id !== 2 ? (
                <Icon baseClassName="material-icons-outlined">{x.icon}</Icon>
              ) : (
                <Icon
                  className="icon-revert"
                  baseClassName="material-icons-outlined"
                >
                  {x.icon}
                </Icon>
              )}
              <span>{x.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Filter;
