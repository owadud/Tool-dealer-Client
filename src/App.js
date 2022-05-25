import './App.css';
import { ToastContainer} from 'react-toastify';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import ConfirmOrder from './Pages/OrderPlace/ConfirmOrder';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="blog" element={<Blog />} />
      <Route path="myportfolio" element={<MyPortfolio />} />
      <Route path="/order/:id" element={<OrderPlace/>}></Route>
      <Route path="/order/confirm" element={<ConfirmOrder/>}/>
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
