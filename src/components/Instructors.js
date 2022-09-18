import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUserFriends, faStar, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles.css"

export default function Instructors(props) {
    let paragraphs = [];
    for (let instructor of props.course.instructor) {
        let paragraph = [];
        for (let para of instructor.description) {
            paragraph.push((
                <p>
                    {para}
                </p>
            ));
        }
        paragraphs.push(paragraph);
    }

    let elements = [];
    for (let instructor of props.course.instructor) {
        const element = (
            <div className="instructorContent">
                <div className="instructorName">{instructor.name}</div>
                <div className="instructorIntro">{instructor.Intro}</div>
                <div className="instructorFlex" style={{display: "flex"}}>
                    <div className="instructorImg">
                        <img width={100} style={{borderRadius: "1000px"}} src={instructor.Image} alt="Instructor Image"></img>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}} className="instructorStats">
                        <div><FontAwesomeIcon fontSize={10} style={{marginRight: "10px"}} icon={faStar}></FontAwesomeIcon> {instructor.Rating} Instructor Rating</div>
                        <div><FontAwesomeIcon fontSize={10} style={{marginRight: "10px"}} icon={faAward}></FontAwesomeIcon> {instructor.reviewsNumber} Reviews</div>
                        <div><FontAwesomeIcon fontSize={10} style={{marginRight: "10px"}} icon={faUserFriends}></FontAwesomeIcon> {instructor.studentsNumber} Students</div>
                        <div><FontAwesomeIcon fontSize={10} style={{marginRight: "10px"}} icon={faPlayCircle}></FontAwesomeIcon> {instructor.coursesNumber} Courses</div>
                    </div>
                </div>
                <div className="instructorDescription">
                    {paragraphs[props.course.instructor.indexOf(instructor)]}
                </div>
            </div>
        );
        elements.push(element);
    }

    return (
        <div className="instructors">
            <h2>Instructors</h2>
            {elements}
        </div>
    );
}