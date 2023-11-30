import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';

/* Tolbu8fWWD2qKDdI */

function App() {

  return (
    <BrowserRouter>
      <nav className='nav'>
        <p className= "brand-title">Note🚀</p>
        <div className= "nav-links">
        <Link to = "/" className='nav-link'>Home</Link>
        <Link to = "/create" className='nav-link'>Create</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/create' element = {<Create/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
