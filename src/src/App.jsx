import React from "react";
import NasaPhoto from "./components/NasaPhoto";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <NavBar/>
        <NasaPhoto />    
        </div>   
  );
}
