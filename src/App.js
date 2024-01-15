import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import SignInButton from './components/SignInButton';
import ApiCall from "./components/ApiCall";
import AddObject from "./components/AddObject";
import LoginInButton from "./components/LoginInButton";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddUserApi from "./components/AddUserApi";
import UserButton from "./components/UserButton";




const App = () => {

  
  return (
    <div className="App-header">
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <h1 style={{fontWeight:"bolder"}} >Welcome To Auto Sales</h1>
      
      <div className="button">
        
        <SignInButton /> 
        <LoginInButton/>
       
      </div>

      <ProductsList />
      <ApiCall />
      <AddObject />
      <UserButton/>
     
      
      
     
    </div>
  )

}

export default App;