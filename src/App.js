import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Gallery from './components/Gallery';

function App() {
  return (
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
  );
}

export default App;