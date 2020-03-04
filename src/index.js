import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Link } from 'react-router-dom'

let model ={
    running:false,
    time: 0
};

//let view =(model) => <div> {model.time} </div>;

let view = (m) => {
    let minutes = Math.floor(m.time / 60);
    let seconds = m.time - (minutes * 60);
    let secondsFormatted = `$ {seconds < 10 ? '0' : ' '} $ {seconds}`;
    let handler = (event) => {
        model = update (model, m.running ? 'STOP' : 'START');
    };

    return <div>
    <p> {minutes} : {secondsFormatted} </p>
     <button onClick = {handler}> {m.running ? 'Stop' : 'Start'} </button>
     </div>;
};

let intents= {
    TICK : 'TICK',
    START : 'START',
    STOP : 'STOP',
    RESET : 'RESET',
};

const update = (model, intent) => {
    const updates = {
        'START' : (model) => Object.assign (model, {running: true}),
        'STOP' : (model) => Object.assign (model, {running : false}),
        //'TICK' : (model) => Object.assign (model, {time: model.time + 1})
        'TICK' : (model) => Object.assign (model, {time: model.time + (model.running ? 1 : 0)})
    }; //add 1 if true else add 0
    return updates[intent] (model);
};

const render = () => {
    ReactDom.render (view (model),
        document.getElementById('root')
    );
   };
   render();

setInterval(() => {
    model = update(model ,'TICK');
    render();
    },1000);