import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useReducer } from "react";
import LoadingSpinner from "./loadingSpinner";
import {useQuery, useQueryClient} from "react-query";

const initState = {
    course: {},
    error: "",
    isLoading: false
};

const reducer = (oldState, action) => {
    switch(action.type) {
        case "SEND_REQUEST":
            return {...oldState, isLoading: true, error: ""};
        case "REQUEST_SUCCESS":
            return {course: action.payload, isLoading: false, error: ""};
        case "REQUEST_FAILURE":
            return {course: {}, isLoading: false, error: action.payload};
        default:
            return oldState;
    }
}

export default function CPHeader(props) {
    let Id = props.courseId;
    const queryClient = useQueryClient();
    const [state, dispatch] = useReducer(reducer, initState);
    let id=Id;
    if(Id==="5"){id="4";}
    
    useQuery('query',() => {
        dispatch({type: "SEND_REQUEST"});
        fetch(`http://localhost:4000/courses/${id}`)
        .then(res => res.json())
        .then((json) => {
           dispatch({type: "REQUEST_SUCCESS", payload: json});
        })
        .catch(err => {dispatch({type: "REQUEST_FAILURE", payload: "something went wrong"})});
        
    }, []);
    console.log("instructor", state.course.name);
    // let name = course.instructor[0].name;
    // let org = course.instructor[1].name;
    const check = () => {
        if(Object.keys(state.course).length===0){
            return false;
        }
        for(let key of Object.keys(state.course)){
            if(state.course.key===undefined){
                return false;
            }
            if(Object.keys(state.course.key)===0){
                return false;
            }
        }
        return true;
    }
    if(state.isLoading){
        return (
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    } else if(state.error) {
        return (
            <div>
                {state.error}
            </div>
        );
    } else if(Object.keys(state.course).length!==0){
        // console.log(state.course);
    return (
        <header>
            <p>Development &#62; Programming Languages &#62; Python</p>
            <p>{state.course.title}</p>
            <p>{state.course.Introduction}</p>
            <p>
                <span>{state.course.rate}</span>
                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon></span>
                <span>({state.course.ratingCount} ratings)</span>
                <span>{state.course.enrollCount} students</span>
            </p>
            <p>Created by {state.course.instructor[0].name}, {state.course.instructor[1].name}</p>
        </header>
    );
    }
}