import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import _ from 'lodash';
//import PropTypes from 'prop-types';
//import * as serviceWorker from './serviceWorker';
//import React{ Component } from 'react'

function ClickyButtons({numberOfButtons, onSelection})
{
    const makeButton = v => <button key = {v} id={v} onClick={event =>
    onSelection(event.target.id)}> {v} </button>;
    return <div>
        { _.range(1, numberOfButtons + 1).map(makeButton)}
        </div>;
 }
ReactDom.render(<ClickyButtons numberOfButtons ={99} onSelection = {console.log}/>,
document.getElementById('root')
);