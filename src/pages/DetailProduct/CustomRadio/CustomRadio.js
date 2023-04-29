import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {formatCurrency} from "../../../util/formatCurency";
import {useState} from "react";
import "../DetailProduct.scss";
function CustomRadio({type}) {
  const [check, setChecked] = useState(true);
  return (
    <>
      {type == 1 && (
        <RadioGroup>
          <div className="row body-product-detail-left__option__fisrt">
            <div className="col-4 body-product-detail-left__option__fisrt__radio">
              <FormControlLabel
                value="female"
                control={<Radio />}
                sx={[
                  check && {
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
                      Ryzen 7 4800H 16GB - 512GB <br /> RTX 3060
                    </div>
                    <div className="body-product-detail-left__option__fisrt__radio__price">
                      {formatCurrency(27990000)}
                    </div>
                  </>
                }
                labelPlacement="top"
              />
            </div>
          </div>
        </RadioGroup>
      )}

      {type == 2 && (
        <RadioGroup>
          <div className="body-product-detail-left__option__second">
            <FormControlLabel
              value="female"
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
                  <div>Đen</div>
                </>
              }
              labelPlacement="top"
            />
          </div>
        </RadioGroup>
      )}
    </>
  );
}

export default CustomRadio;
