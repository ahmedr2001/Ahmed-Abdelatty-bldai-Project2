import "../styles.css"

export default function WhoFor(props) {
    const elements = [];
    for (let who of props.course.whoFor) {
        const element = (
            <li className="whoForLI">
                {who}
            </li>
        );
        elements.push(element);
    }

    return (
        <div className="whoFor">
            <h2>Who this course is for:</h2>
            <ul className="whoForUL">
                {elements}
            </ul>
        </div>
    );
}