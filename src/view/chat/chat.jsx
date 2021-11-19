import React from "react";
import "./chat.css";
import Cookies from "universal-cookie";

class Chat extends React.Component{



    render() {
        const cookies = new Cookies();
        console.log(cookies.get('user'))
        return(
            <>
                Hola {}
            </>
        )
    }
}

export default Chat;
