import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Register} from './components/auth/Register';
import {Login} from './components/auth/Login';

function App() {
  const[currentform,setCurrentform]=useState('login');

  const toggleform =(formName)=>{
    setCurrentform(formName);
  }
  return (
    <div className="App">{
      currentform ==="login" ? <Login  onFormSwitch={toggleform}/>: <Register onFormSwitch={toggleform}/>
    }
    </div>
  );
}

export default App;
