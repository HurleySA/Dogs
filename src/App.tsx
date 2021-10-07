import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "./Login";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/*" element={<Login/>} />
      </Routes>
      <ToastContainer autoClose={2000} />
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
