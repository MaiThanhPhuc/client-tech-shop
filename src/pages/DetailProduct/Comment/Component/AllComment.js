import React, {useState} from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import {useParams} from "react-router-dom";
import AllRepComment from "./AllRepComment";
import {Grid} from "@mui/material";
import {getFirstCharacter} from "../../../../util/getFirstCharacter";

function AllComment(props) {
  const {id} = useParams();
  const {allComment} = props;
  const [repCmt, setRepCmt] = useState({key: "", status: false});
  // const {userInfo} = useSelector((state) => state.userSignin);

  const userInfo = {
    isAdmin: true,
  };
  const [repValue, setRepValue] = useState("");
  const showRepComment = (id) => {
    setRepCmt({key: id, status: !repCmt.status});
  };

  const handleRepComment = (value) => {
    if (userInfo) {
      // const comment = {
      //   idComment: repCmt.key,
      //   isAdmin: userInfo.isAdmin,
      //   content: repValue,
      //   nameUser: userInfo.name,
      // };
      // dispatch(repCommentProduct(id, comment));
      setRepValue("");
      setRepCmt({key: "", status: false});
    } else alert("Đăng nhập đi bạn eiii");
  };

  const PinComment = (comment) => {
    const UpdateComment = {...comment, status: "pin"};
    // dispatch(pinCommentProduct(id, UpdateComment));
  };

  return (
    <div class="all-comment">
      {allComment.map((comment) => (
        <>
          <Grid style={{marginTop: "1rem"}} xs={12} sm={12} md={10}>
            <div className="all-comment-info">
              <div style={{display: "flex"}}>
                {comment.isAdmin ? (
                  <div className="all-comment-info-name admin">
                    <img src="https://cellphones.com.vn/skin/frontend/default/cpsdesktop/images/media/logo.png"></img>
                  </div>
                ) : (
                  <div className="all-comment-info-name">
                    {getFirstCharacter(comment.author)}
                  </div>
                )}
                {comment.isAdmin ? (
                  <strong>
                    Quản trị viên <span>QTV</span>
                  </strong>
                ) : (
                  <strong>{comment.author}</strong>
                )}
              </div>

              {userInfo.isAdmin ? (
                <div className="comment-status">
                  <div
                    className="comment-status-pin"
                    onClick={() => PinComment(comment)}
                  >
                    {comment.status === "pin" ? (
                      <LockOutlinedIcon></LockOutlinedIcon>
                    ) : (
                      <PushPinOutlinedIcon></PushPinOutlinedIcon>
                    )}
                  </div>
                </div>
              ) : (
                <div className="comment-status">
                  <div className="comment-status-pin">
                    {comment.status === "pin" ? (
                      <PushPinOutlinedIcon></PushPinOutlinedIcon>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="all-comment-content">{comment.content}</div>
            <div className="all-comment-more">
              <a
                className="all-comment-more-chat"
                onClick={() => showRepComment(comment._id)}
              >
                <p>Trả lời</p>
              </a>
            </div>
            {comment.replies.length > 0 ? (
              <AllRepComment
                allrepcomment={comment.replies}
                showRepComment={showRepComment}
                id={comment._id}
              ></AllRepComment>
            ) : (
              ""
            )}
          </Grid>
          {repCmt.status === true && repCmt.key === comment._id ? (
            <Grid
              span={18}
              xs={24}
              md={18}
              align="start"
              style={{
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                className="comment-area"
                style={{display: "flex", alignItems: "center"}}
              >
                <textarea
                  placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 1h từ 8h - 22h mỗi ngày."
                  rows={10}
                  cols={3}
                  vaule={repValue}
                  onChange={(e) => setRepValue(e.target.value)}
                ></textarea>
                <div className="comment-send">
                  <button onClick={() => handleRepComment()}>Gửi</button>
                </div>
              </div>
            </Grid>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}

export default AllComment;
