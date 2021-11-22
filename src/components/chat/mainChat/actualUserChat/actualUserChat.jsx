import React from "react";
import './actualUserChat.css';

export default function ActualUserChat(props) {
    console.log(props)
    return(
        <div className="actualUserChat">
            <div>
                {
                    props.item.message.map(item => {
                        return(
                            <div className="actualUserChat__content">
                                <p>
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <img src={props.userData.img}/>
            </div>
        </div>
    )
}
