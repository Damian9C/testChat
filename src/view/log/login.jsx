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
        <div>
            <div>
                <img src={logImg}/>
            </div>
            <div>

                <h1>Iniciar sesión</h1>

                <input name={email} onInput={ e => {set_email(e.target.value)} }/>
                <input name={pass} onInput={ e => {set_pass(e.target.value)} } type="password"/>

                <input type="submit" onClick={log}/>

            </div>
        </div>
    );
    
}
