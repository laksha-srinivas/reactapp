import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';


/*class AuthorQuiz extends React.Component {

render(){
  return (
    <div>Author Quiz</div>
  );
}
}
*/
function Sum(props){
    return <h1>
    {props.a}+{props.b}={props.a+props.b}
    </h1>;
}
Sum.propTypes = {
    a : PropTypes.number.isRequired,
    b : PropTypes.number.isRequired,
};

ReactDom.render(<Sum a={1} b={2}/>,
    document.getElementById('root')
);

export default AuthorQuiz;