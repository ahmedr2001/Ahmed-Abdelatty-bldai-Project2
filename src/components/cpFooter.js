import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function CPFooter(props) {
    return (
        <div style={{marginTop: "100px"}} className="cpFooter">
            <div className="cpFooterCompanies" style={{display: "flex"}}>
                <div className="cpFooterCompaniesText">Top companies choose <span style={{color: "#cec0fc", padding: "0 5px 0 5px"}}> Udemy Business </span>to build in-demand career skills</div>
                <div className="cpFooterCompaniesImg">
                    <img src={require("../images/nasdaq.png")} alt="Nasdaq" width={120} height={35}></img>
                    <img src={require("../images/wolkswagen.png")} alt="Wolkswagen" width={40} height={40}></img>
                    <img src={require("../images/box.png")} alt="box" width={66} height={33}></img>
                    <img src={require("../images/netapp.png")} alt="netapp" height={28}></img>
                    <img src={require("../images/eventbrite.png")} alt="eventbrite" height={32}></img>
                </div>
            </div>
            <hr color="#36383a"></hr>
            <div className="cpFooterSection">
                <div className="cpFooterNav" style={{display: "flex"}}>
                    <div className="cpFooterNavList" style={{display: "flex"}}>
                        <ul>
                            <li>Udemy Business</li>
                            <li>Teach on Udemy</li>
                            <li>Get the app</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help and Support</li>
                            <li>Affiliate</li>
                            <li>Investors</li>
                        </ul>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Cookie settings</li>
                            <li>Sitemap</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                    <button>
                        <FontAwesomeIcon style={{paddingRight: "5px"}} icon={faGlobe}></FontAwesomeIcon>
                        English
                    </button>
                </div>
                <div className="cpFooterLogo" style={{display: "flex"}}>
                    <img src={require("../images/smalludemylogo.png")} alt="udemylogo" width={85}></img>
                    <div style={{fontSize: "11px"}}>&copy; 2022 Udemy, Inc.</div>
                </div>
            </div>
        </div>
    );
}