import '../styles.css';
import Gallery from '../components/Gallery';
import { useOutletContext } from 'react-router-dom';
import python from '../pythonCourses';

export default function HomePage(props) {
	const filter = useOutletContext();
    return (
        <div>
        <header className="flex-container">
            <article className="article">
                <h1>New to Udemy? Lucky you.</h1>
                <p>Courses start at E&#xa3;169.99. Get your new-student offer before it expires.</p>
            </article>
            <img id="alarm" src={require("../images/alarm4.png")} alt="Alarm Clock" />
        </header>
        <section>
            <h2 style={{fontSize: "38px"}}>A broad selection of courses</h2>
            <p style={{fontSize: "20px"}}>Choose from 185,000 online video courses with new additions published every month</p>
            <div className="tab">
                <span className="tablinks" /*onclick="openSubject(event, 'excel')"*/>Excel</span>
                <span className="tablinks" /*onclick="openSubject(event, 'python')"*/>Python</span>
                <span className="tablinks" /*onclick="openSubject(event, 'web')"*/>Web Development</span>
                <span className="tablinks" /*onclick="openSubject(event, 'javascript')"*/>JavaScript</span>
                <span className="tablinks" /*onclick="openSubject(event, 'datasci')"*/>Data Science</span>
                <span className="tablinks" /*onclick="openSubject(event, 'aws')"*/>AWS Certification</span>
                <span className="tablinks" /*onclick="openSubject(event, 'drawing')"*/>Drawing</span>

            </div>
            
                
    <Gallery courses={python} context={filter}></Gallery>
        
        
        </section>
  
        </div>
    );
}