import Catalog from '../../pages/catalog/Catalog';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Cart from '../../pages/Cart';
import Layout from '../layout/Layout';
import Profile from '../../pages/profile/Profile';
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';
import EditProfile from '../../pages/profile/EditProfile';
import UserProfile from '../../pages/profile/User';
// import DetailItem from '../../pages/DetailItem';


function Routing() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        {/* <Route path="catalog/:id" element={<DetailItem />} /> */}
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routing;
