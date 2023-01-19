import express from "express";
import cors from 'cors'
import multer from 'multer'
import cookieParser from "cookie-parser";

import userRouter from './routes/users.js'
import postsRouter from './routes/posts.js'
import likesRouter from './routes/likes.js'
import commentsRouter from './routes/comments.js'
import authRouter from './routes/auth.js'
import relRouter from './routes/relationship.js'

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post('/api/upload',upload.single('file'), (req,res) =>{
    const file = req.file
    res.status(200).json(file.filename)
  })

//EVERY ROUTS
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postsRouter)
app.use('/api/likes', likesRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/relation', relRouter) 

//STARTING APP
app.listen(3333, () => {
    console.log('API IS START')
})