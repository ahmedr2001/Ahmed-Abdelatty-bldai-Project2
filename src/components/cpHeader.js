import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faInfo, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faClosedCaptioning } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState, useReducer } from "react";
import LoadingSpinner from "./loadingSpinner";
import {useQuery, useQueryClient} from "react-query";

export default function CPHeader(props) {
    let id = props.courseId;
    
    let org = "";
    if(id==="1" || id==="3") {
        org = `, ${props.course.instructor[1].name}`;
    }
    
    return (
        <header className="cpHeader">
            <p className="cpHeaderNav">Development &#62; Programming Languages &#62; Python</p>
            <p className="cpHeaderTitle">{props.course.title}</p>
            <p className="cpHeaderIntro">{props.course.Introduction}</p>
            <p>
                <span className="cpHeaderRate">{props.course.rate}</span>
                <span className="cpHeaderStars"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon></span>
                <span className="cpHeaderRateCount">({props.course.ratingCount} ratings  )</span>
                <span className="cpHeaderEnrollCount">  {props.course.enrollCount} students</span>
            </p>
            <p className="cpHeaderCreators">Created by <span style={{color: "#cec0fc", textDecoration: "underline"}}>{props.course.instructor[0].name}{org}</span></p>
            <p className="cpHeaderInfo">
                <FontAwesomeIcon style={{color: "white"}} icon={faInfo}></FontAwesomeIcon>
                <span style={{paddingLeft: "5px", paddingRight: "5px"}}>      Last updated {props.course.lastUpdate}      </span>
                <FontAwesomeIcon style={{color: "white"}} icon={faGlobe}></FontAwesomeIcon>
                <span style={{paddingLeft: "5px", paddingRight: "5px"}}>      {props.course.globe}      </span>
                <FontAwesomeIcon style={{color: "white"}} icon={faClosedCaptioning}></FontAwesomeIcon>
                <span style={{paddingLeft: "5px", paddingRight: "5px"}}>      {props.course.Captioning}      </span>
            </p>
        </header>
    );
    
}