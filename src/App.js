// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Form from "./Form";
import Display from "./Display"
import{BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import React from "react";

function App() {
  
  const [user, setUser] = useState({});
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Form user={user} setUser={setUser}/>}/>
          <Route path="/display" element={<Display user={user}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
