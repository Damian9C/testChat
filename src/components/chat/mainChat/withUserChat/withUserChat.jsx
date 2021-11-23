import React from "react";
import "./withUserChat.css";

export default function WithUserChat(props) {
    return(
        <div className="withUserChat">
            <div>
                <img src={props.userData.img}/>
            </div>
            <div>
                <div className="withUserChat__content">
                    <p>
                        {props.item.message}
                    </p>
                </div>
            </div>
        </div>
    )
}
