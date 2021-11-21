import React from "react";
import './chatUserData.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoChat from "../util/infoChat";

export default function ChatUserData(props) {
    const [isActive, setIsActive] = React.useState(true);
    const styleOn = {
        background: 'red',
    }
    const styleOff = {
        background: 'blue',
    }

    return(
        <div className="chatUserData">
            <div className="chatUserData__header">
                <div>
                    <img src={props.userChat.img}/>
                </div>
                <div>{props.userChat.name}</div>
                <div className="chatUserData__header--lightTxt">{props.userChat.phone}</div>
            </div>
            <div className="chatUserData__body ">
                <button className={isActive? styleOn : styleOff} onClick={() => {
                    setIsActive(!isActive)
                }}>
                    <div>
                        Datos del Contacto
                    </div>
                    <ExpandMoreIcon/>
                </button>
            </div>
            <InfoChat isVisible={isActive} dataUser={props.userChat}/>
        </div>
    )
}
