import React from 'react';
import './Item.css';
// import Group from './Group.css'

function App(props) {
    return (
        <div className="Item">
            <div className="Image"></div>
            <div className="Text">
                <p className="Name">{props.item.name}</p>
                <p className="Email">{props.item.email}</p>
            </div>
        </div>
    );
}

export default App;
