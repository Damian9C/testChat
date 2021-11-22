import React from "react";
import "./withUserChat.css";

export default function WithUserChat(props) {
    return(
        <div className="withUserChat">
            <div>
                <img src={props.userData.img}/>
            </div>
            <div>
                {
                    props.item.message.map(item => {
                        return(
                            <div className="withUserChat__content">
                                <p>
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
