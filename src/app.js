import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
})) //use method use for middleware configure
app.use(express.json({limit:"16kb"}));//json accept kar raha h with limit ke sath ki hmko itahi json request lena h
app.use(express.urlencoded({extended: true,limit:"16kb"}))//for url configure
app.use(express.static("public"))//file photo koe bhi access kar le
app.use(cookieParser())



///routes
import userRouter from './routes/user.routes.js'
//routes declaration
app.use("/api/v1/user",userRouter)

export default app;
