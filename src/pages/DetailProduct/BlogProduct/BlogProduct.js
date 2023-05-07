import React, {useState} from "react";

function BlogContent({content}) {
  // const detailProduct = useSelector((state) => state.getProductById.product);
  const [showMoreBlog, setShowMoreBlog] = useState(false);
  const [styleBlog, setStyleBlog] = useState({
    height: "500px",
  });
  const detailProduct = {
    blog: "sd",
  };

  return (
    <section id="blog">
      {detailProduct.blog ? (
        <div className="blog">
          <div className="blog-content" style={styleBlog}>
            <div dangerouslySetInnerHTML={{__html: detailProduct.blog}} />

            {showMoreBlog === false ? (
              <div
                className="blog-showmore"
                onClick={() => {
                  setStyleBlog({height: "100%"});
                  setShowMoreBlog(!showMoreBlog);
                }}
              >
                Xem Thêm đánh giá
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default BlogContent;
