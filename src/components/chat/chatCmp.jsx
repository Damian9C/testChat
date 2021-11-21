import React from "react";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import './chatCmp.css';
import ballonChat from '../../assets/img/ballon.png'
import ChatView from "./chatView/chatView";


function ChatCmp() {
    const history = useNavigate();
    const cookies = new Cookies();
    let dataUser = cookies.get('user');
    let chats;
    let userChat;
    let userChatName = ''

    if (dataUser === undefined) {
        history('/');
        console.log('Hola')
    } else {
        return (
            <div className="chatMain">
                <div className="chat__userdata"><br/><br/>
                    <div className="chat__userdata--data">
                        <img className="chat__user--img" src={dataUser.img}/><br/>
                        <div className="chat__userdata--dataTitle">{dataUser.name}</div>
                        <div>{dataUser.phone}</div>
                    </div>
                    <br/><br/><br/>

                    <div className="chat__userdata--chat">
                        <img className="chat__userdata--chatImg" src={ballonChat} height="20px"/>
                        Chat
                    </div>
                </div>

                <ChatView datauser={dataUser}/>
            </div>
        )
    }
}

export default ChatCmp;
