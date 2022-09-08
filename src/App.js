import logo from './logo.svg';
import './styles.css';
import Card from './components/Card';
import Gallery from './components/Gallery';
import {Outlet, Link, useSearchParams} from 'react-router-dom';

// function searchFunction(event){
// 	event.preventDefault();
// 	let inputField = form.elements['input-field'];
// 	let value = inputField.value.toUpperCase();
// 	let responsive = document.querySelectorAll('.responsive');
// 	for(let i=0;i<responsive.length;i++){
// 		let title = responsive[i].querySelector('.title');
// 		let textValue = title.innerHTML;
// 		if(textValue.toUpperCase().indexOf(value)>-1){
// 			responsive[i].style.display = "";
// 		} else {
// 			responsive[i].style.display = "none";
// 		}                
		
// 	}
// }

function App() {
  let [searchParams, setSearchParams] = useSearchParams({replace:true});
  const filter = 'filter';
  return (
	<div><nav className="nav" style={{height: "35px", position: "sticky", top:"0px", zIndex: "10", backgroundColor: "white"}}>
            <span id="bar"><i className="fa fa-bars fa-2x"></i></span>
            <img className="logo" style={{maxHeight: "100%", display: "inline", paddingTop: "-10px",}} src={require('./images/udemylogo.png')} alt="Udemy Logo" />
            <span style={{display: "inline"}}>Categories</span>
            <form /*onkeyup={searchFunction(event)}*/ id="form" style={{display: "inline"}} action="#" method="post">
                <span style={{display: "inline"}} id="search"><i style={{position: "absolute", paddingTop: "19px", paddingLeft: "15px"}} className="fa fa-search"></i></span>
                <input value={searchParams.get('filter') || ''}
                  onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                      setSearchParams({filter}, {replace:true});
                    } else {
                      setSearchParams({}, { replace: true });
                    }
                  }}
                id="input-field" className="input-field" style={{width: "50%"}} type="text" placeholder="Search for anything" />
                <button className="submit" type="submit">Search</button>
            </form>
            <span style={{display: "inline"}}>Udemy Business</span>
            <span style={{display: "inline"}}>Teach on Udemy</span>
            <button className="login" type="button">Log In</button>
            <button className="signup" type="button">Sign Up</button>
        </nav>
		<Outlet context={searchParams.get('filter') || ''}/>
		</div>
  );
}

export default App;
