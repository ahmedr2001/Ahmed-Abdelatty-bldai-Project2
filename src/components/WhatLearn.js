import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function WhatLearn(props) {
    let element = props.course.overview.map((objective) =>
        <div>
            <FontAwesomeIcon style={{paddingRight: "10px"}} icon={faCheck}></FontAwesomeIcon>
            {objective}
        </div>
    );
    
    return (
        <div>
            <div>
                <h2>What you'll learn</h2>
            </div>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                {element}
            </div>
        </div>
    );
}