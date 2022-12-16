const express =require('express')
const userRouter = require('./routes/users')
const cors = require("cors");



const app = express()


app.use(cors());
app.use(express.json());


app.listen(3333, () => {
    console.log('API IS START')
})