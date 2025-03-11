import React, {useState} from 'react'
import {useNavigate} from 'react-router'
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from "../firebase"


export default function Register() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation_password, setConfirmationPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth(app)


    //funcion para enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault()
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password); 
        console.log(response);
        console.log(`Nombre: ${name}, Correo: ${email}, Clave: ${password}, Confirme su clave: ${confirmation_password}`);
        navigate('/');
    } catch (error) {
        setError(error.message);
        console.log(error);
    }
    }


return (


<div className='flex justify-center  mt-12 items-center'>
<div className='w-80 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 backdrop-blur-md border-2 rounded-2xl border-gray-200/50 flex items-center justify-center flex-col text-[#27034B]'>




        {error && <p className='text-red-500'>{error}</p>} {/* ERROR intente otra vez :( */}
        <h1 className='text-4xl mt-4 font-bold'>Registrarse</h1> {/* Register */}
        <form onSubmit={handleSubmit} className="flex items-center flex-col"> {/* Formulario */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className='border-b-2 border-[#27034B] mt-10'
                placeholder='Nombre'  
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className='border-b-2 border-[#27034B] mt-11'
                placeholder='Email' 
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className='border-b-2 border-[#27034B] mt-11'
                placeholder='Contraseña' 
            />

            <input
                type="confirmation_password"
                value={confirmation_password}
                onChange={(e) => setConfirmationPassword(e.target.value)} 
                className='border-b-2 border-[#27034B] mt-11'
                placeholder='Confirme su clave:' 
            />
            <button className='my-4 bg-purple-950 w-3/4 rounded-2xl text-white'>Registrarse</button> {/* Botón de registro */}
            </form>
        </div>

</div>




    )
}

