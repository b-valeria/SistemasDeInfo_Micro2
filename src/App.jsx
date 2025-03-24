import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import HomeLayout from "./components/HomeLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Destinos from "./components/Destinos";
import DestinationDetail from './components/DestinationDetail'
import Novedades from './Pages/Novedades';
import Contacto from './Pages/Contacto';

/*import SabasNieves from './Pages/DestinosDetalles/SabasNieves';
import Lagunazo from './Pages/DestinosDetalles/Lagunazo';
import ElBanquito from './Pages/DestinosDetalles/ElBanquito';
import PicoNaiguata from './Pages/DestinosDetalles/PicoNaiguata';
import PiedraIndio from './Pages/DestinosDetalles/PiedraIndio';
import PicoOriental from './Pages/DestinosDetalles/PicoOriental';
*/

import PaginReserva from "./components/PaginReserv"
import AdminDashboard from "./components/Administracion/AdminDashboard";

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
          <Route path="/novedades" element={<Novedades />} /> 
          <Route path="/contacto" element={<Contacto />} />




          <Route path='/destinos/:destino/reservar' element={<PaginReserva/>} />
        



          <Route path="/Administrador" element={<AdminDashboard />} />
        </Route>







      </Routes>

    </BrowserRouter>
  )
}

export default App
