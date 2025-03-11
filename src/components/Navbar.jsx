import React,{use} from 'react'
import { Link } from 'react-router'
import {UserContext} from '../Context/UserContext'
import {getAuth,signOut} from 'firebase/auth';
import { app } from '../firebase';
const auth = getAuth(app)
export default function Navbar() {


    const cerrarSesion=async()=>{
        await signOut(auth)
    }
    const {user,logged}=use(UserContext)



    return (
        <nav>
            <ul className='flex justify-between px-32 mt-2  items-center text-2xl  text-[#27034b] '>
                <li><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ced3c35b122040f4ac92ba7f1b1e9a1a8bb6d" alt="Logo" className='w-24 h-auto' /></li>
                <li><Link to="/">Home</Link></li>
                <Link to='/destinos'>Destinos</Link>
                <li>Novedades</li>
                <li>Contacto </li>



              { !logged && <Link to="/login" className='border'>Login</Link>}
              { !logged && <Link to="/register" className='border'>Register</Link>}
              { logged &&   <p>  {user.email}</p> }

              { logged && <button onClick={cerrarSesion}>Cerrar Sesion</button>}



            </ul>


        </nav>
    )
}
