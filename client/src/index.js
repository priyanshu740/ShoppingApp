import App from "./App";
import React from "react";
import  ReactDOM  from "react-dom";
import { Context } from "./context/context";

ReactDOM.render(
    <React.StrictMode>
        <Context>
        <App/>
        </Context>
    </React.StrictMode>,
    document.getElementById("root")
)