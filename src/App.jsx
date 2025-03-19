import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import HomeLayout from "./components/HomeLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Destinos from "./components/Destinos";
import DestinationDetail from './components/DestinationDetail'
<<<<<<< HEAD
import Novedades from './Pages/Novedades';

import SabasNieves from './Pages/DestinosDetalles/SabasNieves';
import Lagunazo from './Pages/DestinosDetalles/Lagunazo';
import ElBanquito from './Pages/DestinosDetalles/ElBanquito';
import PicoNaiguata from './Pages/DestinosDetalles/PicoNaiguata';
import PiedraIndio from './Pages/DestinosDetalles/PiedraIndio';
import PicoOriental from './Pages/DestinosDetalles/PicoOriental';
=======
<<<<<<< HEAD
import PaginReserva from "./components/PaginReserv"
=======
import Novedades from './Pages/Novedades';
>>>>>>> f376a7daea2cbb23918b2827c888374e26bf4fd6
>>>>>>> 639656033b863ed7ed0a5e70a72598ed6ad06146


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route element={<HomeLayout />}>


          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path='/destinos/:destino' element={<DestinationDetail/>} />
<<<<<<< HEAD
          <Route path="/novedades" element={<Novedades />} /> 

          <Route path="/SabasNieves" element={<SabasNieves />} />
          <Route path="/Lagunazo" element={<Lagunazo />} />
          <Route path="/ElBanquito" element={<ElBanquito />} />
          <Route path="/PicoNaiguata" element={<PicoNaiguata />} />
          <Route path="/PiedraIndio" element={<PiedraIndio />} />
          <Route path="/PicoOriental" element={<PicoOriental />} />

=======
<<<<<<< HEAD
          <Route path='/destinos/:destino/reservar' element={<PaginReserva/>} />
=======
          <Route path="/novedades" element={<Novedades />} /> 
>>>>>>> f376a7daea2cbb23918b2827c888374e26bf4fd6
>>>>>>> 639656033b863ed7ed0a5e70a72598ed6ad06146
        </Route>







      </Routes>

    </BrowserRouter>
  )
}

export default App
