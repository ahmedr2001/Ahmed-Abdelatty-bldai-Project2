import React from "react";
import './Card.css';

function Card(props) {
        let elements = [];
        for(let i=0;i<5;i++){

            const element =(<div className="responsive">
            <div className="gallery">
                <img src={require(`../images/py${i+1}.png`)} alt={"Card"} width={480} height={320}>
                </img>
                <div className="desc">
                    <p className="title">{props.course[i].title}</p>
                    <p>{props.course[i].author}</p>
                    <p>
                        <p className="orange">{props.course[i].rating}</p>
                        <p className="brackets">({props.course[i].reviews})</p>
                    </p>
                    <p>E&#xa3;{props.course[i].price}<del>E&#xa3;{props.course[i].previous}   </del></p>
                </div>
            </div>
        </div>);
        elements.push(element);            
    
        }
        return elements;
}

export default Card;