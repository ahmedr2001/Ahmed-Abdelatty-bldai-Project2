import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf as FaStarHalf } from "@fortawesome/free-regular-svg-icons";

export default function StudentFeedback(props) {
    const rate5 = props.course.studentFeedback[0]; 
    const rate4 = props.course.studentFeedback[1]; 
    const rate3 = props.course.studentFeedback[2]; 
    const rate2 = props.course.studentFeedback[3]; 
    const rate1 = props.course.studentFeedback[4]; 

    return (
        <div style={{width: "45%", marginLeft: "14%"}}>
            <h2>Student Feedback</h2>
            <div className="fb">
                <div className="hundredpercent" style={{display: "flex", flexDirection: "column", height: "150px"}}>
                    <div style={{fontSize: "70px", fontWeight: "bold", color: "#b4690e"}}>{props.course.rate}</div>
                    <div style={{color: "#e59819"}}>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
                    </div>
                    <div style={{fontSize: "13px", fontWeight: 'bold', color: "#b4690e", transform: "translateX(3%)"}}>Course Rating</div>
                </div>
                <div className="feedbackBars">
                    <div className="insideBars" style={{display: "flex", height: "8px"}}>
                        <span style={{width: `${rate5*0.75}%`, height: "8px", backgroundColor: "#6a6f73"}} className="bar-5"></span>
                        <span style={{width: `${(100-rate5)*0.75}%`, height: "8px", backgroundColor: "#d1d7dc", marginRight: "10px"}} className="bar-5"></span>
                        <span className="hide" style={{fontSize: "13px", marginTop: "-5px", color: "#e59819"}}>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <span style={{color: "#7c55db", textDecoration: "underline"}}>{rate5}%</span>
                        </span>
                    </div>
                    <div className="insideBars" style={{display: "flex", height: "8px"}}>
                        <span style={{width: `${(rate4)*0.75}%`, height: "8px", backgroundColor: "#6a6f73"}} className="bar-4"></span>
                        <span style={{width: `${(100-rate4)*0.75}%`, height: "8px", backgroundColor: "#d1d7dc", marginRight: "10px"}} className="bar-4"></span>
                        <span className="hide" style={{fontSize: "13px", marginTop: "-5px", color: "#e59819"}}>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <span style={{color: "#7c55db", textDecoration: "underline"}}>{rate4}%</span>
                        </span>
                    </div>
                    <div className="insideBars" style={{display: "flex", height: "8px"}}>
                        <span  style={{width: `${rate3*0.75}%`, height: "8px", backgroundColor: "#6a6f73"}} className="bar-3"></span>
                        <span style={{width: `${(100-rate3)*0.75}%`, height: "8px", backgroundColor: "#d1d7dc", marginRight: "10px"}} className="bar-3"></span>
                        <span className="hide" style={{fontSize: "13px", marginTop: "-5px", color: "#e59819"}}>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <span style={{color: "#7c55db", textDecoration: "underline"}}>{rate3}%</span>
                        </span>
                    </div>
                    <div className="insideBars" style={{display: "flex", height: "8px"}}>
                        <span style={{width: `${rate2*0.75}%`, height: "8px", backgroundColor: "#6a6f73"}} className="bar-2"></span>
                        <span  style={{width: `${(100-rate2)*0.75}%`, height: "8px", backgroundColor: "#d1d7dc", marginRight: "10px"}} className="bar-2"></span>
                        <span className="hide" style={{fontSize: "13px", marginTop: "-5px", color: "#e59819"}}>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <span style={{color: "#7c55db", textDecoration: "underline"}}>{rate2}%</span>
                        </span>
                    </div>
                    <div className="insideBars" style={{display: "flex", height: "8px"}}>
                        <span style={{width: `${rate1*0.75}%`, height: "8px", backgroundColor: "#6a6f73"}} className="bar-1"></span>
                        <span style={{width: `${(100-rate1)*0.75}%`, height: "8px", backgroundColor: "#d1d7dc", marginRight: "10px"}} className="bar-1"></span>
                        <span className="hide" style={{fontSize: "13px", marginTop: "-5px", color: "#e59819"}}>
                            <FontAwesomeIcon style={{fontSize: "15px"}}  icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize: "15px"}} icon={FaStar}></FontAwesomeIcon>
                            <span style={{color: "#7c55db", textDecoration: "underline"}}>{rate1}%</span>
                        </span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}