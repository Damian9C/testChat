import React, {useState} from "react";
import axios from "axios";
import URL_BASE from "../../util";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState(0);
    const [password, setPass] = useState(0);

    const history = useNavigate();

    const onFormSubmit = async () => {
        try {
            let auth = await axios.post((URL_BASE + 'users/login'), {
                email,
                password,
            })
            if (auth.status === 200){
                history('/chats');
            } else {
                alert('Verifica tu correo o contraseña');
            }
        }catch (e) {
            console.log(e)
            alert('Correo o contraseña invalidos')
        }
    }

    return(
        <div className="login__formFrame--Content">
            <p className="login__form--title">Iniciar sesión</p>

            <div className="login__form">
                <div className="login__form--input">
                    <label htmlFor="inputMail">
                        <span className="login__form--inputText">
                            Coreo electrónico
                        </span>
                    </label><br/>
                    <input className="inputMail" value={email} onChange={ e => {setEmail(e.target.value)} }/>
                </div>

                <div className="login__form--input">
                    <label htmlFor="inputPass">
                        <span className="login__form--inputText">
                            Contraseña
                        </span>
                    </label><br/>
                    <input className="inputPass" value={password} onChange={ e => {setPass(e.target.value)} } type="password"/>
                </div>

                <span className="login__form--inputBtn">
                    <input onClick={onFormSubmit} type="button" className="login__form--inputBtnContent" value="Iniciar sesión"/>
                </span>
            </div>
        </div>
    )
}

export default LoginForm;
