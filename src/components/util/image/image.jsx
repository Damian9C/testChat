import React from "react";
import "./image.css"
import imgRegular from "../../../assets/img/log_img.png"
import imgResponsive from "../../../assets/img/logResponsive_img.png"

const Image = ({sizeScreen}) => {
    if (sizeScreen > 768){
        return(
            <div>
                <img className="image" src={imgRegular}/>
            </div>
        );
    }else{
        return(
            <div>
                <img className="imageResponsive" src={imgResponsive}/>
            </div>
        );
    }
}

export default Image;
