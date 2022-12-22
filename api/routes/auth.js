import express from 'express'
import { register, login, logout } from '../controllers/auth.js'

const router = express.Router()

//REGISTER
router.post('/register',register)

//Login
router.post('/login',login)

//Logout
router.post('/logout',logout)

export default router