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
            <img width={300} src={props.course.image} alt="course image"></img>
            <div style={{width: "90%", margin: "0 5% 0 5%"}} className="stickyPrice">
                E&pound;{props.course.price} <del style={{color: "#6a6f73", fontSize: "14px"}}>E&pound;{props.course.originalPrice}</del> <span style={{fontSize: "14px", fontWeight: "normal"}}>{percentage}%off</span>
            </div>
            <button className="stickyCart" type="button">Add to cart</button>
            <button className="stickyBuy" type="button">Buy now</button>
            <div style={{display: "flex", justifyContent: "center", fontSize: "11px", padding: "15px 0 15px 0"}} className="guarantee">30-Day Money-Back Guarantee</div>
            <div style={{width: "90%", margin: "0 5% 0 5%"}} className="stickyIncludes">This course includes:</div>
            <div style={{width: "90%", margin: "0 5% 0 5%"}} className="stickyPerks">
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faClapperboard}></FontAwesomeIcon>{props.course.hoursCount} hours on-demand video</div>
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faFile}></FontAwesomeIcon> {props.course.articlesCount} articles</div>
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faFileArrowDown}></FontAwesomeIcon> {props.course.downloadableResource} downloadable resources</div>
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faInfinity}></FontAwesomeIcon> Full lifetime access</div>
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faMobileScreen}></FontAwesomeIcon> Access on mobile and TV</div>
                <div style={{paddingBottom: "8px"}}><FontAwesomeIcon style={{paddingRight: "10px"}} icon={faTrophy}></FontAwesomeIcon> Certificate of completion</div>
            </div>
            
            <div style={{width: "90%", margin: "0 5% 0 5%"}} className="stickyShare">
                <span>Share</span>
                <span>Gift this course</span>
                <span>Apply coupon</span>
            </div>
            <div style={{width: "90%", margin: "0 5% 0 5%"}} className="stickyFooter">
                <div><h4>Training 5 or more people?</h4></div>
                <div style={{fontSize: "13px", paddingBottom: "10px", marginTop: "-10px"}}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</div>
                <button className="stickyBusiness" type="button">Try Udemy Business</button>
            </div>
        </div>
    );
}