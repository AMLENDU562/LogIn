import React from "react"
import axios from "axios"
import { useEffect,useState } from "react"
import { BrowserRouter,Router,Routes,Route,useNavigate } from 'react-router-dom'

function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    

    const handleClick=(e)=>{
        e.preventDefault();
        axios.post("/api/v1/login",{password,email}).then((result)=>{
        
            if(result.data==="success")
            navigate('/home');

            

           
        }).catch(e=>console.log(e));
    }
    return(
       <div className=" bg-[#9BB0C1] p-10 rounded-md">
        <h1 className=" m-11">LOG IN</h1>
        <form action="/api/v1/login" method="POST">
        <input onChange={(e)=>{
                setEmail(e.target.value)
            }} className=" block m-5 h-12 w-72 p-3 rounded-sm" type="email" id="email" name="email" placeholder="Enter Your Email"/>

            <input onChange={(e)=>{
                setPassword(e.target.value)
            }} className=" block m-5 h-12 w-72 p-3 rounded-sm" type="password" id="password" name="password" placeholder="Enter Your Password"/>
            <button className=" block m-5 h-12 w-36  cursor-pointer bg-slate-300 rounded-3xl position-relative text-center" onClick={handleClick} type="submit" value="Register Now">
            Log In
            </button>
        </form>
    </div>
    
    );
}

export default Login;