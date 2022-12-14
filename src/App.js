import logo from './logo.svg';
import './styles.css';
import Card from './components/Card';
import Gallery from './components/Gallery';
import {Outlet, Link, useSearchParams, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function App() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams({replace:true});
  const filter = 'filter';
  return (
	<div><nav className="nav" style={{height: "35px", position: "sticky", top:"0px", zIndex: "10", backgroundColor: "white"}}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            <img className="logo" style={{maxHeight: "100%", display: "inline", paddingTop: "-10px",}} src={require('./images/udemylogo.png')} alt="Udemy Logo" />
            <span style={{display: "inline"}}>Categories</span>
            <form id="form" style={{display: "inline"}} action="#" method="post">
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
                  onClick={()=>{
                    navigate("/");
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
