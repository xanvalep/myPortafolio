
import './css/App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/works/Works';
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
      <Footer /> 
    
    </div>
  );
}

export default App;

