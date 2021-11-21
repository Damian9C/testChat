import React from "react";
import DataBar from "../../util/dataBar/dataBar";
import axios from "axios";
import URL_BASE from "../../../util";
import ChatUserData from "../chatUserData/chatUserData";

class ChatView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            userChat: {}
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
            chats: newData
        })
    }

    render() {
        return(
            <>
                <div className="chat__principal">
                    <div className="chat__principalBar">
                        <DataBar userChat={this.state.userChat}/>
                    </div>

                    <div className="chat__principalMessages">

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
