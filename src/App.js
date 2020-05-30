import React from 'react';
import './App.css';
import Home from './container/Home'; 
import Header from './components/Header'; 
import Hero from './component/Hero'; 
import {BrowserRouter as Router, Switch} from 'react-router-dom'; 


function App() {
  return (

<Router>
  <div className='App'>
    <Header />
    <Hero />

    <Router path='/' exact component={Home} />
    <Route path='/contact-us' component={ContactUs}/>
    <Route path='/post' component={Post}/>
    

  </div>
</Router>
  );
}

export default App;
