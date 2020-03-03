import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Route, BrowserRouter } from 'react-router-dom'

const {
    //BrowserRouter,
   // Route,
    Link
} = ReactRouterDOM

const characters = {
    "lady-glasses" : "" ,
    "tie-guy" : ""
};

function Character({match}) {
    const imgURL = characters[match.params.character].replace(/Gray/g,match.params.color);
    return <div> <img src={imgUrl} /></div>;
}

const Dashboard =() => (
    <div style = {{width: "400px", height:'400px'}}>
    <div className="cell">
        <Route path="/top/left/:character/:color" component={Character}/>
    </div>
    <div className="cell">
          <Route path="/top/right/:character/:color" component={Character}/>
    </div>
    <div className="cell">
          <Route path="/bottom/left/:character/:color" component={Character}/>
    </div>
    <div className="cell">
           <Route path="/bottom/right/:character/:color" component={Character}/>
     </div>
     </div>
);;

ReactDom.render(
    <BrowserRouter>
        <div>
            <aside>
                (Object.keys(characters).maps((name)=>
                    ["/top/left/", "/top/right", "/bottom/left/", "/bottom/right"].map((corner)=>
                        ["Gray","Green","Orange","Purple"].map((color) =>
                            <Link to ={`${corner}${name}/${color}`}>{`${corner}${name}/${color}`} </Link>
                            )))}
            </aside>

    <main>
        <Route path="/" component={Dashboard} />
        <Route path="/top" render={() => <div> Something at the top </div>} />
         <Route path="/bottom" render={() => <div> Something at the bottom </div>} />
     </main>
     </div>
     </BrowserRouter>,
     document.getElementById('app')
     )