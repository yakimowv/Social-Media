import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

import userRouter from './routes/users.js'
import postsRouter from './routes/posts.js'
import likesRouter from './routes/likes.js'
import commentsRouter from './routes/comments.js'
import authRouter from './routes/auth.js'

const app = express()

//Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(cookieParser());

//EVERY ROUTS
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postsRouter)
app.use('/api/likes', likesRouter)
app.use('/api/comments', commentsRouter)

//STARTING APP
app.listen(3333, () => {
    console.log('API IS START')
})