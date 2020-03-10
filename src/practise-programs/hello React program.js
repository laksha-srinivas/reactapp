import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

function Hello()
{
    return<div> Hello React! </div>
}

ReactDom.render(
    <Hello/>,
    document.getElementById('root')
);