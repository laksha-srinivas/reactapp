import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
//import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
//import React{ Component } from 'react'

//ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));

/*class ClickCounter extends React.Component{}
constructor(props){
    super(props);
    this.state = {clicks : 0};
};
render(){
    return (
    <div onClick={ () => {this.setState({clicks : this.state.clicks+1}); } })>
    This div has been clicked {this.state.clicks} times.
    </div>
}*/

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
serviceWorker.register();
