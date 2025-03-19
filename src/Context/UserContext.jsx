
import React, { createContext, useState,useEffect } from 'react';

import {onAuthStateChanged,getAuth} from 'firebase/auth';


import { app } from '../firebase';
const auth = getAuth(app)

export const UserContext = createContext(null);


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    
    useEffect(() => {


        const unsubscribe = onAuthStateChanged(auth, async (userConnected) => {
            if (userConnected) {
               

                try {
                    setUser(userConnected)
                    setLogged(true)



                } catch (error) {
                    console.log(error)
                    setUser({})
                    setLogged(false)
                }


            } else {
                setUser({})
       
                setLogged(false)
            }

        })


        return () => unsubscribe()








    }, [])





    return(<UserContext value={{user,setUser,logged}} > {children}  </UserContext>  )






}





