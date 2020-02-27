import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import _ from 'lodash';

function DangerContainer(props){
    return <p dangerouslySetInnerHTML={{__html:props.dangerous}}/>
    }
    ReactDom.render(<DangerContainer dangerous = " <strong>DANGER</strong>"/>,
    document.getElementById('root')
    );