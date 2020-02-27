import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Frm()
{
    return <div>
        <input type="text" value="react"/><br/>
        <textarea value="react" /><br/>
        <select value="sunday">
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
        </select>
        </div>;
}
ReactDom.render(<Frm/>,
    document.getElementById('root')
);