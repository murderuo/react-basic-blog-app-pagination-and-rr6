import { Outlet, useLocation } from 'react-router-dom';

function PostsDetails() {
  const { state: post } = useLocation();
  // console.log(state);

  return (
    <>
      <div className="m-3 border-bottom">
        <div className="img"></div>
        <div className="context">
          <div className=" ff-lora fw-bold fs-3 mb-3">{post?.title} </div>
          <div className=" ff-lora fw-light fs-4 mb-3">
            {post?.body} <br />
            <br />
            {post?.body} <br />
            <br />
            {post?.body} <br />
            <br />
            {post?.body}
          </div>
          <div className="ff-lora fw-light fs-5 mb-2">{post?.date}</div>
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default PostsDetails;
