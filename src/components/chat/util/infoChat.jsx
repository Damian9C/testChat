import React from "react";
import './infoChat.css';

export default function InfoChat(props) {
    if (!props.isVisible){
        return(
            <>
                <div className="InfoChat">
                    <div className="InfoChat__title">Edad</div>
                    <div className="InfoChat__content">{props.dataUser.age}</div>

                    <div className="InfoChat__title">Correo</div>
                    <div className="InfoChat__content">{props.dataUser.email}</div>

                    <div className="InfoChat__title">Prioridad</div>
                    <div className="InfoChat__content">{props.dataUser.priority}</div>

                    <div className="InfoChat__title">Problema</div>
                    <div className="InfoChat__content">{props.dataUser.problem}</div>

                    <div className="InfoChat__title">Promocion</div>
                    <div className="InfoChat__content">{props.dataUser.promotion}</div>

                    <div className="InfoChat__title">CURP</div>
                    <div className="InfoChat__content">{props.dataUser.curp}</div>
                </div>
            </>
        )
    }else {
        return (
            <>
            </>
        )
    }
}
