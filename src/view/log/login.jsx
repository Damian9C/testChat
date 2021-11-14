import React from "react";
import "./login.css";
import Image from "../../components/util/image/image";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            screenSize: window.innerWidth,
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateScreenSize);
    }

    setEmail (newEmail) {
        this.setState({email: newEmail})
    }

    setPass (newPass) {
        this.setState({pass: newPass})
    }

    updateScreenSize() {
        this.setState({ screenSize: window.innerWidth });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <div className="login">
                <div className="login__img">
                    <Image sizeScreen={this.state.screenSize}/>
                </div>
                <div className="login__formFrame">
                    <div className="login__formFrame--Content">
                        <p className="login__form--title">Iniciar sesión</p>

                        <div className="login__form">
                            <form onSubmit={this.onFormSubmit}>
                                <div className="login__form--input">
                                    <label htmlFor="inputMail">
                                        <span className="login__form--inputText">
                                            Coreo electrónico
                                        </span>
                                    </label><br/>
                                    <input className="inputMail" value={this.state.email} onChange={ e => {this.setEmail(e.target.value)} }/>
                                </div>

                                <div className="login__form--input">
                                    <label htmlFor="inputPass">
                                        <span className="login__form--inputText">
                                            Contraseña
                                        </span>
                                    </label><br/>
                                    <input className="inputPass" value={this.state.pass} onChange={ e => {this.setPass(e.target.value)} } type="password"/>
                                </div>

                                <span className="login__form--inputBtn">
                                <input className="login__form--inputBtnContent" type="submit" value="Iniciar sesión"/>
                            </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export {Login};
