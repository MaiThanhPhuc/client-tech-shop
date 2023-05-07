import React, {useState} from "react";
import {Rating, Divider, Grid, LinearProgress} from "@mui/material";
import {useParams} from "react-router-dom";
import StarOutlined from "@mui/icons-material/StarOutlined";
import "../DetailProduct.scss";

function RatingProduct() {
  const {id} = useParams();

  const [star, setStar] = useState(0);
  const [showRate, setShowRate] = useState(false);
  const [showEvaluate, setShowEvalute] = useState(false);
  const [evaluate, setEvaluate] = useState("");
  const product = {
    name: "test name pod",
    reviews: [
      {
        name: "test",
        star: 2,
        comment: "Testadwdawdw",
      },
      {
        name: "test",
        star: 5,
        comment: "Testadwdawdw",
      },
    ],
  };

  const countReview = product.reviews.length;
  let averageRate = Math.round(
    product.reviews.reduce((a, c) => a + c.star, 0) / countReview
  );

  const userInfo = {
    name: "test",
  };

  if (userInfo) {
    var existsUser = product.reviews.find((x) => x.name === userInfo.name);
  }

  const fiveStar = Math.round(
    (product.reviews.filter((x) => x.star === 5).length / countReview) * 100
  );
  const fourStar = Math.round(
    (product.reviews.filter((x) => x.star === 4).length / countReview) * 100
  );
  const threeStar = Math.round(
    (product.reviews.filter((x) => x.star === 3).length / countReview) * 100
  );
  const twoStar = Math.round(
    (product.reviews.filter((x) => x.star === 2).length / countReview) * 100
  );
  const oneStar = Math.round(
    (product.reviews.filter((x) => x.star === 1).length / countReview) * 100
  );

  const onFinish = (value) => {
    // const review = {
    //   name: userInfo.name,
    //   star: star,
    //   comment: evaluate,
    // };
    // dispatch(reviewProduct(id, review));
    setEvaluate("");
    setShowEvalute(false);
    setShowRate(false);
  };
  const setRate = (event) => {
    setStar(event.target.value);
    setShowEvalute(true);
  };
  return (
    <>
      <div className="box-rate">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} style={{minWidth: "100%"}}>
            <span className="rate-star-title">
              Đánh giá sản phẩm {product.name}
            </span>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="rate">
              <div className="rate-info">
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      className="star-average"
                      style={{fontSize: "18px", fontWeight: "600"}}
                    >
                      Đánh giá trung bình
                    </p>
                    <p
                      className="star-average-num"
                      style={{
                        marginBottom: 0,
                        fontSize: "30px",
                      }}
                    >
                      {`${averageRate} / 5`}
                      <StarOutlined
                        style={{
                          fontSize: "23px",
                          color: "orange",
                          fontWeight: "bolder",
                          paddingBottom: "3px",
                        }}
                      ></StarOutlined>
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <li className="rate-number">
                      <div className="numstar">
                        5
                        <StarOutlined
                          style={{color: "orange", margin: "0 5px"}}
                        ></StarOutlined>
                      </div>
                      <p className="percent" style={{display: "flex"}}>
                        <LinearProgress
                          status="active"
                          variant="determinate"
                          value={fiveStar}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "15px",
                          }}
                        />
                      </p>
                    </li>
                    <li className="rate-number">
                      <div className="numstar">
                        4
                        <StarOutlined
                          style={{color: "orange", margin: "0 5px"}}
                        ></StarOutlined>
                      </div>
                      <p className="percent" style={{display: "flex"}}>
                        <LinearProgress
                          variant="determinate"
                          value={fourStar}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "15px",
                          }}
                        />
                      </p>
                    </li>
                    <li className="rate-number">
                      <div className="numstar">
                        3{" "}
                        <StarOutlined
                          style={{color: "orange", margin: "0 5px"}}
                        ></StarOutlined>
                      </div>
                      <p className="percent" style={{display: "flex"}}>
                        <LinearProgress
                          variant="determinate"
                          value={threeStar}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "15px",
                          }}
                        />
                      </p>
                    </li>
                    <li className="rate-number">
                      <div className="numstar">
                        2{" "}
                        <StarOutlined
                          style={{color: "orange", margin: "0 5px"}}
                        ></StarOutlined>
                      </div>
                      <p className="percent" style={{display: "flex"}}>
                        <LinearProgress
                          variant="determinate"
                          value={twoStar}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "15px",
                          }}
                        />
                      </p>
                    </li>
                    <li className="rate-number">
                      <div className="numstar">
                        1{" "}
                        <StarOutlined
                          style={{color: "orange", margin: "0 5px"}}
                        ></StarOutlined>
                      </div>
                      <p className="percent" style={{display: "flex"}}>
                        <LinearProgress
                          variant="determinate"
                          value={oneStar}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "15px",
                          }}
                        />
                      </p>
                    </li>
                  </Grid>
                  {existsUser && (
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        className="send-rate"
                        onClick={() => {
                          userInfo
                            ? setShowRate(true)
                            : alert("Đăng nhập đi bạn eii");
                        }}
                      >
                        Gửi đánh giá
                      </button>
                    </Grid>
                  )}
                </Grid>
              </div>
              <Grid xs={12}>
                {showRate && (
                  <div
                    className="rate-star"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      padding: "1rem 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    Vui lòng chọn đánh giá: <Rating onChange={setRate} />
                  </div>
                )}
                {showEvaluate ? (
                  <div className="rate-send">
                    <p>Đánh giá: </p>
                    <textarea
                      placeholder="Vui lòng đánh giá sản phẩm ở đây"
                      onChange={(e) => setEvaluate(e.target.value)}
                    ></textarea>
                    <button className="send-rate" onClick={() => onFinish()}>
                      Gửi
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid container style={{marginTop: "1rem"}}>
          {product.reviews.length > 0
            ? product.reviews.map((item, index) => (
                <Grid key={index} item align="start" xs={8} sm={12} md={8}>
                  <div className="rating-item">
                    <p
                      className="name"
                      style={{fontWeight: "bold", fontSize: "15px"}}
                    >
                      {item.name}
                    </p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                      <div className="rate-body-item">
                        Đánh giá: <Rating value={item.star} readOnly />{" "}
                      </div>
                      <div className="rate-body-item">
                        <div>Nhận xét:</div>
                        <p>
                          {item.comment}
                          loreaaaaaaaaaaaaaaaaaaaa
                        </p>
                      </div>
                    </div>
                    <Divider></Divider>
                  </div>
                </Grid>
              ))
            : "Hiện chưa có nhận xét nào. Hãy là người nhận xét đầu tiên"}
        </Grid>
      </div>
    </>
  );
}

export default RatingProduct;
