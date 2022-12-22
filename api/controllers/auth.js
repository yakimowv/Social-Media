import { db } from '../connect.js'
import bcrypt from 'bcryptjs'

//REGISTER CALL
export const register = (req, res) => {

    const q = 'SELECT * FROM users WHERE username = ?'
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json('User already exists!')

        //CREATE A NEW USER
        // Hash password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = 'INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)'

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
        //CREATE USER
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json('User is created.')
        })
    })

}

//LOGIN CALL
export const login = (req, res) => {
    res.send('ok')
}

//LOGOUT CALL
export const logout = (req, res) => {
    res.send('ok')
}
