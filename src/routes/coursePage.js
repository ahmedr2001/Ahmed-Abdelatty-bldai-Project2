import { useParams } from "react-router-dom";
import  CPHeader  from "../components/cpHeader";
import  CPBody  from "../components/cpBody";
import  CPFooter  from "../components/cpFooter";
import courses from "../data";
import "../styles.css";

export default function CoursePage() {
    let params = useParams();
    
    return (
        <div>
            <CPHeader course={courses[params.courseId-1]} courseId={params.courseId}></CPHeader>
            <CPBody></CPBody>
            <CPFooter></CPFooter>
        </div>
    )
}