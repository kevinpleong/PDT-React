import React from 'react';

//This line imports a few utilities from React-Router.
// BrowserRouter TOP MOST component that we add to our application
// Link is a type of component that can change which page we are looking at
//  The Route import is just something we use to move to different web pages.
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/AboutUs.js';
import Navbar from './components/Navbar.js';
import Footer from './components/footer-component/Footer.js';
import DogTreats from './components/TypesOfDogTreats.js';
import AllIngredients from './components/AllIngredients.js';


  export default class App extends React.Component {
    render() {
      return (
    <div className="container">
      <Router>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/about-us" component={About}/>
        <Route path="/all-ingredients" component={AllIngredients}/>
        <Route path="/types-of-dog-treats" component={DogTreats}/>
        <Route path="/all-ingredients" component={AllIngredients}/>
        <Footer/>
      </Router>
    </div>
  );
  } // END OF RENDER
} // END OF App
