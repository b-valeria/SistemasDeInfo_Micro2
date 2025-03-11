import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { app } from "../firebase"
import { useNavigate } from "react-router"



const auth = getAuth(app)
export default function LoginForn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
            navigate('/')

        } catch (error) {
            setError(error.message)


        }




    }



    return (
        <div className='w-80 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 backdrop-blur-md border-2 rounded-2xl border-gray-200/50 flex items-center flex-col text-[#27034B]    '>

            {error && <p className='text-red-500'>{error}</p>}

            <h1 className='text-4xl mt-4 font-bold'>Login</h1>


            <form onSubmit={handleSubmit} className="flex items-center flex-col">



                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='border-b-2 border-[#27034B] mt-10 ' placeholder='Email' />

                <input type="text" className='border-b-2 border-[#27034B] mt-11 ' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />


                <button className='my-4 bg-purple-950 w-3/4 rounded-2xl text-white'>Login</button>
                <p>No tienes cuenta?  <span onClick={() => navigate('/register')} className='cursor-pointer text-blue-500'>Registrate</span></p>

            </form>




        </div>
    )
}
