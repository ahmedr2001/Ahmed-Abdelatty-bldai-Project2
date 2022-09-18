import "../styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function CPSticky(props) {
    const price = parseInt(props.course.price);
    const originalPrice = parseInt(props.course.originalPrice);
    const diff = originalPrice - price;
    const percentage = Math.round(diff/originalPrice*100);

    return (
        <div className="cpSticky">
            <img src={props.course.image} alt="course image"></img>
            <div className="stickyPrice">
                E&pound;{props.course.price} <del>E&pound;{props.course.originalPrice}</del> {percentage}%off
            </div>
            <div><button className="stickyCart" type="button">Add to cart</button></div>
            <div><button className="stickyBuy" type="button">Buy now</button></div>
            <div className="guarantee">30-Day Money-Back Guarantee</div>
            <div className="stickyIncludes">This course includes:</div>
            <div className="stickyPerks">
                <div><FontAwesomeIcon icon={faClapperboard}></FontAwesomeIcon>{props.course.hoursCount} hours on-demand video</div>
                <div><FontAwesomeIcon icon={faFile}></FontAwesomeIcon> {props.course.articlesCount} articles</div>
                <div><FontAwesomeIcon icon={faFileArrowDown}></FontAwesomeIcon> {props.course.downloadableResource} downloadable resources</div>
                <div><FontAwesomeIcon icon={faInfinity}></FontAwesomeIcon> Full lifetime access</div>
                <div><FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon> Access on mobile and TV</div>
                <div><FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon> Certificate of completion</div>
            </div>
            
            <div className="stickyShare">
                <span>Share</span>
                <span>Gift this course</span>
                <span>Apply coupon</span>
            </div>
            <div className="stickyFooter">
                <div>Training 5 or more people?</div>
                <div>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</div>
                <button className="stickyBusiness" type="button">Try Udemy Business</button>
            </div>
        </div>
    );
}