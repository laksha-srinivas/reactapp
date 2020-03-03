import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//import React{ Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

let model ={
    running:false,
    time: 0
};

let view =(model) => <div> {model.time} </div>;

let intents= {
    TICK : 'TICK',
    START : 'START',
    STOP : 'STOP',
    RESET : 'RESET',
};

ReactDom.render (view(model)),
    document.getElementById('root'
    );

let view = (model) => {
    let minutes = Math.floor(model.time / 60);
    
}