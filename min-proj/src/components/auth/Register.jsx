import React,{useState} from "react";

export const Register=(props)=>{
    
 const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const registeru=(e)=>{
 e.preventdefault();
 
}
  return(
 <div className="auth-form-container">
        <h2>Register</h2>
 <form className="register-form"onSubmit={registeru}>
           
            <label htmlFor="email">Email id</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Enter your password" id="password" name="password"></input>
            <button type="submit">Register</button>
        </form>
        
  <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account, login here</button>
 </div>
  )
}