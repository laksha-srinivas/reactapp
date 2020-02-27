import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class EvenCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = { clicks : 0 };
    this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        const clicksNew =  this.state.clicks +1;
        this.setState({clicks: clicksNew});
        if(clicksNew % 2 === 0) {
            this.props.onEvenClick (clicksNew);
        }
    }
    render() {
        return <div onClick = {this.clickHandler}>
            This div has been clicked {this.state.clicks} times.
            </div>;
    }
}

ReactDom.render(<EvenCounter onEvenClick = { (data) =>
    {console.log(`even ${data}`);} } />,
    document.getElementById('root')
);