import React from "react";
import './actualUserChat.css';

export default function ActualUserChat(props) {
    return(
        <div className="actualUserChat">
            <div>
                <div className="actualUserChat__content">
                    <p>
                        {props.item.message}
                    </p>
                </div>
            </div>
            <div>
                <img src={props.userData.img}/>
            </div>
        </div>
    )
}
