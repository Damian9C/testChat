import React from "react";

export default function ChatUserData(props) {
    return(
        <div>
            <div>
                <img src={props.userChat.img}/>
                <p>{props.userChat.name}</p>
                <p>{props.userChat.phone}</p>
            </div>
        </div>
    )
}
