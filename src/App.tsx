import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyle } from "./styles/global";
import { UserStorage } from "./userContext";
function App() {
  return (
    <BrowserRouter>
      <UserStorage> 
        <GlobalStyle/>
        <Header/>
        <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/login/*" element={<Login/>} />
        </Routes>
        <ToastContainer autoClose={2000} /> 
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
