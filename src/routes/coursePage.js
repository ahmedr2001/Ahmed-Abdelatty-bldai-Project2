import { useParams } from "react-router-dom";
import  CPHeader  from "../components/cpHeader";
import  CPBody  from "../components/cpBody";
import  CPFooter  from "../components/cpFooter";

export default function CoursePage() {
    let params = useParams();
    
    return (
        <div>
            <CPHeader courseId={params.courseId}></CPHeader>
            <CPBody></CPBody>
            <CPFooter></CPFooter>
        </div>
    )
}