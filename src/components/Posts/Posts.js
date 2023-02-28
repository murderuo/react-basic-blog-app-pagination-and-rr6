import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../context/postContext';

function Posts() {
  const { posts } = useContext(PostContext);

  const initialState = {
    postLenght: 0,
    loading: true,
    currentPage: 1,
    postPerPage: 10,
    pageNumber: 1,
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    setData({ ...initialState, postLenght: posts?.length });
  }, [posts]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.postLenght / data?.postPerPage); i++) {
    pageNumbers?.push(i);
  }

  const lastPostIndex = data.currentPage * data.postPerPage;
  const firstPostIndex = lastPostIndex - data.postPerPage;
  // const currentPosts = data.posts.slice(firstPostIndex, lastPostIndex);

  const slicedPosts = posts?.slice(firstPostIndex, lastPostIndex)?.map(post => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const date = new Date(timestamp).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    return { ...post, date };
  });

  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="d-flex flex-column m-0 mt-sm-2 mt-md-0 ">
            {slicedPosts?.map(post => (
              <div className="m-3 border-bottom" key={post?.id}>
                <div className="img"></div>
                <div className="context">
                  <div className=" ff-lora fw-bold fs-3 mb-3">
                    <Link to={`${post.id}`} state={{ ...post }}>
                      {post?.title}
                    </Link>
                  </div>
                  <div className=" ff-lora fw-light fs-4 mb-3">{post?.body}</div>
                  <div className="ff-lora fw-light fs-5 mb-2">{post?.date}</div>
                </div>
              </div>
            ))}
          </div>
          <nav className=" d-flex justify-content-center ">
            <ul className="d-flex align-items-center">
              <button
                className={data?.currentPage === 1 ? 'noclick btn btn-sm' : 'btn btn-sm'}
                onClick={() => setData({ ...data, currentPage: data.currentPage - 1 })}
                disabled={data.currentPage === 1}
              >
                &laquo;
              </button>

              {pageNumbers?.map(page => (
                <button
                  key={page}
                  className={page === data.currentPage ? `pagination-item btn btn-sm bg-primary text-white` : `pagination-item btn btn-sm`}
                  onClick={() => setData({ ...data, currentPage: page })}
                >
                  {page}
                </button>
              ))}

              <button
                className={data?.currentPage === pageNumbers?.slice(-1)[0] ? 'noclick btn btn-sm' : 'btn btn-sm'}
                onClick={() => setData({ ...data, currentPage: data.currentPage + 1 })}
                disabled={pageNumbers.length === data.currentPage}
              >
                &raquo;
              </button>
              <select
                name="pagesize"
                value={data.postPerPage}
                onChange={e => {
                  setData({ ...data, postPerPage: e.target.value, currentPage: 1 });
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </ul>
          </nav>
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
}

export default Posts;
