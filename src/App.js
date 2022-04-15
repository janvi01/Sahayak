import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Services from './Pages/Services'
import Helpers from './Pages/Helpers'
import Blogs from './Pages/Blogs'
import Login from './Pages/Login'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Joinourteam from './components/Homepage/Joinourteam';

function App() {
  return (
    //route path for every page
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/helpers">
          <Helpers />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/joinourteam">
          <Joinourteam/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
