import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//import PropTypes from 'prop-types';
//import * as serviceWorker from './serviceWorker';

function Clicker({handleClick}){
    return <div>
        <button onClick = { (e) => {handleClick('A');}}>A</button>
        <button onClick = { (e) => {handleClick('B');}}>B</button>
        <button onClick = { (e) => {handleClick('C');}}>C</button>
        </div>;
}
ReactDom.render(<Clicker handleClick = {(letter) => {console.log(`${letter} clicked`);}}/>,
document.getElementById('root')
);
