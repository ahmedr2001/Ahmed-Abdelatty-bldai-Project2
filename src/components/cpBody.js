import WhatLearn from "./WhatLearn";
import CourseContent from "./CourseContent";
import Requirements from "./Requirements";
import Description from "./Description";
import Instructors from "./Instructors";
import StudentFeedback from "./StudentFeedback";
import Reviews from "./Reviews";

export default function CPBody(props) {
    return (
        <div>
            <WhatLearn course={props.course} courseId={props.courseId}></WhatLearn>
            <CourseContent course={props.course} courseId={props.courseId}></CourseContent>
            <Requirements course={props.course} courseId={props.courseId}></Requirements>
            <Description course={props.course} courseId={props.courseId}></Description>
            <Instructors course={props.course} courseId={props.courseId}></Instructors>
            <StudentFeedback course={props.course} courseId={props.courseId}></StudentFeedback>
            <Reviews course={props.course} courseId={props.courseId}></Reviews>
        </div>
    );
}