import React from "react";
import './App.css';
import Header from "./Header";

const App = () => {
    return(
        <>
            <Header/>
            <div style={{height:'100px', width:'100%', backgroundColor:'skyblue', textAlign:'center'}}>
            <h1>React Zom App</h1>
            <h2>final project</h2>
            </div>

            <div className="secondDiv">

            </div>
            
        </>
    )
}

export default App;