import React from  'react';
import Navbar from './components/navbar';
// import Footer from './components/footer';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';


function App() {
  return(
      <Router>
        <Navbar />
        <div className='app'>
          <h1>EduFlux App</h1>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path= "/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
  )
}


export default App;