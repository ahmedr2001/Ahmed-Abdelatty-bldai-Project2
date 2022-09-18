import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import { useState } from "react";
import * as ReactDOM from 'react-dom';


export default function CourseContent(props) {
    const [display, setDisplay] = useState("none");

    const toggleLecture = (id) => {
        console.log(id);
        let img = document.getElementById(`img${id}`);
        let imgNode = ReactDOM.findDOMNode(img);
        if(imgNode.src === require("../images/arrow-up.png")) {
            imgNode.src = require("../images/down-arrow.png");
        } else {
            imgNode.src = require("../images/arrow-up.png");
        }
        let lect = document.querySelectorAll(".hi");
        let node = ReactDOM.findDOMNode(lect[id]);
        if (node.style.display === "none") {
            node.style.display = "block";
        } else {
            node.style.display = "none";
        }
    }

    const toggleLectures = () => {
        if (display === "block") {
            setDisplay("none");
            ReactDOM.findDOMNode(document.querySelector(".expandAllSections")).innerHTML = "Expand all sections";
        } else {
            setDisplay("block");
            ReactDOM.findDOMNode(document.querySelector(".expandAllSections")).innerHTML = "Collapse all sections";
        }
        let imgs = document.querySelectorAll("img");
        for (let img of imgs) {
            let node = ReactDOM.findDOMNode(img);
            if (display === "none" && (node.src === require("../images/arrow-up.png")
             || node.src === require("../images/down-arrow.png"))) {
                node.src = require("../images/arrow-up.png");
            } else if (display === "block"  && (node.src === require("../images/arrow-up.png")
            || node.src === require("../images/down-arrow.png"))) {
                node.src = require("../images/down-arrow.png");
            }
        }
    }

    let lectures = [];
    for (let lect of props.course.content) {
        const elements = [];
        for (let lecture of lect[1]) {
            const element = (
                <div className="OneLectureItem">
                    <FontAwesomeIcon style={{paddingRight: "10px"}} icon={faPlayCircle}></FontAwesomeIcon>
                    {lecture}
                </div>
            );
            elements.push(element);
        }
        lectures.push(elements);
    }

    let elements = [];
    let i = 0;
    for (let c of props.course.content) {
        var cpy = i;
        const element = (
            <div>
                <div onClick={() => toggleLecture(props.course.content.indexOf(c))} className="courseContentLecturesTitle" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{fontSize: "15px", fontWeight: "bold"}}>
                        <img id={`img${props.course.content.indexOf(c)}`} style={{paddingRight: "10px"}} width={10} src={require("../images/down-arrow.png")} alt="arrow-up"></img>
                        {c[0]}
                    </div>
                    <div style={{fontSize: "13px"}}>
                        {c[1].length} lectures
                    </div>
                </div>
                <div style={{display: display}} className="OneLecture hi">
                    {lectures[i]}
                </div>
            </div>
        );
        elements.push(element);
        i = i + 1;
    }

    return (
        <div className="courseContent">
            <h2>Course Content</h2>
            <div className="courseContentTop" style={{display: "flex", justifyContent: "space-between"}}>
                <div>{props.course.sectionsCount} sessions &middot; {props.course.lecturesCount} lectures &middot; {props.course.totalLength} total length</div>
                <div onClick={toggleLectures} className="expandAllSections">Expand all sections</div>
            </div>
            <div className="courseContentLectures">
                {elements}
            </div>
        </div>
    );
}