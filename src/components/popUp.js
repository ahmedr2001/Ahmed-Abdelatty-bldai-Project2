import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { useRef } from "react";

export default function PopUp(props) {
    
    let id = props._id;
    console.log("id", id);
    console.log("id", props.popUp[id-1]);
    let elements = [];
    for(let i=0; i<props.popUp[id-1].LOs.length;i++){
        const element = (
        <p>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            {props.popUp[id-1].LOs[i]}    
        </p>
        );
        elements.push(element);
    }
    return (
        <div id={id} className="popuptext">
            <p>{props.popUp[id-1].title}</p>
            <p>Updated {props.popUp[id-1].updated}</p>
            <p>{props.popUp[id-1].hours} total hours &#xb7; All Levels &#xb7; Subtitles </p>
            <p>{props.popUp[id-1].desc}</p>
            {elements}
        </div>
    );
}