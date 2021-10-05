import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "./Login";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login/*" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
