import {Icon} from "@mui/material";
import {ListFilterSort} from "./FilterModel";

function FilterPrice() {
  return (
    <>
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
    </>
  );
}

export default FilterPrice;
