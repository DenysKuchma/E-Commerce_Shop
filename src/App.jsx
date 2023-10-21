import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './screens/homePage';
import LoginPage from './screens/loginPage';



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
        <Route path="/" element={<Layout />} errorElement={<div>hey</div>}>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<div>hey</div>} />
          <Route path="games" element={<div>hay</div>} /> 
          <Route path="metaverse" element={<div>yi</div>} />
          <Route path="contact-us" element={<div>hey</div>} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
  )
}

export default App;
