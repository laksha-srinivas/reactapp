import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Identity extends React.Component {
render(){
    return(
        <form>
            <input type= "text" name="firstName" value="" placeholder="First Name" />
            <input type= "text" name="lastName" value="" placeholder="lastName" />
         </form>
        );
}
}

ReactDom.render(<Identity/>,
    document.getElementById('root')
);