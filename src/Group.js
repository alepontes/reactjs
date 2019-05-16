import React from 'react';
import './Group.css';
import Item from './Item.js'
import Separator from './Separator.js'

function Group(props) {
    return (
        <div className="Group">
            <h2 className="Title">{props.title}</h2>
            {props.itens.map((item) => {
                return (
                    < div className="ItemPosition" >
                        <Item item={item} />
                        <Separator />
                    </div>
                );
            })}
        </div>
    );
}

export default Group;
