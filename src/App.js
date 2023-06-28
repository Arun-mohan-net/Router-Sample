import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChangeEvent, useState, React } from "react";
import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";
import Header from './header';
import Home from "./home";
function App() {
  const showOffer = (amount) => {
    alert(amount.inputText);    
    setShow(true)
  }
  const [inputText, setInputText] = useState("");  
  let [show, setShow] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);
  };
  return (
    <BrowserRouter>
    <header>
      <nav>
          <button>Home</button>
        {show ?
        <div>
          <Link to="/offer1">
          <button>Coupon1</button>
        </Link>
        <Link to="/offer2">
          <button>Coupon2</button>
        </Link>
        <Link to="/offer3">
          <button>Coupon3</button>
        </Link>
        </div> : null}
      </nav>
    </header>
    <body>
    <div style={{'text-align': 'center'}}>
        <div style={{'text-align': 'center'}}>Welcome to Grand Store</div>
        <div style={{'margin-top': '50px' }}>
        <input type="number" onChange={handleChange} value={inputText} placeholder="Enter amount"></input><br></br>
        <button onClick={()=>showOffer({inputText})} style={{'margin-top': '30px'}}>Generate bill</button>
        </div>
    </div>
    </body>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="offer1/:{inputText}" element={<Offer1/>}/>
      <Route path="offer2" element={<Offer2/>}/>
      <Route path="offer3" element={<Offer3/>}/>
      <Route path="header/:amount" element={<Header/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
