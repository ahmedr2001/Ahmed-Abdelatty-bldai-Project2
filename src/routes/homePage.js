import '../styles.css';
import Gallery from '../components/Gallery';

export default function HomePage() {
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
            
                
    <Gallery course={[
        {
				"id": 1,
				"title": "Learn Python: The Complete Python Programming Course",
				"author": "Avinash Jain, The Codex",
				"image": "images/py1.png",
				"rating": 4.4,
				"reviews": 2845,
				"price": 199.99,
				"previous": 679.99 
			},
			{
                "id": 2,
				"title": "Learning Python for Data Analysis and Visualization",
				"author": "Jose Portilla",
				"image": "images/py2.png",
				"rating": 4.4,
				"reviews": 17956,
				"price": 269.99,
				"previous": 1599.99
			},
			{
                "id": 3,
				"title": "Python for Beginners - Programming from scratch",
				"author": "Edwin Diaz, Coding Faculty Solutions",
				"image": "images/py3.png",
				"rating": 4.4,
				"reviews": 1734,
				"price": 199.99,
				"previous": 679.99
			},
			{
                "id": 4,
				"title": "Learn Python: Python for Beginners",
				"author": "Abrar Hussain",
				"image": "images/py4.png",
				"rating": 4.2,
				"reviews": 2759,
				"price": 199.99,
				"previous": 319.99
			},
			{
                "id": 5,
				"title": "Python Beyond the Basics - Object-Oriented Programming",
				"author": "Infinite Skills",
				"image": "images/py5.png",
				"rating": 4.4,
				"reviews": 2927,
				"price": 229.99,
				"previous": 519.99
			}
		]}></Gallery>
        
        
        </section>
  
        </div>
    );
}