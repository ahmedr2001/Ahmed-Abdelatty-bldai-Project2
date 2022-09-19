import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStar } from "@fortawesome/free-regular-svg-icons";
import "../styles.css"

export default function Reviews(props) {
    let elements = [];
    for (let review of props.course.reviews) {
        let stars = [];
        for (let i = 0; i < review.rate; i++) {
            const star = (
                <FontAwesomeIcon style={{marginRight: "3px"}} icon={faStar}></FontAwesomeIcon>
            );
            stars.push(star);
        }
        for(let i = review.rate; i < 5; i++) {
            const star = (
                <FontAwesomeIcon style={{marginRight: "3px"}} icon={FaStar}></FontAwesomeIcon>
            )
            stars.push(star);
        }
        const element = (
            <div className="oneReview" style={{display: "flex"}}>
                <div className="userIcon"><FontAwesomeIcon style={{fontSize: "40px"}} icon={faCircleUser}></FontAwesomeIcon></div>
                <div className="reviewDesc">
                    <div className="reviewName">{review.name}</div>
                    <div className="reviewStars">{stars}</div>
                    <div className="reviewContent">{review.content}</div>
                    <div className="wasHelpful">Was this review helpful?</div>
                    <div style={{display: "flex"}} className="reviewFooter">
                        <span className="likeDislike">
                            <img width={40} src={require("../images/thumbsUp.png")} alt="thumbs up"></img>
                            <img width={43} src={require("../images/thumbsDown.png")} alt="thumbs down"></img>
                        </span>
                        <span style={{alignSelf: "center"}} className="report">Report</span>
                    </div>
                </div>
            </div>
        );
        elements.push(element);
    }

    return (
        <div style={{marginBottom: "-805px"}} className="reviews">
            <h2>Reviews</h2>
            {elements}
        </div>
    );
}