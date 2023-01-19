import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const logout = async ()=>{
       await axios.post('http://localhost:3333/api/auth/logout')
       setCurrentUser(null)
    }
    useEffect(() => {
        localStorage.removeItem("user",null)
    }, [currentUser])

    
    const login = async (inputs) => {
        const res = await axios.post('http://localhost:3333/api/auth/login', inputs,{
            withCredentials:true
        })
        setCurrentUser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [login])

   
   

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )
}
