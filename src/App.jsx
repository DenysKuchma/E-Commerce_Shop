import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import GamesPage from './screens/gamesPage';
import HomePage from './screens/homePage';
import LoginPage from './screens/loginPage';
import MetavercePage from './screens/metaversePage';
import ShopPage from './screens/shopPage';
import ErrorPage from './screens/errorPage';
import ContactUsPage from './screens/contactUsPage';
import CartPage from './screens/cartPage';


const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


function App() {
  return(
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='*' element={<ErrorPage />}/>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="games" element={<GamesPage />} /> 
          <Route path="metaverse" element={<MetavercePage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
  )
}

export default App;
