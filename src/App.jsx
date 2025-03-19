import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import HomeLayout from "./components/HomeLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Destinos from "./components/Destinos";
import DestinationDetail from './components/DestinationDetail'
<<<<<<< HEAD
import PaginReserva from "./components/PaginReserv"
=======
import Novedades from './Pages/Novedades';
>>>>>>> f376a7daea2cbb23918b2827c888374e26bf4fd6


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
          <Route path='/destinos/:destino/reservar' element={<PaginReserva/>} />
=======
          <Route path="/novedades" element={<Novedades />} /> 
>>>>>>> f376a7daea2cbb23918b2827c888374e26bf4fd6
        </Route>







      </Routes>

    </BrowserRouter>
  )
}

export default App
