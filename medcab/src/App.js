import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Signup from './components/Signup';
import StrainForm from './components/StrainForm';
import './App.css'
import cannabisleaf from './images/cannabis-leaf.png'
// import GetStrains from './components/GetStrains';
import PrivateRoute from './components/PrivateRoute';
import Display from './components/Display';


export default function App() {
  return (
    <div className="App">
      <Header />
        <img src={cannabisleaf}/>
        <Route exact path='/loginform' component={LoginForm} /> 
        <Route exact path='/' component={Signup} />
        <PrivateRoute path='/display' component={Display} />
        
      
        {/* <Route path='/GetStrains' >
          <GetStrains />
        </Route> */}
          <Footer />
    </div>
  )
};
