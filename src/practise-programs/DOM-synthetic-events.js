import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Events(props){
    const clickHandler=(synthEvent) => { console.log(synthEvent) };
    // Or below line can be used
    //const clickHandler = console.log;
    return ( <button onClick = { clickHandler }> Make an Event </button> );
}
ReactDom.render(<Events/>,
    document.getElementById('root')
 );

