import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AllComment from "./Component/AllComment";

function Comment() {
  const {id} = useParams();
  // const dispatch = useDispatch()
  const [value, setValue] = useState("");
  // const allComment = useSelector(state => state.getProductById.product.comments)
  // const {userInfo} = useSelector(state => state.userSignin)

  const Comment = () => {
    // if(userInfo){
    //   const comment = {
    //     author: userInfo.name,
    //     isAdmin: userInfo.isAdmin,
    //     content: value,
    //     byUser: userInfo._id,
    //   }
    //   dispatch(commentProduct(id, comment))
    //   setValue('')
    // }
    // else alert('Đăng nhập đi bạn êiiiii')
  };

  const allComment = [
    {
      idComment: "123",
      isAdmin: false,
      content: "test",
      nameUser: "abc",
      author: "asd",
      status: "none",
      replies: [
        {
          idComment: "123",
          isAdmin: true,
          content: "test",
          nameUser: "abc",
          author: "asd",
          status: "none",
        },
      ],
    },
  ];

  useEffect(() => {
    // dispatch(getproductById(id))
  }, []);

  return (
    <div className="comment">
      <div className="comment-title">Hỏi và đáp</div>
      <Grid
        align="start"
        style={{alignItems: "center"}}
        xs={12}
        sm={12}
        md={10}
      >
        <div className="comment-area" style={{display: "flex"}}>
          <textarea
            placeholder="Xin mời để lại câu hỏi, Shop sẽ trả lời trong 1h từ 8h - 22h mỗi ngày."
            rows={10}
            cols={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <div className="comment-send">
            <button onClick={() => Comment()}>Gửi</button>
          </div>
        </div>
      </Grid>

      <AllComment allComment={allComment}></AllComment>
    </div>
  );
}

export default Comment;
