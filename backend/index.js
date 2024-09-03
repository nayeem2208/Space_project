import express from 'express'
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRouter from "./routers/userRoutes.js";


dotenv.config()
const port = process.env.PORT || 3000;

connectDB();
const app = express();

app.use(cors())

app.use('/api',userRouter)

app.listen(port,()=>{
    console.log(`server started in port ${port}`)
})