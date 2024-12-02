const express=require('express');
const bodyParser=require('body-parser');
const Router=require('./Routes/userRoutes')
const db=require('./db')
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',Router);


const port=process.env.PORT || 3002;

app.listen(port,()=>{
    console.log("app is listening on port",port);
})