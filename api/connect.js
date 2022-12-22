import mysql from 'mysql'

//Connect MySQL DB
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Seeker94?!',
    database: 'social',
    insecureAuth: true
})
