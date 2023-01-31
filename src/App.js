
import './css/App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/works/Works';
import Pattern from './components/about/Pattern';
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Navbar /> 
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>    
      </Routes>
      <div className='container'>
      <hr className="border border-dark border-1  opacity-100" />
      </div>

      <Pattern/>  
      <Footer /> 
    
    </div>
  );
}

export default App;
