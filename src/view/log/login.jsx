import React from "react";
import "./login.css";
import Image from "../../components/util/image/image";
import LoginForm from "../../components/login/loginForm";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            screenSize: window.innerWidth,
        }

        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateScreenSize);
    }

    updateScreenSize() {
        this.setState({ screenSize: window.innerWidth });
    }

    render () {
        return (
            <div className="login">
                <div className="login__img">
                    <Image sizeScreen={this.state.screenSize}/>
                </div>
                <div className="login__formFrame">
                    <LoginForm/>
                </div>
            </div>
        );
    }
    
}

export {Login};
