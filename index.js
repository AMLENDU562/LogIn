const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const port=3000||process.env.Port;
const path=require('path')
const mongoose=require('mongoose')
const route=express.Router();

mongoose.connect("mongodb://localhost:27017/login");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname+"/src/index.html"));
});

const Login=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const log=mongoose.model("log",Login);


app.post('/login',async (req,res)=>{
    const {name,email,password}=req.body;

    const newLog=await log.create({
        name:name,
        email:email,
        password:password
    })

    console.log(newLog)
    
    res.sendFile(path.join(__dirname+"/src/login.html"));
})

app.post('/home',async (req,res)=>{
const {email,password}=req.body;



 log.exists({email:email,password:password}).then(async (result)=>
 {
    if(result===null){
        res.send("Wrong Credentials!!Try again");
    }

    else{
        
        const check=await log.find({email:email});
        
        res.send("<h1>Welcome to our website "+email+"</h1>");
        
    }
 });


});





app.listen(port,()=>{
    console.log("Server is listening at ",port);
})