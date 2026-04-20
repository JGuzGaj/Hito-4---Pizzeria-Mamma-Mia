import { useState } from 'react'
import Home from './home.jsx'
import Footer from './footer.jsx'
import Navbar from './navbar.jsx'
import './App.css'
//import LoginPage from './LoginPage.jsx'
//import RegisterPage from './registerpage.jsx'
//import Cart from "./cart.jsx";
import Pizza from "./pizza.jsx";


function App() {
  return (
    <div className="layout-grid">
      <Navbar /> 
      <pizza /> 
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
      </div>
  );
}

export default App