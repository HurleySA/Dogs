import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";

import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalStyle } from "./styles/global";
import { UserStorage } from "./userContext";
import { User } from "./components/User";



function App() {
  return (
    <BrowserRouter>
      <UserStorage> 
        <GlobalStyle/>
        <Header/>
        <Routes> 

            <Route path="/" element={<Home/>} />
            <Route path="/login/*" element={<Login/>} />
            <Route path="/conta/*" element={<User/> } />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
        <ToastContainer autoClose={2000} /> 
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
