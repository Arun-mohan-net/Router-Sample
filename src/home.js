import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Header from './header';

export default function Home(){
const val = 500;
    return (
    <div style={{'text-align': 'center'}}>
        <div style={{'text-align': 'center'}}>Welcome to Grand Store</div>
        <div style={{'margin-top': '50px' }}>
        <input type="number" placeholder="Enter amount"></input><br></br>
        <Link to={'/header/'+val}>
        <button style={{'margin-top': '30px'}}>Generate bill</button>
        </Link>
        </div>
    </div>
    );
}