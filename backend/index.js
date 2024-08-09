import express from 'express'
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";


const port = process.env.PORT || 3000;

const app = express();

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hiiii')
})

app.listen(port,()=>{
    console.log(`server started in port ${port}`)
})