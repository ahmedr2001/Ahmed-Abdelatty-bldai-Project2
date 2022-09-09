import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
// import { useRef } from "react";

export default function PopUp(props) {
    
    let id = props._id;
    console.log("id", id);
    console.log("id", props.popUp[id-1]);
    let elements = [];
    for(let i=0; i<props.popUp[id-1].LOs.length;i++){
        const element = (
        <p style={{width:"90%"}}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <span style={{marginLeft: "10px"}}>{props.popUp[id-1].LOs[i]}    </span>
        </p>
        );
        elements.push(element);
    }
    if(id===5) {
        return (
            <div style={{padding: "15px", fontSize: "12px"}} id={id} className="popuptextinv">
            <p style={{width: "90%"}}><h2>{props.popUp[id-1].title}</h2></p>
            <p style={{fontSize: "10px", color:"green", width: "90%"}}>Updated <span style={{fontWeight: "bold"}}>{props.popUp[id-1].updated}</span></p>
            <p style={{color: "grey", fontSize: "10px", width: "90%"}}>{props.popUp[id-1].hours} total hours &#xb7; All Levels &#xb7; Subtitles </p>
            <p style={{width: "90%"}}>{props.popUp[id-1].desc}</p>
            {elements}
            <span><button style={{marginTop: "10px"}} className="cart">Add to cart</button><FontAwesomeIcon style={ {marginTop: "4px", marginLeft:"10px",position:"absolute", top:"82%", padding: "10px", border: "1px solid black", borderRadius: "1000px"}} icon={faHeart} size="2x"></FontAwesomeIcon></span>
        </div>
        );
    }
    return (
        <div style={{padding: "15px", fontSize: "12px"}} id={id} className="popuptext">
            <p style={{width: "90%"}}><h2>{props.popUp[id-1].title}</h2></p>
            <p style={{fontSize: "10px", color:"green", width: "90%"}}>Updated <span style={{fontWeight: "bold"}}>{props.popUp[id-1].updated}</span></p>
            <p style={{color: "grey", fontSize: "10px", width: "90%"}}>{props.popUp[id-1].hours} total hours &#xb7; All Levels &#xb7; Subtitles </p>
            <p style={{width: "90%"}}>{props.popUp[id-1].desc}</p>
            {elements}
            <span><button style={{marginTop: "10px"}} className="cart">Add to cart</button><FontAwesomeIcon style={ {marginTop: "4px", marginLeft:"10px",position:"absolute", top:"82%", padding: "10px", border: "1px solid black", borderRadius: "1000px"}} icon={faHeart} size="2x"></FontAwesomeIcon></span>
        </div>
    );
}