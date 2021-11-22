import React from "react";
import "./chatView.css";
import DataBar from "../../util/dataBar/dataBar";
import axios from "axios";
import URL_BASE from "../../../util";
import ChatUserData from "../chatUserData/chatUserData";
import ActualUserChat from "../mainChat/actualUserChat/actualUserChat";
import WithUserChat from "../mainChat/withUserChat/withUserChat";

class ChatView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            userChat: {},
            conversation: [],
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

    setChats(newData){
        this.setState({
            chats: newData,
            conversation: newData.conversation,
        })
    }

    render() {
        console.log(this.state.conversation)
        return(
            <>
                <div className="chat__principal">
                    <div className="chat__principalBar">
                        <DataBar userChat={this.state.userChat}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <div className="chat__principalMessages">
                        <br/>
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
                    </div>
                </div>

                <div>
                    <ChatUserData userChat={this.state.userChat}/>
                </div>
            </>
        )
    }
}

export default ChatView;
