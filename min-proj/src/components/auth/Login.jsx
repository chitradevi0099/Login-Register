import React,{useState} from "react";

export const Login =(props)=>{

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const loginu=(e)=>{
    e.preventdefault();
  console.log(email);
}
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={loginu}>
            <label htmlFor="email">Email id</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Enter your password" id="password" name="password"></input>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('register')}> Dont have an account ? Register here </button>
        </div>
       
    )
}