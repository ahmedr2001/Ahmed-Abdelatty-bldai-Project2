import "../styles.css";

export default function Requirements(props) {
    const elements = [];
    for (let req of props.course.requirements) {
        const element = (
            <div className="reqsItem">
                <span style={{fontSize: "26px", paddingRight: "13px", position: "relative", top: "4px"}}>&bull;</span> {req}
            </div>
        );
        elements.push(element);
    }
    
    return (
        <div className="reqs">
            <h2 className="reqsHeader">Requirements</h2>
            {elements}
        </div>
    );
}