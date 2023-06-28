import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react"

export default function Header(props) {
    console.log('parameter:', props.amount)
    return(
        <div style={{'text-align': 'center'}}>
            Total Amount: {props.amount}
        </div>
    );
}