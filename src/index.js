import React from "react";
import ReactDOM from 'react-dom'
import Registration from "./component/Registration";
import './main.css'


function App(){
    return(
        <div className="main-container">
            <Registration/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))