import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//import React{ Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

class Identity extends React.Component{
    constructor(){
        super();
        this.myDiv = React.createRef();
    }
    componentDidMount(){
        this.myDiv.current.innerHTML += "<br/> Set on the wrapped DOM element. <strong>Unsafe</strong>";
       }
     render() {
        return <div ref={this.myDiv}>{" Set in render <strong>Safe </strong> "}</div>;
     }
}

ReactDom.render(<Identity/>,
    document.getElementById('root')
);