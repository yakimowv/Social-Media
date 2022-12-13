import React from 'react'
import { useContext } from 'react'
import{Navigate} from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function ProtectRoute ({children}) {
    const {currentUser} =useContext(AuthContext)
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    return children
}