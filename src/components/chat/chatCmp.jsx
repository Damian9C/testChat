import React from "react";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import './chatCmp.css';
import ballonChat from '../../assets/img/ballon.png'


function ChatCmp() {
    const history = useNavigate();
    const cookies = new Cookies();
    let dataUser = cookies.get('user');
    let chats;

    if (dataUser === undefined){
        history('/');
        console.log('Hola')
    }else{
        const getDataChat = () => {
            try {

            }catch (e) {
                alert('Error al cargar mensajes')
            }
        }

        return(
            <div className="chatMain">
                <div className="chat__userdata"><br/><br/>
                    <div className="chat__userdata--data">
                        <img className="chat__user--img" src={dataUser.img}/><br/>
                        <div className="chat__userdata--dataTitle">{dataUser.name}</div>
                        <div>{dataUser.phone}</div>
                    </div><br/><br/><br/>

                    <div className="chat__userdata--chat">
                        <img className="chat__userdata--chatImg" src={ballonChat} height="20px"/>
                        Chat
                    </div>
                </div>

                <div className="chat__principal">
                    <div className="chat__principalBar">
                        <img className="chat__principalBar--img" src={dataUser.img}/><br/>
                    </div>

                    <div className="chat__principalMessages">

                    </div>
                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default ChatCmp;
