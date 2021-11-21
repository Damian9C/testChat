import React from "react";
import './dataBar.css';

export default function DataBar(props) {
    return(
        <div className="dataBar">
            <img className="chat__principalBar--img" src={props.userChat.img}/><br/>
            <p>{props.userChat.name}</p>
        </div>
    )
}
