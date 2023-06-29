import './App.css';
import './Component/All.css'
import Navbar from './Component/Navabr/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer/Footer';
import Register from './Component/Register';
import LogIn from './Component/LogIn';

function App() {


 
  return (
    <div className='wrapper'>
        <Router>
         <Navbar/>

          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/login' element={<LogIn/>}/>
          </Routes>
         <Footer/>
        </Router>
         
    </div>
  )
}

export default App;
