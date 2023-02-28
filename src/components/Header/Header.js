import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="row border-bottom">
        <div className="col-12 ">
          <div className="d-flex justify-content-center p-4">
            <p className="fs-1 ff-lora fw-bolder">REACT BLOGS</p>
          </div>
        </div>
      </div>

      <div className="row p-2 border-bottom align-items-center">
        <div className="col-md-3 col-sm-12">
          <div className="d-flex justify-content-center">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <ul className="d-flex justify-content-between m-0 list-unstyled mt-sm-2 mt-md-0">
            <li className="ff-lora fw-bold fs-3 ">
              <Link to="/" className='text-decoration-none text-black'>Home</Link>
            </li>
            <li className="ff-lora fw-bold fs-3">
              <Link to="posts" className='text-decoration-none text-black'>Posts</Link>
            </li>
            <li className="ff-lora fw-bold fs-3">
              <Link to="contact" className='text-decoration-none text-black'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
