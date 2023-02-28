import { useContext, useEffect, useState } from 'react';
import PostContext from '../context/postContext';

function Home() {
  const { posts } = useContext(PostContext);
  const slicedPosts = posts?.slice(0, 7)?.map(post => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const date = new Date(timestamp).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    return { ...post, date };
  });

  useEffect(() => {
    // console.log('posts', posts);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <ul className="d-flex flex-column m-0 list-unstyled mt-sm-2 mt-md-0 ">
            {slicedPosts?.map(post => (
              <>
                <div className="m-3 border-bottom">
                  <div className="img"></div>
                  <div className="context">
                    <div className=" ff-lora fw-bold fs-3 mb-3">{post?.title}</div>
                    <div className=" ff-lora fw-light fs-4 mb-3">{post?.body}</div>
                    <div className="ff-lora fw-light fs-5 mb-2">{post?.date}</div>
                  </div>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
