import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import HomeLayout from "./components/HomeLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Destinos from "./components/Destinos";
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
          <Route path="/Administrador" element={<AdminDashboard />} />

        </Route>







      </Routes>

    </BrowserRouter>
  )
}

export default App
