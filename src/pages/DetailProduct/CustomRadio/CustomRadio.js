import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {formatCurrency} from "../../../util/formatCurency";
import {useEffect, useState} from "react";
import "../DetailProduct.scss";
function CustomRadio({data, optionNumber, setOptionNumber}) {
  const [listColor, setListColor] = useState([]);
  const handleChooseOption = (event) => {
    const chooseIndex = event.target.value;
    setOptionNumber(chooseIndex);
  };
  useEffect(() => {
    if (data)
      setListColor(
        data
          .filter(
            (item) =>
              data[parseInt(optionNumber)]?.optionName === item?.optionName
          )
          .map((item) => item.color)
      );
  }, [data, optionNumber]);
  return (
    <>
      <RadioGroup value={optionNumber} onChange={handleChooseOption}>
        <div className="row body-product-detail-left__option__fisrt">
          {data.map((item, index) => (
            <div className="col-4 body-product-detail-left__option__fisrt__radio">
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio />}
                sx={[
                  optionNumber && {
                    border: "1px solid #cb1c22",
                  },
                  {
                    borderRadius: 2,
                    display: "flex",
                    textAlign: "center",
                    padding: "0 8px",
                  },
                ]}
                label={
                  <>
                    <div className="body-product-detail-left__option__fisrt__radio__name">
                      {item.optionName}
                    </div>
                    <div className="body-product-detail-left__option__fisrt__radio__price">
                      {formatCurrency(item.salePrice)}
                    </div>
                  </>
                }
                labelPlacement="top"
              />
            </div>
          ))}
        </div>
      </RadioGroup>
      {/* <RadioGroup>
        <div className="body-product-detail-left__option__second">
          {listColor.map((item, index) => (
            <FormControlLabel
              value={index}
              control={<Radio hidden />}
              sx={[
                false && {
                  borderColor: "#cb1c22",
                },
                {
                  borderRadius: 2,
                  display: "flex",
                  textAlign: "center",
                  padding: "4px 4px",
                  boxShadow: "0 0 3px 0",
                  border: "1px solid #fff",
                  margin: 0,
                  ":hover": {border: "1px solid #cb1c22"},
                },
              ]}
              label={
                <>
                  <img
                    src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/2/_/2_64_38.jpg"
                    alt="test"
                  />
                  <div>{item}</div>
                </>
              }
              labelPlacement="top"
            />
          ))}
        </div>
      </RadioGroup> */}
    </>
  );
}

export default CustomRadio;
