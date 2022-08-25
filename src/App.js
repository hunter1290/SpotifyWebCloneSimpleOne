import React,{useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  
  //run code based on a condition
  useEffect(() => {
    const token =getTokenFromUrl();
    console.log("i have a token",token);
  }, []);

  return (


    <div className="App">
   
    <Login /> 
    
    
    </div>

  );
}

export default App;