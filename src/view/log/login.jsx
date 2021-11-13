import React, {useState} from "react";
import "./login.css"
import logImg from "../../assets/img/log_img.png"

export default function Login() {
    const [email, set_email] = useState("");
    const [pass, set_pass] = useState("");

    const log = () => {
        if (email && pass){
            console.log(email, pass)
        }else{
            alert('Verifique los cmapos')
        }
    }

    return (
        <div className="login">
            <div className="login__img">
                <img className="login__img--img" src={logImg}/>
            </div>
            <div className="login__formFrame">
                <div className="login__formFrame--Content">
                    <p className="login__form--title">Iniciar sesión</p>

                    <div className="login__form">

                        <div className="login__form--input">
                            <label htmlFor="inputMail">
                                <span className="login__form--inputText">
                                    Coreo
                                </span>
                            </label><br/>
                            <input className="inputMail" name={email} onInput={ e => {set_email(e.target.value)} }/>
                        </div>

                        <div className="login__form--input">
                            <label htmlFor="inputPass">
                                <span className="login__form--inputText">
                                    Contraseña
                                </span>
                            </label><br/>
                            <input className="inputPass" name={pass} onInput={ e => {set_pass(e.target.value)} } type="password"/>
                        </div>

                        <span className="login__form--inputBtn">
                            <input className="login__form--inputBtnContent" type="submit" onClick={log}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
