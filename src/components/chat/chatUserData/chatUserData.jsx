import React from "react";
import './chatUserData.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoChat from "../util/infoChat";
import {ExpandLess} from "@material-ui/icons";

class ChatUserData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isOn: {background: 'red'},
            isOff: {background: 'blue'}
        }
    }

    setIsActive(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return(
            <div className="chatUserData">
                <div className="chatUserData__header">
                    <div>
                        <img src={this.props.userChat.img}/>
                    </div>
                    <div>{this.props.userChat.name}</div>
                    <div className="chatUserData__header--lightTxt">{this.props.userChat.phone}</div>
                </div>
                {this.state.isActive &&
                <div className="chatUserData__body">
                    <button
                        onClick={() => {
                            this.setIsActive()
                        }}
                    >
                        <div>
                            Datos del Contacto
                        </div>
                        <ExpandMoreIcon/>
                    </button>
                </div>
                }
                {!this.state.isActive &&
                <div className="chatUserData__body--On">
                    <button
                        onClick={() => {
                            this.setIsActive()
                        }}
                    >
                        <div>
                            Datos del Contacto
                        </div>
                        <ExpandLess/>
                    </button>
                </div>
                }

                <InfoChat isVisible={this.state.isActive} dataUser={this.props.userChat}/>
            </div>
        )
    }
}

export default ChatUserData;
