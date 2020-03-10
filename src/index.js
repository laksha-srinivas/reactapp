import React, {useState} from 'react';
import ReactDom from 'react-dom';


/*function counterIncrement(){
    console.log(Math.random());
}*/
function Button()
{
    const [counter, setCounter] = useState(5);
    return<button onClick= { () => console.log(setCounter(counter+counter))} > {counter} </button>;
    //return<button onClick= {counterIncrement}> {counter} </button>;
 }

ReactDom.render(
    <Button/>,
    document.getElementById('root')
);


