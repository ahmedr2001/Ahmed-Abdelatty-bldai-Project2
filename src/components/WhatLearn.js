import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles.css"

export default function WhatLearn(props) {
    let element = props.course.overview.map((objective) =>
        <div className="whatLearnContentItem">
            <FontAwesomeIcon style={{paddingRight: "10px"}} icon={faCheck}></FontAwesomeIcon>
            {objective}
        </div>
    );
    
    return (
        <div className="whatLearn">
            <div className="whatLearnTitle">
                <h2>What you'll learn</h2>
            </div>
            <div className="whatLearnContent" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                {element}
            </div>
        </div>
    );
}