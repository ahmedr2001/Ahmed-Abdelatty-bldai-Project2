import React, {useEffect, useState} from "react";
import './Card.css';

function Card(props) {
        const [courses, setCourses] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3000/python")
            .then((res) => res.json())
            .then((json) => {
                setCourses(json);
            });
        }, []);
        for(const course of courses){
            console.log(course);
        }
        let elements = [];
        for(const course of courses){

            const element =(<div className="responsive">
            <div className="gallery">
                <img src={require(`../images/py${course.id}.png`)} alt={"Card"} width={480} height={320}>
                </img>
                <div className="desc">
                    <p className="title">{course.title}</p>
                    <p>{course.author}</p>
                    <p>
                        <p className="orange">{course.rating}</p>
                        <p className="brackets">{course.reviews}</p>
                    </p>
                    <p>E&#xa3;{course.price}<del>E&#xa3;{course.previous}   </del></p>
                </div>
            </div>
        </div>);
        elements.push(element);   }         
    
        // }
        // for(let i=0;i<5;i++){

        //     const element =(<div className="responsive">
        //     <div className="gallery">
        //         <img src={require(`../images/py${i+1}.png`)} alt={"Card"} width={480} height={320}>
        //         </img>
        //         <div className="desc">
        //             <p className="title">{props.course[i].title}</p>
        //             <p>{props.course[i].author}</p>
        //             <p>
        //                 <p className="orange">{props.course[i].rating}</p>
        //                 <p className="brackets">({props.course[i].reviews})</p>
        //             </p>
        //             <p>E&#xa3;{props.course[i].price}<del>E&#xa3;{props.course[i].previous}   </del></p>
        //         </div>
        //     </div>
        // </div>);
        // elements.push(element);            
    
        // }
        return elements;
}

export default Card;