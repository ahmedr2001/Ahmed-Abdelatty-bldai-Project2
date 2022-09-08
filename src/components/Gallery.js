import React from "react";
import './Gallery.css'
import Card from "./Card";
import {useOutletContext} from 'react-router-dom';

function Gallery(props) {
    const filter = useOutletContext();
    return (
        <article id="article">
            <div id="python" class="tabcontent">
                    <h2>Expand your career opportunities with Python</h2>
                <p>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language.
                    Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
                    You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
                </p>
                <button class="python" type="button">Explore Python</button>
                </div>
                <Card context={filter} ></Card>
                <div className='clearfix'></div>
        </article>
    );
}

export default Gallery;