import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import Cart from "./Components/Cart/Cart";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Cart />, document.getElementById("CartRoot"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
