import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function Nocheckbox() {
    return <input type = "checkbox" onClick = { (e) => { e.preventDefault();}}/>;
}
ReactDom.render(<Nocheckbox/>,
    document.getElementById('root')
);