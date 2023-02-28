import { Route, Routes } from 'react-router-dom';
import Contacts from '../Contacts/';
import Home from '../Home/';
import MainLayout from '../Layouts/MainLayout';
// import Home from '../Home';
import Posts from '../Posts';
import PostsDetails from '../PostsDetails/PostDetails';

function MainRoutes() {
  return (
    <Routes>
      <Route to="/" element={<MainLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostsDetails />} />
        <Route path="contact" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
