import React, {useEffect, useReducer} from "react";
import ReactDOM from 'react-dom';
import { useOutletContext, Link } from "react-router-dom";
import './Card.css';
import LoadingSpinner from "./loadingSpinner";
import PopUp from "./popUp";
import popUpObject from "../coursesPopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';

const initState = {
    courses: [],
    error: "",
    isLoading: false,
};



const reducer = (oldState, action) => {
    switch(action.type) {
        case "SEND_REQUEST":
            return {...oldState, isLoading: true, error: ""};
        case "REQUEST_SUCCESS":
            return {isLoading: false, error: "", courses: action.payload};
        case "REQUEST_FAILURE":
            return {courses: [], isLoading: false, error: action.payload};
        default:
            return oldState;
    }
};

function Card(props) {
        const filter = useOutletContext();
        const [state, dispatch] = useReducer(reducer, initState);

        // useEffect(() => {
        //     dispatch({type: "SEND_REQUEST"});
        //     fetch("http://localhost:4000/python")
        //     .then((res) => res.json())
        //     .then((json) => {

        //         dispatch({type: "REQUEST_SUCCESS", payload: json});
        //     })
        //     .catch(() => {
        //         dispatch({type: "REQUEST_FAILURE", payload: "something went wrong"});
        //     });
        // }, []);
        let elements = [];
        useEffect(() => {

            dispatch({type:"SEND_REQUEST"});
            setTimeout(() => {
                dispatch({type: "REQUEST_SUCCESS"});
            }, 1000)
        }, []);
        if(state.isLoading){
            return <div style={{display: "flex", justifyContent: "space-around"}}>
                <LoadingSpinner></LoadingSpinner>
                <LoadingSpinner></LoadingSpinner>
                <LoadingSpinner></LoadingSpinner>
                <LoadingSpinner></LoadingSpinner>
                <LoadingSpinner></LoadingSpinner>
            </div>;
        // } else if (state.error) {
        //     return <div style={{display: "flex", justifyContent: "space-around"}}>
        //         <div>{state.error}</div>
        //         <div>{state.error}</div>
        //         <div>{state.error}</div>
        //         <div>{state.error}</div>
        //         <div>{state.error}</div>
        //         </div>;
         } else {

            for(const course of props.courses){
                if(course.title.toLowerCase().startsWith(filter.toLowerCase())){
                    const element =(<Link to={`/${course.id}`}><div className="responsive">
            <div className="gallery">
                <div style={{position:"relative"}}>
                <img onMouseEnter={()=>myFunction(course.id)} onMouseLeave={()=>myFunction(course.id)} src={require(`../images/py${course.id}.png`)} alt={"Card"} width={480} height={320}>
                </img>
                <PopUp popUp={popUpObject} _id={course.id}></PopUp>
                </div>
                <div className="desc">
                    <p className="title">{course.title}</p>
                    <p>{course.author}</p>
                    <p>
                        <p style={{width: "100%"}} className="orange">{course.rating}
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
                        </p>
                        <p className="brackets">{course.reviews}</p>
                    </p>
                    <p>E&#xa3;{course.price}<del>E&#xa3;{course.previous}   </del></p>
                </div>
            </div>
        </div></Link>);
        elements.push(element);   }         
    }
    return elements;
    }
 }

function myFunction(id) {
    var popupNode = document.getElementById(id);
    
        let popup = ReactDOM.findDOMNode(popupNode);
        popup.classList.toggle("show");
    
}

export default Card;