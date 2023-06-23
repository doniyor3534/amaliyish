import './App.css';
import './Component/All.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux'
import { useEffect } from 'react';
import Navbar from './Component/Navabr/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About';
import Destination from './Component/Destination';
import Contact from './Component/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  // useEffect(()=>{
  //    document.addEventListener('mousemove',(e)=>{
  //       const cursor = document.querySelector('.cursor')
  //       cursor.style.cssText = cursor.style.cssText = "left: " + e.clientX + "px ; top: " + e.clientY + "px";
        
  //    })
  // },[])

  return (
    <div className='wrapper'>
        <Router>
         <Navbar/>

          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/destination' element={<Destination/>}/>
               <Route path='/contact' element={<Contact/>}/>
          </Routes>
         <Footer/>
        </Router>
         {/* <div className="cursor"></div> */}
    </div>
  )
}

export default App;
