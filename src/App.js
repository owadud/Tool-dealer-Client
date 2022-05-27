import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/DashBoard/MyOrder';
import Review from './Pages/DashBoard/Review';
import MyProfile from './Pages/DashBoard/MyProfile';
import Customers from './Pages/DashBoard/Customers';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="/order/:id" element={
          <RequireAuth>
            <OrderPlace />
        </RequireAuth>
        }>
          
        </Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <DashBoard />
        </RequireAuth>
        }>
          <Route index element={<MyOrder/>}></Route>
          <Route path='profile' element={<MyProfile/>}></Route>
          <Route path='review' element={<Review/>}></Route>
          <Route path='customers' element={<RequireAdmin><Customers/></RequireAdmin>}></Route>
        </Route>
        

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
