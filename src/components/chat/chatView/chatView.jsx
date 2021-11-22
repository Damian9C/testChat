import React from "react";
import "./chatView.css";
import DataBar from "../../util/dataBar/dataBar";
import axios from "axios";
import URL_BASE from "../../../util";
import ChatUserData from "../chatUserData/chatUserData";
import ActualUserChat from "../mainChat/actualUserChat/actualUserChat";
import WithUserChat from "../mainChat/withUserChat/withUserChat";
import imgSend from "../../../assets/img/send.png";

class ChatView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            userChat: {},
            conversation: [],
            newMessage: '',
        }
    }

    componentDidMount() {
        const getDataChat = async () => {
            try {
                 let request = await axios.get(URL_BASE + 'messages', {
                    timeout: 3000
                 });
                 this.setChats(request.data[0]);
            } catch (e) {
                alert('Error al cargar mensajes')
            }
        }
        getDataChat().then(() => {
            this.state.chats.users.map(async item => {
                if (this.props.datauser._id !== item) {
                    let userChat = await axios.get(URL_BASE + 'users/' + item, {
                        timeout: 3000
                    })
                    this.setUserChats(userChat.data);
                }
            })
        })
    }

    setUserChats(newData){
        this.setState({
            userChat: newData
        })
    }

    setNewMessage(newData){
        this.setState({
            newMessage: newData
        })
    }

    setChats(newData){
        this.setState({
            chats: newData,
            conversation: newData.conversation,
        })
    }

    setConversation(newData){
        this.setState({
            conversation: newData,
        })
    }

    sendNewMessage(state, props){
        let finalMessage = state.chats.conversation.length - 1;
        let finalUser = state.chats.conversation[finalMessage].user;

        if(finalUser === props._id){
            state.chats.conversation[finalMessage].message.push(state.newMessage);
            this.setConversation(state.conversation);
        }else{
            state.chats.conversation.push({
                user: props._id,
                message: [
                    state.newMessage,
                ],
            })
        }
        this.setConversation(state.conversation);
    }

    render() {
        return(
            <>
                <div  className="chat__principal">
                    <DataBar userChat={this.state.userChat}/>
                    <div className="chat__principalMessages">

                        <div>
                            {this.state.conversation.map(item => {
                                if (this.props.datauser._id === item.user){
                                    return(
                                        <div>
                                            <ActualUserChat userData={this.props.datauser} item={item}/>
                                        </div>
                                    )
                                }else{
                                    return (
                                        <div>
                                            <WithUserChat userData={this.state.userChat} item={item}/>
                                        </div>
                                    )
                                }
                            })
                            }
                            <br/>
                        </div>
                    </div>
                    <div className="chat__principalSend">
                        <hr/>
                        <div className="chat__principalSend--content">
                            <input
                                placeholder="Escribe un mensaje..."
                                className="chat__principalSend--Input"
                                value={this.state.newMessage}
                                onChange={ e => {this.setNewMessage(e.target.value)} }
                            />
                            <img
                                onClick={() => {
                                    this.sendNewMessage(this.state, this.props.datauser)
                                }}
                                className="chat__principalSend--btn"
                                src={imgSend}
                            />
                        </div>
                    </div>
                </div>

                <div className="chat__principal--userChat">
                    <ChatUserData userChat={this.state.userChat}/>
                </div>
            </>
        )
    }
}

export default ChatView;
