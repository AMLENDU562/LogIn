const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const port=3000||process.env.Port;
const path=require('path')
const mongoose=require('mongoose')
const route=express.Router();
const cors=require("cors")
mongoose.connect("mongodb://localhost:27017/login");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

const Login=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const log=mongoose.model("log",Login);


app.post("/v1/register",async(req,res)=>{
    log.create(req.body).then(l=>res.json(l)).catch((e)=>console.log(e));
    
});





app.post('/v1/login',async (req,res)=>{
    const {email,password}=req.body;

    log.findOne({email:email}).then((response)=>{

        if(response)
        {
            if(response.password==password)
            {
                res.json("success")
            }

            else
            res.json("Wrong Crendentials!!");
        }

        else
        res.json("Wrong Credentials");
    }).catch((e)=>console.log(e));
    

    
})







app.listen(port,()=>{
    console.log("Server is listening at ",port);
})