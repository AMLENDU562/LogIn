import React from "react"
import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'

function Register()
{

    const navigate=useNavigate();

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

   

    const handleClick=(e)=>{
        e.preventDefault();
        axios.post("/api/v1/register",{name,password,email}).then(result=>{
            navigate('/login');
           }).catch(e=>console.log(e))
    }

    return(
    <div className=" bg-[#9BB0C1] p-10 rounded-md">
    <h1 className=" m-11">Register</h1>
        <form >
            <input onChange={(e)=>{
                setName(e.target.value)
            }} className=" block m-5 h-12 w-72 p-3 rounded-sm" type="text" id="name" name="name" placeholder="Enter Your Name"/>

            <input onChange={(e)=>{
                setEmail(e.target.value)
            }} className=" block m-5 h-12 w-72 p-3 rounded-sm" type="email" id="email" name="email" placeholder="Enter Your Email"/>

            <input onChange={(e)=>{
                setPassword(e.target.value)
            }} className=" block m-5 h-12 w-72 p-3 rounded-sm" type="password" id="password" name="password" placeholder="Enter Your Password"/>

            <button className=" block m-5 h-12 w-36  cursor-pointer bg-slate-300 rounded-3xl position-relative text-center" onClick={handleClick} type="submit">
            Register Now
            </button>
        </form>
    </div>
    );
}

export default Register;