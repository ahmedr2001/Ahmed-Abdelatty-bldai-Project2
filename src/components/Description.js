import "../styles.css";

export default function Description(props) {
    const paragraphs = [];
    for (let para of props.course.description) {
        if(props.course.description.indexOf(para) === 0) {
            const paragraph = (
                <p style={{fontWeight: "bold"}} className="descParagraph">
                    {para}
                </p>
            )
            paragraphs.push(paragraph);    
        } else {
            const paragraph = (
                <p className="descParagraph">
                    {para}
                </p>
            )
            paragraphs.push(paragraph);
        }
    }

    return (
        <div className="description">
            <h2 className="descHeader">Description</h2>
            <div className="descContent">
                {paragraphs}
            </div>
        </div>
    );
}